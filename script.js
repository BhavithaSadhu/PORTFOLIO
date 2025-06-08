
AOS.init({ duration: 1000 });

// Typewriter effect for the subtitle
const typewriterElement = document.getElementById('typewriter');
const text = 'A Frontend Developer';
let index = 0;

function typeWriter() {
  if (index < text.length) {
    typewriterElement.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  } else {
    typewriterElement.style.borderRight = 'none';
  }
}

setTimeout(typeWriter, 1200);

// Sound effects with error handling
const hoverSound = document.getElementById('hoverSound');
const clickSound = document.getElementById('clickSound');
const successSound = document.getElementById('successSound');

hoverSound.onerror = () => console.error('Failed to load hover sound');
clickSound.onerror = () => console.error('Failed to load click sound');
successSound.onerror = () => console.error('Failed to load success sound');

function playSound(audio) {
  audio.currentTime = 0;
  audio.play().catch(error => {
    console.error('Error playing sound:', error);
  });
}

document.querySelectorAll('.nav-link, .cta-button').forEach(element => {
  element.addEventListener('mouseover', () => {
    playSound(hoverSound);
  });
});

document.querySelector('.cta-button').addEventListener('click', () => {
  playSound(clickSound);
});

// Toggle menu for mobile
function toggleMenu() {
  const navLinks = document.getElementById('navLinks');
  navLinks.classList.toggle('active');
}

// Scroll to section function
function scrollToSection(sectionId) {
  document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

// Remove blocking form submission - Netlify will handle it
document.getElementById('contact-form').addEventListener('submit', function() {
  playSound(successSound);
});
