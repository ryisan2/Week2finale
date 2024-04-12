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



let slideIndex = 1;

function showSlides(n) {
  let i;
  const slides = document.getElementsByClassName("mySlides");
  const dots = document.getElementsByClassName("dot");

  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }

  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

// Initialize the slideshow
showSlides(slideIndex);

