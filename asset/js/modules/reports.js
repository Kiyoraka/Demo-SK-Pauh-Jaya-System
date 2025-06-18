// reports.js - Report handling system

// Report management
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

// View report details
function viewReportDetails(reportId) {
    // This function would typically show a modal with report details
    // For the demo, we'll just show an alert
    alert(`Viewing details for report ${reportId}`);
}

// Add a new report
function addReport(studentName, subject, description) {
    // This would typically add a new report to the system
    // For the demo, we'll just show an alert
    alert(`New report added for ${studentName}: ${subject}`);
}

// Export report functions
window.solveReport = solveReport;
window.viewReportDetails = viewReportDetails;
window.addReport = addReport;