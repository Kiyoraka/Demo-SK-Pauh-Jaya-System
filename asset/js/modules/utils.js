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

// Add event listeners to prevent clicks inside modal content from closing the modal
document.addEventListener('DOMContentLoaded', function() {
    // Stop propagation of clicks inside modal content
    const modalContents = document.querySelectorAll('.modal-content, .payment-popup');
    modalContents.forEach(content => {
        content.addEventListener('click', function(event) {
            event.stopPropagation();
        });
    });
});

// Window event listeners for closing modals when clicking outside
window.onclick = function(event) {
    const loginModal = document.getElementById('loginModal');
    const overlay = document.getElementById('overlay');
    const paymentPopup = document.getElementById('paymentPopup');
    
    // Only close if clicking directly on the modal background or overlay, not on modal content
    if ((event.target === loginModal || event.target === overlay || event.target === paymentPopup) && 
        !event.target.closest('.modal-content') && 
        !event.target.closest('.payment-popup')) {
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