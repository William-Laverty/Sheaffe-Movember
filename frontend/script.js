const users = [
    {"firstName": "Ted", "lastName": "Niven", "yearLevel": 11},
    {"firstName": "Ioanna", "lastName": "Diamond", "yearLevel": 11},
    {"firstName": "Oliver", "lastName": "Susa", "yearLevel": 11},
    {"firstName": "Jeremy", "lastName": "Richardson", "yearLevel": 10},
    {"firstName": "Louise", "lastName": "Mann", "yearLevel": 10},
    {"firstName": "Bradley", "lastName": "Brown", "yearLevel": 10},
    {"firstName": "Nash", "lastName": "Kidner", "yearLevel": 9},
    {"firstName": "Zara", "lastName": "Herring", "yearLevel": 9},
    {"firstName": "Khann", "lastName": "Thai", "yearLevel": 8},
    {"firstName": "Catherine", "lastName": "Lim", "yearLevel": 8},
    
    {"firstName": "Carter", "lastName": "O'Sullivan", "yearLevel": 11},
    {"firstName": "Nellie", "lastName": "Byron", "yearLevel": 11},
    {"firstName": "Ben", "lastName": "McGregor", "yearLevel": 10},
    {"firstName": "Leo", "lastName": "Gao", "yearLevel": 10},
    {"firstName": "Eve", "lastName": "De Kleuver", "yearLevel": 10},
    {"firstName": "Ananya", "lastName": "Rai", "yearLevel": 9},
    {"firstName": "Gabriel", "lastName": "Bowman", "yearLevel": 9},
    {"firstName": "Christopher", "lastName": "Carroll", "yearLevel": 9},
    {"firstName": "Mia", "lastName": "Langevald", "yearLevel": 8},
    {"firstName": "Adam", "lastName": "Okera", "yearLevel": 8},
    {"firstName": "Dylan", "lastName": "Herath", "yearLevel": 8},
    
    {"firstName": "Dillon", "lastName": "Anderson", "yearLevel": 11},
    {"firstName": "Winnie", "lastName": "Herring", "yearLevel": 11},
    {"firstName": "Flora", "lastName": "Dong", "yearLevel": 11},
    {"firstName": "Ben", "lastName": "Jiang", "yearLevel": 10},
    {"firstName": "Maddie", "lastName": "Harris-Talbot", "yearLevel": 10},
    {"firstName": "Freddy", "lastName": "Gaffey", "yearLevel": 10},
    {"firstName": "Henry", "lastName": "Dolphin", "yearLevel": 9},
    {"firstName": "Abigail", "lastName": "Reiner", "yearLevel": 9},
    {"firstName": "Dylan", "lastName": "Campbell", "yearLevel": 8},
    {"firstName": "Vaishnavi", "lastName": "Raghav", "yearLevel": 8},
    {"firstName": "Iggy", "lastName": "Knight", "yearLevel": 8},
    
    {"firstName": "Ava", "lastName": "O'Donnell", "yearLevel": 11},
    {"firstName": "Oscar", "lastName": "Danta", "yearLevel": 11},
    {"firstName": "Charlie", "lastName": "McCarthy-Lee", "yearLevel": 10},
    {"firstName": "Abigail", "lastName": "Cowan", "yearLevel": 10},
    {"firstName": "Luca", "lastName": "Wah", "yearLevel": 10},
    {"firstName": "Caitlin", "lastName": "Anderson", "yearLevel": 9},
    {"firstName": "Michael", "lastName": "Dendrinos", "yearLevel": 9},
    {"firstName": "Oscar", "lastName": "Harris-Talbot", "yearLevel": 8},
    {"firstName": "Lexie", "lastName": "Fooks", "yearLevel": 8},
    {"firstName": "Hunter", "lastName": "Crawford", "yearLevel": 8},
    
    {"firstName": "Griffin", "lastName": "Hambly", "yearLevel": 11},
    {"firstName": "Brooke", "lastName": "Kilby", "yearLevel": 11},
    {"firstName": "Tristan", "lastName": "Hannan", "yearLevel": 10},
    {"firstName": "Milan", "lastName": "Bradaric", "yearLevel": 10},
    {"firstName": "Caitlin", "lastName": "Sheldon", "yearLevel": 10},
    {"firstName": "Nandan", "lastName": "Kottu", "yearLevel": 9},
    {"firstName": "Ava", "lastName": "Moulis", "yearLevel": 9},
    {"firstName": "Will", "lastName": "Hall", "yearLevel": 9},
    {"firstName": "Stan", "lastName": "Cleverly", "yearLevel": 8},
    {"firstName": "Amelie", "lastName": "Wertenauer", "yearLevel": 8},
    
    {"firstName": "Sophia", "lastName": "Smith", "yearLevel": 11},
    {"firstName": "Finn", "lastName": "Webber", "yearLevel": 11},
    {"firstName": "Dylan", "lastName": "Phelps", "yearLevel": 11},
    {"firstName": "Oliver", "lastName": "Terrell", "yearLevel": 10},
    {"firstName": "Nick", "lastName": "Andrea", "yearLevel": 10},
    {"firstName": "John", "lastName": "Nikias", "yearLevel": 10},
    {"firstName": "Archer", "lastName": "Doherty", "yearLevel": 9},
    {"firstName": "Issy", "lastName": "Massey", "yearLevel": 9},
    {"firstName": "Julian", "lastName": "Susa", "yearLevel": 8},
    {"firstName": "Ada", "lastName": "Duckworth", "yearLevel": 8},
    {"firstName": "Myrah", "lastName": "Dahal", "yearLevel": 8},
    
    {"firstName": "Lily", "lastName": "Bowman", "yearLevel": 11},
    {"firstName": "Alex", "lastName": "Gardner", "yearLevel": 11},
    {"firstName": "Will", "lastName": "Laverty", "yearLevel": 11},
    {"firstName": "Isaac", "lastName": "Halcrow", "yearLevel": 10},
    {"firstName": "Iona", "lastName": "Mcneil", "yearLevel": 10},
    {"firstName": "Aaron", "lastName": "Jones", "yearLevel": 10},
    {"firstName": "Matilda", "lastName": "Danta", "yearLevel": 9},
    {"firstName": "Ben", "lastName": "O'Donnell", "yearLevel": 9},
    {"firstName": "Sam", "lastName": "Andrea", "yearLevel": 9},
    {"firstName": "William", "lastName": "Plazier", "yearLevel": 8},
    {"firstName": "Ngala", "lastName": "Meredith", "yearLevel": 8},
    
    {"firstName": "Grace", "lastName": "Minney", "yearLevel": 11},
    {"firstName": "Archie", "lastName": "Vagg", "yearLevel": 11},
    {"firstName": "Iris", "lastName": "Rangiah", "yearLevel": 10},
    {"firstName": "Bradley", "lastName": "Ardler", "yearLevel": 10},
    {"firstName": "Lilli", "lastName": "Cheadle", "yearLevel": 10},
    {"firstName": "Chloe", "lastName": "Webber", "yearLevel": 9},
    {"firstName": "Darcy", "lastName": "Woodward", "yearLevel": 9},
    {"firstName": "Archer", "lastName": "Glaskin", "yearLevel": 8},
    {"firstName": "Miah", "lastName": "Howard", "yearLevel": 8},
    {"firstName": "George", "lastName": "De Kleuver", "yearLevel": 8}
];

