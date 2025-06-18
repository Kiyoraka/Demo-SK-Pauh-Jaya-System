// main.js
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

    // Event listeners
    document.getElementById('loginBtn').addEventListener('click', showLoginModal);
    document.getElementById('heroLoginBtn').addEventListener('click', showLoginModal);
    document.getElementById('logoutBtn').addEventListener('click', logout);
    document.getElementById('homeLink').addEventListener('click', showMainPage);
    document.getElementById('loginForm').addEventListener('submit', handleLogin);
    document.getElementById('paymentForm').addEventListener('submit', handlePayment);
});

// auth.js
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

// admin-dashboard.js
function setupAdminDashboard() {
    currentDashboard = 'admin';
    
    // Setup sidebar navigation
    const sidebarLinks = document.querySelectorAll('.sidebar-link');
    sidebarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.getAttribute('data-section');
            showAdminSection(section);
            
            // Update active link
            sidebarLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

function showAdminSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.dashboard-section');
    sections.forEach(section => section.classList.remove('active'));
    
    // Show selected section
    document.getElementById(sectionId).classList.add('active');
    
    // Update dashboard title
    const titles = {
        'admin-main': 'Admin Dashboard',
        'site-management': 'Site Management',
        'payment-list': 'Payment Management',
        'report-list': 'Report Management'
    };
    document.getElementById('dashboardTitle').textContent = titles[sectionId];
}

// site-management.js
function updateBanner() {
    const title = document.getElementById('bannerTitle').value;
    const subtitle = document.getElementById('bannerSubtitle').value;
    
    // Update the main page banner
    const heroContent = document.querySelector('.hero-content');
    heroContent.querySelector('h1').textContent = title;
    heroContent.querySelector('p').textContent = subtitle;
    
    alert('Banner updated successfully!');
}

function addActivity() {
    const title = document.getElementById('activityTitle').value;
    const date = document.getElementById('activityDate').value;
    const description = document.getElementById('activityDescription').value;
    
    if (!title || !date || !description) {
        alert('Please fill all fields');
        return;
    }
    
    const activitiesList = document.getElementById('activitiesList');
    const newActivity = document.createElement('div');
    newActivity.className = 'activity-item';
    newActivity.innerHTML = `
        <h3>${title}</h3>
        <p class="date">${formatDate(date)}</p>
        <p>${description}</p>
    `;
    
    activitiesList.insertBefore(newActivity, activitiesList.firstChild);
    
    // Clear form
    document.getElementById('activityTitle').value = '';
    document.getElementById('activityDate').value = '';
    document.getElementById('activityDescription').value = '';
    
    alert('Activity added successfully!');
}

function addProgram() {
    const title = document.getElementById('programTitle').value;
    const date = document.getElementById('programDate').value;
    const description = document.getElementById('programDescription').value;
    
    if (!title || !date || !description) {
        alert('Please fill all fields');
        return;
    }
    
    const programsList = document.getElementById('programsList');
    const newProgram = document.createElement('div');
    newProgram.className = 'program-item';
    newProgram.innerHTML = `
        <h3>${title}</h3>
        <p class="date">${formatDate(date)}</p>
        <p>${description}</p>
    `;
    
    programsList.insertBefore(newProgram, programsList.firstChild);
    
    // Clear form
    document.getElementById('programTitle').value = '';
    document.getElementById('programDate').value = '';
    document.getElementById('programDescription').value = '';
    
    alert('Program added successfully!');
}

function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
        year: 'numeric', 
        month: 'long', 
        day: 'numeric' 
    });
}

// reports.js
function solveReport(reportId) {
    // Find the report row and update status
    const reportRows = document.querySelectorAll('#reportTableBody tr');
    reportRows.forEach(row => {
        const idCell = row.querySelector('td:first-child');
        if (idCell.textContent === `#${reportId}`) {
            const statusCell = row.querySelector('.status');
            statusCell.textContent = 'Solved';
            statusCell.className = 'status solved';
            
            // Update action buttons
            const actionsCell = row.querySelector('td:last-child');
            actionsCell.innerHTML = '<button class="btn btn-secondary">View</button>';
        }
    });
    
    alert(`Report ${reportId} marked as solved!`);
}

