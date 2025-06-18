// auth.js - Authentication and user management

// Authentication functions
function showLoginModal() {
    document.getElementById('loginModal').style.display = 'block';
    document.getElementById('overlay').style.display = 'block';
}

function closeLoginModal() {
    document.getElementById('loginModal').style.display = 'none';
    document.getElementById('overlay').style.display = 'none';
}

function handleLogin(e) {
    e.preventDefault();
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