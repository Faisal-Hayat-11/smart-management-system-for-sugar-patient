// Sample Data for Demonstration
const users = [
    { id: 1, name: "John Doe", email: "john@example.com", role: "User" },
    { id: 2, name: "Jane Smith", email: "jane@example.com", role: "Admin" }
];

const contactMessages = [
    { id: 1, name: "Alice", email: "alice@example.com", message: "Need help with my diet plan." },
    { id: 2, name: "Bob", email: "bob@example.com", message: "How to lower sugar levels?" }
];

// Populate User Table
function populateUserTable() {
    const userTableBody = document.getElementById("userTableBody");
    userTableBody.innerHTML = users.map(user => `
        <tr>
            <td>${user.id}</td>
            <td>${user.name}</td>
            <td>${user.email}</td>
            <td>${user.role}</td>
            <td>
                <button onclick="editUser(${user.id})">Edit</button>
                <button onclick="deleteUser(${user.id})">Delete</button>
            </td>
        </tr>
    `).join("");
}

// Populate Contact Table
function populateContactTable() {
    const contactTableBody = document.getElementById("contactTableBody");
    contactTableBody.innerHTML = contactMessages.map(message => `
        <tr>
            <td>${message.id}</td>
            <td>${message.name}</td>
            <td>${message.email}</td>
            <td>${message.message}</td>
            <td>
                <button onclick="replyToMessage(${message.id})">Reply</button>
                <button onclick="deleteMessage(${message.id})">Delete</button>
            </td>
        </tr>
    `).join("");
}

// Diet Plan Generation
document.getElementById("dietPlanForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const calories = document.getElementById("calories").value;
    const sugarLevel = document.getElementById("sugarLevel").value;
    document.getElementById("dietPlanResult").innerHTML = `<p>Diet Plan Generated for ${calories} calories and ${sugarLevel} mg/dL sugar level.</p>`;
});

// Health Prediction
document.getElementById("healthPredictionForm").addEventListener("submit", function (e) {
    e.preventDefault();
    const calories = document.getElementById("caloriesInput").value;
    const activity = document.getElementById("activityInput").value;
    const sleep = document.getElementById("sleepInput").value;
    const weight = document.getElementById("weightInput").value;
    document.getElementById("healthPredictionResult").innerHTML = `<p>Predicted Sugar Level: 120 mg/dL (Example)</p>`;
});

// Admin Functions
function backupDatabase() {
    alert("Database backup initiated.");
}

function clearCache() {
    alert("Cache cleared.");
}

function generateReport() {
    alert("Report generated.");
}

// Initialize Tables
populateUserTable();
populateContactTable();