// public/script.js

// Elements
const addButton = document.getElementById('addButton');
const modalOverlay = document.getElementById('modalOverlay');
const modalClose = document.getElementById('modalClose');
const loginForm = document.getElementById('loginForm');
const loginButton = loginForm.querySelector('button[type="submit"]');
const originalButtonText = loginButton.textContent;
const loginView = document.getElementById('loginView');
const addDistanceView = document.getElementById('addDistanceView');
const errorMessage = document.getElementById('errorMessage');
const userFullName = document.getElementById('userFullName');
let currentUser = null;

async function checkServerConnection() {
    try {
        const response = await fetch('http://localhost:3000/api/leaderboard');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        console.log('Server connection successful');
        return true;
    } catch (error) {
        console.error('Server connection failed:', error);
        return false;
    }
}

// Event Listeners
addButton.addEventListener('click', () => {
    modalOverlay.style.display = 'flex';
    loginView.style.display = 'block';
    addDistanceView.style.display = 'none';
    errorMessage.style.display = 'none';
    loginForm.reset();
});

modalClose.addEventListener('click', closeModal);
modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) {
        closeModal();
    }
});

loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const lastName = document.getElementById('lastName').value;
    const yearLevel = parseInt(document.getElementById('yearLevel').value);

    const user = users.find(u => 
        u.lastName.toLowerCase() === lastName.toLowerCase() && 
        u.yearLevel === yearLevel
    );

    if (user) {
        currentUser = user;
        loginView.style.display = 'none';
        addDistanceView.style.display = 'block';
        userFullName.textContent = `Welcome, ${user.firstName} ${user.lastName}`;
        loginButton.textContent = originalButtonText;
        loginButton.classList.remove('invalid');
    } else {
        loginButton.textContent = 'Invalid User';
        loginButton.classList.add('invalid');
        setTimeout(() => {
            loginButton.textContent = originalButtonText;
            loginButton.classList.remove('invalid');
        }, 2000);
    }
});

