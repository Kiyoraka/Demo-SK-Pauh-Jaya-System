// main.js - Application initialization

// Global variables
let currentUser = null;
let currentDashboard = null;

// Initialize the application
document.addEventListener('DOMContentLoaded', function() {
    // Check if user is already logged in (simulated)
    const savedUser = localStorage.getItem('currentUser');
    if (savedUser) {
        currentUser = JSON.parse(savedUser);
        showDashboard(currentUser.role);
    }

    // Set up event listeners
    document.getElementById('loginBtn').addEventListener('click', showLoginModal);
    document.getElementById('heroLoginBtn').addEventListener('click', showLoginModal);
    document.getElementById('logoutBtn').addEventListener('click', logout);
    document.getElementById('homeLink').addEventListener('click', showMainPage);
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
    document.getElementById('paymentForm').addEventListener('submit', handlePayment);
});

// Export global variables and functions
window.currentUser = currentUser;
window.currentDashboard = currentDashboard;