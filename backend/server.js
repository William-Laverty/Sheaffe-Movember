const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { MongoClient, ServerApiVersion } = require('mongodb');
const path = require('path');

const app = express();
const port = 5500; // Changed to match your frontend port

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());
app.use(express.static(path.join(__dirname, '../public')));

// Add request logging middleware
app.use((req, res, next) => {
    console.log(`${new Date().toISOString()} - ${req.method} ${req.url}`);
    next();
});

const uri = "mongodb+srv://william:sgGDUQyUDbb2fYpx@sheaffe.mhcvp.mongodb.net/?retryWrites=true&w=majority&appName=Sheaffe";

const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

let dbConnection = null;

async function connectToMongoDB() {
    if (dbConnection) return dbConnection;
    
    try {
        await client.connect();
        console.log("Connected to MongoDB Atlas");
        dbConnection = client.db("movember");
        return dbConnection;
    } catch (err) {
        console.error("Error connecting to MongoDB Atlas:", err);
        throw err;
    }
}

app.post('/api/distance', async (req, res) => {
    console.log('Received distance submission:', req.body);
    
    try {
        if (!dbConnection) {
            dbConnection = await connectToMongoDB();
        }

        const { firstName, lastName, yearLevel, distance } = req.body;
        
        // Log the parsed values
        console.log('Parsed values:', {
            firstName,
            lastName,
            yearLevel,
            distance: parseFloat(distance)
        });

        const collection = dbConnection.collection('users');
        
        const result = await collection.updateOne(
            { 
                firstName: firstName,
                lastName: lastName,
                yearLevel: parseInt(yearLevel)
            },
            { 
                $inc: { totalDistance: parseFloat(distance) },
                $setOnInsert: { 
                    firstName,
                    lastName,
                    yearLevel: parseInt(yearLevel)
                }
            },
            { upsert: true }
        );

        console.log('Database operation result:', result);

        res.json({ 
            success: true,
            message: result.upsertedId ? 'New record created' : 'Record updated'
        });
    } catch (error) {
        console.error('Error in /api/distance:', error);
        res.status(500).json({ 
            success: false, 
            error: error.message 
        });
    }
});

app.get('/api/leaderboard', async (req, res) => {
    console.log('Leaderboard request received');
    
    try {
        if (!dbConnection) {
            dbConnection = await connectToMongoDB();
        }

        const collection = dbConnection.collection('users');
        const users = await collection
            .find({})
            .sort({ totalDistance: -1 })
            .toArray();

        console.log(`Found ${users.length} users for leaderboard`);
        res.json(users);
    } catch (error) {
        console.error('Error in /api/leaderboard:', error);
        res.status(500).json({ 
            success: false, 
            error: error.message 
        });
    }
});

// Start server
async function startServer() {
    try {
        await connectToMongoDB();
        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    } catch (error) {
        console.error('Failed to start server:', error);
        process.exit(1);
    }
}

startServer();