// script.js

document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab');
    const tabContents = document.querySelectorAll('.tab-content');

    tabs.forEach(tab => {
        tab.addEventListener('click', function (event) {
            event.preventDefault();

            // Remove the "active" class from all tab content sections
            tabContents.forEach(content => {
                content.classList.remove('active');
            });

            // Hide all tab content sections
            tabContents.forEach(content => {
                content.style.display = 'none';
            });

            // Show the selected tab's content
            const targetId = tab.getAttribute('href').substring(1);
            const targetContent = document.getElementById(targetId);
            targetContent.style.display = 'block';
            targetContent.classList.add('active');
        });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', function (event) {
            event.preventDefault();
            tabs.forEach(t => t.classList.remove('active')); // Remove the class from all tabs
            tab.classList.add('active'); // Add the class to the clicked tab
        });
    });
});
