// Authentication handling
document.addEventListener('DOMContentLoaded', function() {
    // Check if user is already logged in
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (isLoggedIn) {
        window.location.href = 'dashboard.html';
    }

    // WeChat QR code scanning simulation
    const qrCode = document.querySelector('.qr-container img');
    if (qrCode) {
        qrCode.addEventListener('click', function() {
            // This is a placeholder for actual WeChat integration
            // In a real implementation, this would handle the WeChat QR code scanning
            simulateWeChatLogin();
        });
    }
});

function simulateWeChatLogin() {
    // Simulate WeChat group verification
    const isImportDocMember = confirm('Are you a member of the "Import.doc" WeChat group?');
    
    if (isImportDocMember) {
        localStorage.setItem('isLoggedIn', 'true');
        localStorage.setItem('username', 'forazi'); // Default admin
        window.location.href = 'dashboard.html';
    } else {
        alert('Access denied. Only members of the "Import.doc" WeChat group can access this system.');
    }
}

// Logout function
function logout() {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('username');
    window.location.href = 'index.html';
} 