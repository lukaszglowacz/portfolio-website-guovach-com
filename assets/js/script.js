let currentParagraph = 1;

function nextParagraph() {
  const prevParagraph = document.getElementById(`paragraph${currentParagraph}`);
  prevParagraph.classList.remove("active");

  currentParagraph += 1;

  if (currentParagraph > 3) {
    currentParagraph = 1;
  }

  const newParagraph = document.getElementById(`paragraph${currentParagraph}`);
  newParagraph.classList.add("active");
}

// // Initialize the first paragraph as active
document.getElementById("paragraph1").classList.add("active");


function downloadPDF() {
  window.open('/assets/files/resume.pdf', '_blank');
}


// Projects slideshow
let slideIndex = 0;
const projectCards = document.querySelectorAll('.project-card');

// Function to show the next slide
function showNextSlide() {
  // Get the current and next slide indexes
  const currentSlideIndex = slideIndex;
  slideIndex = (slideIndex + 1) % projectCards.length;
  const nextSlideIndex = slideIndex;

  // Add the active class to the next slide and remove it from the current slide
  projectCards[currentSlideIndex].classList.remove('active');
  projectCards[nextSlideIndex].classList.add('active');
}

// Automatically show the next slide every 5 seconds
setInterval(showNextSlide, 5000);