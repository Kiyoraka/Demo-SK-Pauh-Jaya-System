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

// Modal event listeners
document.addEventListener('DOMContentLoaded', function() {
    // Prevent overlay from closing modal when clicking inside modal content
    const modalContents = document.querySelectorAll('.modal-content');
    modalContents.forEach(content => {
        content.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    });
    
    // Payment popup content click stop propagation
    const paymentPopup = document.querySelector('.payment-popup');
    if (paymentPopup) {
        paymentPopup.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    }
    
    // Handle overlay clicks to close modals
    const overlay = document.getElementById('overlay');
    if (overlay) {
        overlay.addEventListener('click', function() {
            closeAllModals();
        });
    }
    
    // Stop window.onclick from handling modal closes - we'll use specific handlers
    window.originalOnclick = window.onclick;
    window.onclick = null;
});

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