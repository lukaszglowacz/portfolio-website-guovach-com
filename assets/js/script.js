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
document.addEventListener("DOMContentLoaded", function() {
    const projectCards = document.querySelectorAll(".project-card");
    let activeCardIndex = 0;
    const projectSlider = document.querySelector(".project-slider");

    function changeProjectCard() {
        projectCards[activeCardIndex].classList.remove("active");
        activeCardIndex++;

        if (activeCardIndex >= projectCards.length) {
            activeCardIndex = 0;
        }

        projectCards[activeCardIndex].classList.add("active");
        projectSlider.style.backgroundImage = `url(${projectCards[activeCardIndex].dataset.bg})`;
    }

    // Set the background of the slider to the first project card's background initially
    projectSlider.style.backgroundImage = `url(${projectCards[0].dataset.bg})`;

    setInterval(changeProjectCard, 5000); // Change the project card every 5 seconds
});