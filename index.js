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
    const sixthrow= document.querySelector('.sixthrow',);
    const windowHeight = window.innerHeight;

    window.addEventListener('scroll', () => {
        // Get the position of the .sixthrow section
        const scrollY = window.scrollY || window.pageYOffset;
        const sixthrowTop = sixthrow.getBoundingClientRect().top + scrollY;
        
        // Check if the .sixthrow section has scrolled into view
        if (scrollY + windowHeight > sixthrowTop) {
            sixthrow.classList.add('sixthrow-visible');
        }
    });
});


document.addEventListener('DOMContentLoaded', function () {
    // Get all the elements with class 'question'
    var questions = document.querySelectorAll('.question');

    // Iterate through each question
    questions.forEach(function(question) {
        // Add a click event listener to each question
        question.addEventListener('click', function() {
            // This will toggle the 'active' class on the answer div
            var answer = this.nextElementSibling;
            answer.style.display = answer.style.display === 'none' ? 'block' : 'none';
            
            // This will toggle the rotate class on the SVG icon
            var icon = this.nextElementSibling.nextElementSibling;
            icon.classList.toggle('rotate');
        });
    });
});

function openMenu() {
    document.body.classList += " menu--open"
  }
  
  function closeMenu() {
    document.body.classList.remove('menu--open')
  }