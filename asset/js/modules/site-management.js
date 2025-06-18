// site-management.js - Content management system

// Banner management
function updateBanner() {
    const title = document.getElementById('bannerTitle').value;
    const subtitle = document.getElementById('bannerSubtitle').value;
    
    // Update the main page banner
    const heroContent = document.querySelector('.hero-content');
    heroContent.querySelector('h1').textContent = title;
    heroContent.querySelector('p').textContent = subtitle;
    
    alert('Banner updated successfully!');
}

// Activity management
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

// Program management
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

// Export site management functions
window.updateBanner = updateBanner;
window.addActivity = addActivity;
window.addProgram = addProgram;