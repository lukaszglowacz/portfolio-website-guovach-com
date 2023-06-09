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

    let intervalId = setInterval(changeProjectCard, 15000); // Change the project card every 5 seconds
});


// Changing slide with animation
function changeProjectCard() {
    projectCards[activeCardIndex].classList.remove("active");
    projectCards[activeCardIndex].style.opacity = "0";
    setTimeout(() => {
        activeCardIndex++;

        if (activeCardIndex >= projectCards.length) {
            activeCardIndex = 0;
        }

        projectCards[activeCardIndex].style.opacity = "1";
        projectCards[activeCardIndex].classList.add("active");
        projectSlider.style.backgroundImage = `url(${projectCards[activeCardIndex].dataset.bg})`;
    }, 3000);
}


// Active link when user scroll webiste
document.addEventListener("DOMContentLoaded", function () {
    const navLinks = document.querySelectorAll(".nav-links li a");
    const sections = document.querySelectorAll("section");
  
    function setActiveNavLink() {
      let currentIndex = sections.length;
  
      while (--currentIndex && window.scrollY + 50 < sections[currentIndex].offsetTop) {
        // Empty block
      }
  
      navLinks.forEach((navLink) => navLink.classList.remove("active"));
      navLinks[currentIndex].classList.add("active");
    }
  
    setActiveNavLink();
    window.addEventListener("scroll", setActiveNavLink);
  });

  
//   Reload and go to the top when user click logo icon

function scrollToTop(duration) {
    return new Promise((resolve) => {
      window.scrollTo({ top: 0, behavior: "smooth" });
      setTimeout(resolve, duration);
    });
  }

async function reloadAndScrollToTop() {
    await scrollToTop(700);
    location.reload();
  }

// When the user scrolls the page, execute myFunction 

window.onscroll = function() {myFunction()};

function myFunction() {
  var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
  var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  var scrolled = (winScroll / height) * 100;
  document.getElementById("myBar").style.width = scrolled + "%";
}


// Transform menu button on mobile devices and add an animation

const navUp = document.querySelector('.fa-bars');

  navUp.addEventListener('click', () => {
    navUp.classList.toggle('active');
});

const tripleMenu = document.querySelector('.fa-bars');
const navLinks = document.querySelector('.nav-links');
const navLinksList = document.querySelectorAll('.nav-links li');

tripleMenu.addEventListener('click', () => {
  navLinks.classList.toggle('active');
});

navLinksList.forEach((li) => {
  li.addEventListener('click', () => {
    navLinks.classList.remove('active');
    navUp.classList.remove('active');
  });
});