document.addEventListener('DOMContentLoaded', function() {
    // Sample email data
    const emails = [
        {
            id: 1,
            sender: 'John Doe',
            email: 'john@example.com',
            subject: 'Meeting Tomorrow',
            preview: 'Hi there, just a reminder about our meeting tomorrow at 10 AM...',
            body: 'Hi there,\n\nJust a reminder about our meeting tomorrow at 10 AM in the conference room. Please bring your project updates.\n\nBest regards,\nJohn',
            date: 'Today, 10:30 AM',
            read: false,
            starred: false
        },
        {
            id: 2,
            sender: 'Amazon',
            email: 'no-reply@amazon.com',
            subject: 'Your Order Has Shipped',
            preview: 'Your recent order #12345 has shipped and will arrive...',
            body: 'Hello,\n\nYour recent order #12345 has shipped and will arrive in 2-3 business days. You can track your package using the following link: [tracking link]\n\nThank you for shopping with us!\n\nAmazon Customer Service',
            date: 'Yesterday, 3:45 PM',
            read: true,
            starred: true
        },
        {
            id: 3,
            sender: 'LinkedIn',
            email: 'updates@linkedin.com',
            subject: 'New connection request',
            preview: 'You have a new connection request from Sarah Miller...',
            body: 'You have a new connection request from Sarah Miller.\n\nSarah is a Marketing Director at XYZ Corp.\n\nAccept or ignore this request at your convenience.\n\n- The LinkedIn Team',
            date: 'Mar 15, 9:20 AM',
            read: true,
            starred: false
        },
        {
            id: 4,
            sender: 'GitHub',
            email: 'notifications@github.com',
            subject: 'Pull Request: Feature/user-authentication',
            preview: 'A new pull request has been opened in your repository...',
            body: 'A new pull request has been opened in your repository by developer123.\n\nBranch: feature/user-authentication\n\nPlease review the changes and provide feedback.\n\n- GitHub',
            date: 'Mar 14, 5:12 PM',
            read: false,
            starred: false
        },
        {
            id: 5,
            sender: 'Netflix',
            email: 'info@netflix.com',
            subject: 'New shows added to your list',
            preview: 'We\'ve added new shows based on your preferences...',
            body: 'Hello,\n\nWe\'ve added new shows based on your preferences:\n\n- Stranger Things Season 4\n- The Crown\n- Ozark\n\nHappy streaming!\n\n- The Netflix Team',
            date: 'Mar 12, 11:05 AM',
            read: true,
            starred: true
        }
    ];

    // DOM elements
    const emailList = document.querySelector('.email-list');
    const emailDetail = document.getElementById('emailDetail');
    const closeDetail = document.getElementById('closeDetail');
    const composeBtn = document.querySelector('.compose-btn');
    const composeModal = document.getElementById('composeModal');
    const closeCompose = document.getElementById('closeCompose');
    const composeForm = document.getElementById('composeForm');

    // Render email list
    function renderEmails() {
        emailList.innerHTML = '';
        emails.forEach(email => {
            const emailItem = document.createElement('div');
            emailItem.className = `email-item ${email.read ? '' : 'unread'}`;
            emailItem.innerHTML = `
                <div class="email-checkbox"><input type="checkbox"></div>
                <div class="email-sender">${email.sender}</div>
                <div class="email-subject">${email.subject}</div>
                <div class="email-preview">${email.preview}</div>
                <div class="email-date">${email.date}</div>
            `;
            emailItem.addEventListener('click', () => showEmailDetail(email.id));
            emailList.appendChild(emailItem);
        });
    }

    // Show email detail
    function showEmailDetail(id) {
        const email = emails.find(e => e.id === id);
        if (!email) return;

        document.getElementById('emailSubject').textContent = email.subject;
        document.getElementById('senderEmail').textContent = email.email;
        document.getElementById('emailDate').textContent = email.date;
        document.getElementById('emailBody').textContent = email.body;

        // Mark as read
        if (!email.read) {
            email.read = true;
            renderEmails();
        }

        emailDetail.style.display = 'flex';
    }

    // Close email detail
    closeDetail.addEventListener('click', () => {
        emailDetail.style.display = 'none';
    });

    // Open compose modal
    composeBtn.addEventListener('click', () => {
        composeModal.style.display = 'flex';
    });

    // Close compose modal
    closeCompose.addEventListener('click', () => {
        composeModal.style.display = 'none';
    });

    // Handle compose form submission
    composeForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const to = document.getElementById('composeTo').value;
        const subject = document.getElementById('composeSubject').value;
        const body = document.getElementById('composeBody').value;

        // In a real app, you would send this to your backend
        alert(`Email to ${to} with subject "${subject}" would be sent in a real app.`);
        
        // Reset form and close modal
        composeForm.reset();
        composeModal.style.display = 'none';
    });

    // Initial render
    renderEmails();
});
