// script.js - Main JavaScript file that imports all modules

// Wait for DOM to be ready
document.addEventListener('DOMContentLoaded', function() {
    // Define modules to load in the correct order
    const modules = [
        'utils',       // Load utility functions first
        'auth',        // Then authentication
        'admin-dashboard',
        'parent-dashboard',
        'site-management',
        'reports',
        'payments',
        'main'         // Main initialization last
    ];
    
    // Load modules sequentially with promises
    loadModulesSequentially(modules)
        .then(() => {
            console.log('All modules loaded successfully');
            // Initialize application manually after all modules are loaded
            initializeApp();
        })
        .catch(error => {
            console.error('Error loading modules:', error);
        });
});

// Function to load modules sequentially using promises
function loadModulesSequentially(moduleNames) {
    return moduleNames.reduce((promise, moduleName) => {
        return promise.then(() => {
            return loadModuleAsync(moduleName);
        });
    }, Promise.resolve());
}

// Load a single module and return a promise
function loadModuleAsync(moduleName) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = `asset/js/modules/${moduleName}.js`;
        
        script.onload = () => {
            console.log(`Module ${moduleName} loaded successfully`);
            resolve();
        };
        
        script.onerror = () => {
            reject(new Error(`Failed to load module: ${moduleName}`));
        };
        
        document.body.appendChild(script);
    });
}

// Initialize application after all modules are loaded
function initializeApp() {
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
}

/*
 * This file serves as the entry point for all JavaScript functionality
 * Each module is separated for better organization and maintainability
 * as specified in the project scope document.
 */