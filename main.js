// This file contains all the JavaScript functionality extracted from the original HTML file. 
// It includes the FAQ toggle functionality and smooth scrolling for anchor links.

document.querySelectorAll('#faq button').forEach(button => {
    button.addEventListener('click', () => {
        const faqItem = button.parentElement;
        const content = button.nextElementSibling;
        
        // Close all other FAQ items
        document.querySelectorAll('#faq div').forEach(item => {
            if (item !== faqItem) {
                item.querySelector('div').style.display = 'none';
                item.querySelector('svg').style.transform = 'rotate(0deg)';
            }
        });
        
        // Toggle current FAQ item
        if (content.style.display === 'block') {
            content.style.display = 'none';
            button.querySelector('svg').style.transform = 'rotate(0deg)';
        } else {
            content.style.display = 'block';
            button.querySelector('svg').style.transform = 'rotate(180deg)';
        }
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});