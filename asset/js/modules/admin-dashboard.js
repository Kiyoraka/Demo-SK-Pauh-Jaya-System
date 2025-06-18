// admin-dashboard.js - Administrative functionality

// Admin dashboard setup
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

// Show admin dashboard section
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

// Export admin dashboard functions
window.setupAdminDashboard = setupAdminDashboard;
window.showAdminSection = showAdminSection;