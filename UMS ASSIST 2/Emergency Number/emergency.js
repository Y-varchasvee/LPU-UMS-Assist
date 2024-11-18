// emergency.js

document.addEventListener('DOMContentLoaded', () => {
    // Toggle display of contact lists on section header click
    const sectionHeaders = document.querySelectorAll('.section-header');
    sectionHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const contactList = header.nextElementSibling;
            contactList.style.display = contactList.style.display === 'block' ? 'none' : 'block';
        });
    });

    // Filter contacts based on search input
    const searchInput = document.getElementById('search');
    searchInput.addEventListener('input', () => {
        const filter = searchInput.value.toLowerCase();
        const contactSections = document.querySelectorAll('.contact-section');

        contactSections.forEach(section => {
            const contacts = section.querySelectorAll('.contact');
            let sectionMatch = false;

            contacts.forEach(contact => {
                const text = contact.textContent.toLowerCase();
                const isMatch = text.includes(filter);
                contact.style.display = isMatch ? 'block' : 'none';

                if (isMatch) {
                    sectionMatch = true;
                }
            });

            // Show or hide the entire section based on matches within it
            section.style.display = sectionMatch ? 'block' : 'none';
        });
    });
});
