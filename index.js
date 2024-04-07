document.addEventListener('DOMContentLoaded', (event) => {
    const fourthrow = document.querySelector('.fourthrow');
    const windowHeight = window.innerHeight;

    window.addEventListener('scroll', () => {
        // Get the position of the .fourthrow section
        const scrollY = window.scrollY || window.pageYOffset;
        const fourthrowTop = fourthrow.getBoundingClientRect().top + scrollY;
        
        // Check if the .fourthrow section has scrolled into view
        if (scrollY + windowHeight > fourthrowTop) {
            fourthrow.classList.add('fourthrow-visible');
        }
    });
});