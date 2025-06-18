// payments.js - Payment processing interface

// Payment popup management
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

// Payment processing
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

// Generate payment receipt
function generateReceipt(paymentId) {
    // This would typically generate a printable receipt
    // For the demo, we'll just show an alert
    alert(`Generating receipt for payment ${paymentId}`);
}

// Send payment reminder
function sendPaymentReminder(studentName, amount, dueDate) {
    // This would typically send a reminder to the parent
    // For the demo, we'll just show an alert
    alert(`Reminder sent to parent of ${studentName} for payment of ₹${amount} due on ${dueDate}`);
}

// Export payment functions
window.showPaymentPopup = showPaymentPopup;
window.closePaymentPopup = closePaymentPopup;
window.handlePayment = handlePayment;
window.generateReceipt = generateReceipt;
window.sendPaymentReminder = sendPaymentReminder;