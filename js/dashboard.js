// Dashboard functionality
document.addEventListener('DOMContentLoaded', function() {
    // Check authentication
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    if (!isLoggedIn) {
        window.location.href = 'index.html';
        return;
    }

    // Set username
    const username = localStorage.getItem('username') || 'User';
    document.getElementById('username').textContent = username;

    // Navigation handling
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const section = this.getAttribute('data-section');
            loadSection(section);
        });
    });

    // Quick action buttons
    document.querySelectorAll('[data-action]').forEach(button => {
        button.addEventListener('click', function() {
            const action = this.getAttribute('data-action');
            handleQuickAction(action);
        });
    });

    // Logout handling
    document.getElementById('logoutBtn').addEventListener('click', function(e) {
        e.preventDefault();
        logout();
    });

    // Help chat button
    document.getElementById('helpBtn').addEventListener('click', function() {
        toggleHelpChat();
    });

    // Initialize dashboard
    loadSection('dashboard');
});

function loadSection(section) {
    // Update active navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('data-section') === section) {
            link.classList.add('active');
        }
    });

    // Load section content
    const mainContent = document.querySelector('.dashboard-container');
    // In a real implementation, this would load the appropriate content
    // For now, we'll just update the title
    document.title = `Merchandise Management - ${section.charAt(0).toUpperCase() + section.slice(1)}`;
}

function handleQuickAction(action) {
    switch(action) {
        case 'new-record':
            // Open new record modal
            alert('New Record functionality will be implemented');
            break;
        case 'generate-report':
            // Open report generation modal
            alert('Report Generation functionality will be implemented');
            break;
        case 'view-ledger':
            // Open ledger view
            alert('Ledger View functionality will be implemented');
            break;
    }
}

function toggleHelpChat() {
    // Toggle help chat visibility
    const helpChat = document.querySelector('.help-chat');
    helpChat.classList.toggle('active');
    
    if (helpChat.classList.contains('active')) {
        // Load help content
        loadHelpContent();
    }
}

function loadHelpContent() {
    // This would load dynamic help content based on the current section
    const helpContent = `
        <div class="help-content">
            <h3>Help Center</h3>
            <div class="help-search">
                <input type="text" placeholder="Search help topics...">
            </div>
            <div class="help-topics">
                <h4>Common Topics</h4>
                <ul>
                    <li>How to create a new record</li>
                    <li>Understanding shipment status</li>
                    <li>Generating reports</li>
                    <li>Managing accounts</li>
                </ul>
            </div>
        </div>
    `;
    
    const helpChat = document.querySelector('.help-chat');
    helpChat.innerHTML = helpContent;
}

// Status update functions
function updateStatus(section, status, message) {
    const statusElement = document.querySelector(`[data-section="${section}"] .status-card p`);
    if (statusElement) {
        statusElement.className = `status-${status}`;
        statusElement.textContent = message;
    }
}

// Search functionality
const searchInput = document.querySelector('.input-group input');
searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase();
    // Implement search functionality
    console.log('Searching for:', searchTerm);
}); 