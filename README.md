# Merchandise Management System

A comprehensive web-based system for managing merchandise shipments, inventory, and financial transactions.

## Features

- **Authentication System**
  - WeChat QR code-based login
  - Role-based access control
  - Secure session management

- **Dashboard**
  - Real-time shipment status overview
  - Quick access to key functions
  - Dynamic search capabilities

- **Core Modules**
  - Cargo Loading Management
  - Import & Custom Documentation
  - Delivery & Inventory Tracking
  - Financial Accounts & Ledger

- **Document Management**
  - Support for Excel, PDF, and Image files
  - Document tracking and versioning
  - Automated status updates

- **Financial Management**
  - Multi-currency support (BDT, USD, RMB)
  - Automated ledger maintenance
  - Payment tracking and reconciliation

## Technical Stack

- HTML5
- CSS3 (Bootstrap 5)
- JavaScript (Vanilla)
- Local Storage for data persistence

## Project Structure

```
merchandise/
├── index.html          # Login page
├── dashboard.html      # Main dashboard
├── css/
│   └── styles.css      # Main stylesheet
├── js/
│   ├── auth.js         # Authentication handling
│   └── dashboard.js    # Dashboard functionality
└── assets/             # Static assets (images, etc.)
```

## Setup Instructions

1. Clone the repository
2. Open `index.html` in a web browser
3. Scan the QR code with WeChat to access the system

## Usage

1. **Login**
   - Access the system by scanning the QR code with WeChat
   - Only members of the "Import.doc" WeChat group can access

2. **Dashboard**
   - View overall shipment status
   - Access different modules through the navigation menu
   - Use the search bar to find specific records

3. **Document Management**
   - Upload and track shipping documents
   - Monitor document status and progress
   - Generate reports and export data

4. **Financial Management**
   - Track payments and transactions
   - Maintain ledger records
   - Generate financial reports

## Development

This project uses vanilla JavaScript and Bootstrap 5 for the frontend. No build process is required.

## Security

- All sensitive data is stored locally
- Access is restricted to authorized WeChat group members
- Session management through browser storage

## Contributing

This is a personal project for internal use. External contributions are not accepted at this time.

## License

Private - All rights reserved 