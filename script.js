const phrases = ['Web Developer', 'Support Engineer', 'API Expert'];
let phraseIndex = 0;
let charIndex = 0;
const typingSpeed = 70;
const erasingSpeed = 35;
const pauseAfterType = 2000;
const pauseBeforeType = 400;

const container = document.getElementById('typing-container');

function typeChar() {
  const phrase = phrases[phraseIndex];
  const spans = container.querySelectorAll('span');

  if (spans.length > 0) {
    spans[spans.length - 1].style.textDecoration = 'none';
  }

  if (charIndex < phrase.length) {
    const span = document.createElement('span');
    span.textContent = phrase[charIndex] === ' ' ? ' ' : phrase[charIndex];
    span.style.opacity = '0';
    span.style.textDecoration = 'underline';
    container.appendChild(span);
    setTimeout(() => { span.style.opacity = '1'; }, 10);
    charIndex++;
    setTimeout(typeChar, typingSpeed);
  } else {
    setTimeout(eraseChar, pauseAfterType);
  }
}

function eraseChar() {
  const spans = container.querySelectorAll('span');
  if (spans.length > 0) {
    spans[spans.length - 1].remove();
    setTimeout(eraseChar, erasingSpeed);
  } else {
    phraseIndex = (phraseIndex + 1) % phrases.length;
    charIndex = 0;
    setTimeout(typeChar, pauseBeforeType);
  }
}

typeChar();
