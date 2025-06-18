// script.js - Main JavaScript file that imports all modules

// Import order is important for dependencies
document.addEventListener('DOMContentLoaded', function() {
    // Load utility functions first since they're used by other modules
    loadModule('utils');
    
    // Load authentication module
    loadModule('auth');
    
    // Load dashboard modules
    loadModule('admin-dashboard');
    loadModule('parent-dashboard');
    
    // Load feature modules
    loadModule('site-management');
    loadModule('reports');
    loadModule('payments');
    
    // Load main module last to initialize the application
    loadModule('main');
});

// Dynamic module loading function
function loadModule(moduleName) {
    const script = document.createElement('script');
    script.src = `asset/js/modules/${moduleName}.js`;
    document.body.appendChild(script);
}

/*
 * This file serves as the entry point for all JavaScript functionality
 * Each module is separated for better organization and maintainability
 * as specified in the project scope document.
 */