// Add the distance form submit handler
const distanceForm = document.getElementById('distanceForm');
distanceForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const distanceInput = document.getElementById('distance');
    const distance = parseFloat(distanceInput.value);
    
    if (distance <= 0) {
        alert('Please enter a valid distance');
        return;
    }

    const payload = {
        firstName: currentUser.firstName,
        lastName: currentUser.lastName,
        yearLevel: currentUser.yearLevel,
        distance: distance
    };

    console.log('Submitting distance payload:', payload);

    try {
        const response = await fetch('http://localhost:3000/api/distance', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        console.log('Server response:', data);
        
        if (data.success) {
            alert('Distance added successfully!');
            distanceForm.reset();
            closeModal();
            updateLeaderboard();
        } else {
            alert(`Error adding distance: ${data.error}`);
        }
    } catch (error) {
        console.error('Error submitting distance:', error);
        alert(`Error adding distance: ${error.message}`);
    }
});

async function updateLeaderboard() {
    try {
        const response = await fetch('http://localhost:3000/api/leaderboard');
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const users = await response.json();
        console.log('Leaderboard data:', users);
        
        const leaderboardSection = document.querySelector('.leaderboard-section');
        leaderboardSection.innerHTML = '<h3 class="leaderboard-title">Leaderboard</h3>';
        
        let totalDistance = 0;
        
        users.forEach((user, index) => {
            totalDistance += user.totalDistance || 0;
            
            const entry = document.createElement('div');
            entry.className = 'leaderboard-entry';
            entry.innerHTML = `
                <span class="rank">${index + 1}${getRankSuffix(index + 1)} Place</span>
                <span class="participant">${user.firstName} ${user.lastName}</span>
                <span class="distance">${(user.totalDistance || 0).toFixed(1)}km</span>
            `;
            leaderboardSection.appendChild(entry);
        });
        
        document.querySelector('.progress-text').textContent = `${totalDistance.toFixed(1)}km`;
    } catch (error) {
        console.error('Error updating leaderboard:', error);
        // Don't show alert for leaderboard errors, just log to console
    }
}

function getRankSuffix(rank) {
    if (rank > 3 && rank < 21) return 'th';
    switch (rank % 10) {
        case 1: return 'st';
        case 2: return 'nd';
        case 3: return 'rd';
        default: return 'th';
    }
}

function closeModal() {
    modalOverlay.style.display = 'none';
    loginForm.reset();
    errorMessage.style.display = 'none';
}

// Initialize leaderboard on page load
document.addEventListener('DOMContentLoaded', async () => {
    const serverAvailable = await checkServerConnection();
    if (serverAvailable) {
        updateLeaderboard();
    } else {
        console.error('Unable to connect to server');
    }
});

