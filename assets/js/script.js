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