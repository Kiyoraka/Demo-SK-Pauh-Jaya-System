// auth.js - Authentication and user management

// Authentication functions
function showLoginModal() {
    const loginModal = document.getElementById('loginModal');
    const overlay = document.getElementById('overlay');
    
    // Show the modal and overlay
    loginModal.style.display = 'block';
    overlay.style.display = 'block';
    
    // Focus on the email input for better UX
    setTimeout(() => {
        document.getElementById('email').focus();
    }, 100);
    
    // Prevent form interactions from closing the modal
    const form = document.getElementById('loginForm');
    if (form) {
        // Remove any existing listeners to avoid duplicates
        const newForm = form.cloneNode(true);
        form.parentNode.replaceChild(newForm, form);
        
        // Add the submit event listener
        newForm.addEventListener('submit', handleLogin);
        
        // Stop propagation for all form elements
        const formElements = newForm.querySelectorAll('input, button, select, textarea');
        formElements.forEach(element => {
            element.addEventListener('click', function(e) {
                e.stopPropagation();
            });
        });
    }
}

function closeLoginModal() {
    const loginModal = document.getElementById('loginModal');
    const overlay = document.getElementById('overlay');
    
    // Hide the modal and overlay
    loginModal.style.display = 'none';
    overlay.style.display = 'none';
    
    // Clear form fields
    const email = document.getElementById('email');
    const password = document.getElementById('password');
    if (email) email.value = '';
    if (password) password.value = '';
}

function handleLogin(e) {
    e.preventDefault();
    e.stopPropagation(); // Prevent event from bubbling up to modal
    
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // Hardcoded credentials
    if (email === 'admin@gmail.com' && password === 'admin123') {
        currentUser = { email, role: 'admin', name: 'Administrator' };
        showDashboard('admin');
        closeLoginModal();
    } else if (email === 'parent@gmail.com' && password === 'admin123') {
        currentUser = { email, role: 'parent', name: 'Jennifer Johnson' };
        showDashboard('parent');
        closeLoginModal();
    } else {
        alert('Invalid credentials!');
    }
}

function logout() {
    currentUser = null;
    currentDashboard = null;
    localStorage.removeItem('currentUser');
    showMainPage();
}

function showMainPage() {
    document.getElementById('mainPage').style.display = 'block';
    document.getElementById('adminDashboard').style.display = 'none';
    document.getElementById('parentDashboard').style.display = 'none';
    document.getElementById('loginBtn').classList.remove('hidden');
    document.getElementById('logoutBtn').classList.add('hidden');
    document.getElementById('userInfo').classList.add('hidden');
}

function showDashboard(role) {
    document.getElementById('mainPage').style.display = 'none';
    document.getElementById('loginBtn').classList.add('hidden');
    document.getElementById('logoutBtn').classList.remove('hidden');
    document.getElementById('userInfo').classList.remove('hidden');
    document.getElementById('userInfo').textContent = currentUser.name;

    if (role === 'admin') {
        document.getElementById('adminDashboard').style.display = 'flex';
        document.getElementById('parentDashboard').style.display = 'none';
        setupAdminDashboard();
    } else if (role === 'parent') {
        document.getElementById('parentDashboard').style.display = 'flex';
        document.getElementById('adminDashboard').style.display = 'none';
        setupParentDashboard();
    }

    // Save user state
    localStorage.setItem('currentUser', JSON.stringify(currentUser));
}

// Export authentication functions
window.showLoginModal = showLoginModal;
window.closeLoginModal = closeLoginModal;
window.handleLogin = handleLogin;
window.logout = logout;
window.showMainPage = showMainPage;
window.showDashboard = showDashboard;