// parent-dashboard.js
function setupParentDashboard() {
    currentDashboard = 'parent';
    
    // Setup sidebar navigation
    const parentSidebarLinks = document.querySelectorAll('.parent-sidebar-link');
    parentSidebarLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.getAttribute('data-section');
            showParentSection(section);
            
            // Update active link
            parentSidebarLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

function showParentSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.dashboard-section');
    sections.forEach(section => section.classList.remove('active'));
    
    // Show selected section
    document.getElementById(sectionId).classList.add('active');
    
    // Update dashboard title
    const titles = {
        'parent-main': 'Parent Dashboard',
        'parent-profile': 'Profile Management',
        'parent-reports': 'Reports',
        'parent-payments': 'Payments'
    };
    document.getElementById('parentDashboardTitle').textContent = titles[sectionId];
}

function updateProfile() {
    const name = document.getElementById('parentName').value;
    const email = document.getElementById('parentEmail').value;
    const phone = document.getElementById('parentPhone').value;
    const address = document.getElementById('parentAddress').value;
    
    // Update current user info
    if (currentUser) {
        currentUser.name = name;
        currentUser.email = email;
        localStorage.setItem('currentUser', JSON.stringify(currentUser));
        document.getElementById('userInfo').textContent = name;
    }
    
    alert('Profile updated successfully!');
}

function addChild() {
    const childName = prompt('Enter child name:');
    const childGrade = prompt('Enter grade:');
    const childClass = prompt('Enter class:');
    const childRoll = prompt('Enter roll number:');
    
    if (childName && childGrade && childClass && childRoll) {
        const childrenList = document.getElementById('childrenList');
        const newChild = document.createElement('li');
        newChild.innerHTML = `
            <strong>${childName}</strong><br>
            Grade: ${childGrade}<br>
            Class: ${childClass}<br>
            Roll No: ${childRoll}
        `;
        childrenList.appendChild(newChild);
        
        // Add to payment dropdown
        const paymentSelect = document.getElementById('paymentName');
        const option = document.createElement('option');
        option.value = childName;
        option.textContent = childName;
        paymentSelect.appendChild(option);
        
        alert('Child added successfully!');
    }
}

// payments.js
function showPaymentPopup(paymentId = null) {
    document.getElementById('paymentPopup').classList.add('active');
    document.getElementById('overlay').style.display = 'block';
    
    if (paymentId) {
        // Pre-fill form for specific payment
        document.getElementById('paymentName').value = 'Alex Johnson';
        document.getElementById('paymentAmount').value = '2500';
    }
}

function closePaymentPopup() {
    document.getElementById('paymentPopup').classList.remove('active');
    document.getElementById('overlay').style.display = 'none';
}

function handlePayment(e) {
    e.preventDefault();
    
    const studentName = document.getElementById('paymentName').value;
    const amount = document.getElementById('paymentAmount').value;
    const method = document.getElementById('paymentMethod').value;
    const notes = document.getElementById('paymentNotes').value;
    
    if (!studentName || !amount || !method) {
        alert('Please fill all required fields');
        return;
    }
    
    // Simulate payment processing
    setTimeout(() => {
        alert(`Payment of ₹${amount} for ${studentName} processed successfully!`);
        
        // Update payment status in table
        const paymentRows = document.querySelectorAll('#parentPaymentTableBody tr');
        paymentRows.forEach(row => {
            const nameCell = row.querySelectorAll('td')[1];
            if (nameCell.textContent === studentName) {
                const statusCell = row.querySelector('.status');
                statusCell.textContent = 'Paid';
                statusCell.className = 'status paid';
                
                const actionsCell = row.querySelector('td:last-child');
                actionsCell.innerHTML = '<button class="btn btn-secondary">Receipt</button>';
            }
        });
        
        closePaymentPopup();
        
        // Clear form
        document.getElementById('paymentForm').reset();
    }, 2000);
}

// utils.js
function closeAllModals() {
    closeLoginModal();
    closePaymentPopup();
}

// Close modals when clicking outside
window.onclick = function(event) {
    const loginModal = document.getElementById('loginModal');
    const overlay = document.getElementById('overlay');
    
    if (event.target === loginModal || event.target === overlay) {
        closeAllModals();
    }
}