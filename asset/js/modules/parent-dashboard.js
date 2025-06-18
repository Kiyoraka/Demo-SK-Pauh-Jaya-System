// parent-dashboard.js - Parent portal features

// Parent dashboard setup
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

// Show parent dashboard section
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

// Profile management
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

// Child management
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

// Export parent dashboard functions
window.setupParentDashboard = setupParentDashboard;
window.showParentSection = showParentSection;
window.updateProfile = updateProfile;
window.addChild = addChild;