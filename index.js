document.addEventListener('DOMContentLoaded', (event) => {
    const features= document.querySelector('.features',);
    const windowHeight = window.innerHeight;

    window.addEventListener('scroll', () => {
        // Get the position of the .features section
        const scrollY = window.scrollY || window.pageYOffset;
        const featuresTop = features.getBoundingClientRect().top + scrollY;
        
        // Check if the .features section has scrolled into view
        if (scrollY + windowHeight > featuresTop) {
            features.classList.add('features-visible');
        }
    });
});
document.addEventListener('DOMContentLoaded', (event) => {
    const services= document.querySelector('.services',);
    const windowHeight = window.innerHeight;

    window.addEventListener('scroll', () => {
        // Get the position of the .services section
        const scrollY = window.scrollY || window.pageYOffset;
        const servicesTop = services.getBoundingClientRect().top + scrollY;
        
        // Check if the .services section has scrolled into view
        if (scrollY + windowHeight > servicesTop) {
            services.classList.add('services-visible');
        }
    });
});

document.addEventListener('DOMContentLoaded', (event) => {
    const fourthrow = document.querySelector('.fourthrow',);
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

document.addEventListener('DOMContentLoaded', (event) => {
    const fifthrow= document.querySelector('.fifthrow',);
    const windowHeight = window.innerHeight;

    window.addEventListener('scroll', () => {
        // Get the position of the .fifthrow section
        const scrollY = window.scrollY || window.pageYOffset;
        const fifthrowTop = fifthrow.getBoundingClientRect().top + scrollY;
        
        // Check if the .fifthrow section has scrolled into view
        if (scrollY + windowHeight > fifthrowTop) {
            fifthrow.classList.add('fifthrow-visible');
        }
    });
});
document.addEventListener('DOMContentLoaded', (event) => {
    const wireframe= document.querySelector('.wireframe',);
    const windowHeight = window.innerHeight;

    window.addEventListener('scroll', () => {
        // Get the position of the .wireframe section
        const scrollY = window.scrollY || window.pageYOffset;
        const wireframeTop = wireframe.getBoundingClientRect().top + scrollY;
        
        // Check if the .wireframe section has scrolled into view
        if (scrollY + windowHeight > wireframeTop) {
            wireframe.classList.add('wireframe-visible');
        }
    });
});
