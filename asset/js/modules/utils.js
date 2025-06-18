// utils.js - Utility functions and helpers

// Date formatting
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
}

// Modal management
function closeAllModals() {
    closeLoginModal();
    closePaymentPopup();
}

// Window event listeners for closing modals when clicking outside
window.onclick = function(event) {
    const loginModal = document.getElementById('loginModal');
    const overlay = document.getElementById('overlay');
    
    if (event.target === loginModal || event.target === overlay) {
        closeAllModals();
    }
};

// Form validation helper
function validateForm(formId, requiredFields) {
    const form = document.getElementById(formId);
    let isValid = true;
    
    requiredFields.forEach(field => {
        const input = form.querySelector(`#${field}`);
        if (!input.value.trim()) {
            isValid = false;
            input.classList.add('error');
        } else {
            input.classList.remove('error');
        }
    });
    
    return isValid;
}

// Generate unique ID
function generateId(prefix) {
    return `${prefix}${Date.now().toString(36)}${Math.random().toString(36).substr(2, 5)}`;
}

// Export utility functions
window.formatDate = formatDate;
window.closeAllModals = closeAllModals;
window.validateForm = validateForm;
window.generateId = generateId;