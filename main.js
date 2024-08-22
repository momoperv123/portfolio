document.addEventListener("DOMContentLoaded", () => {
  const phrases = [
    "A Striving Software Developer",
    "A Passionate Coder",
    "An Innovative Thinker",
    "A Lifelong Learner",
    "A Creative Problem Solver",
    "An Agile Developer",
    "A Technology Enthusiast",
    "A Team Player",
    "An Effective Communicator",
    "A Front-End Developer",
    "A UI/UX Advocate",
    "A JavaScript Ninja",
    "A Code Perfectionist",
    "A User-Centric Developer",
    "A Solution-Oriented Engineer",
  ];
  
  let currentPhraseIndex = 0;
  let currentLetterIndex = 0;
  const typingSpeed = 100;
  const erasingSpeed = 50;
  const delayBetweenPhrases = 2000;
  
  const typewriterElement = document.querySelector(".typewriter p");

  function type() {
    if (currentLetterIndex < phrases[currentPhraseIndex].length) {
      typewriterElement.textContent += phrases[currentPhraseIndex].charAt(currentLetterIndex);
      currentLetterIndex++;
      setTimeout(type, typingSpeed);
    } else {
      setTimeout(erase, delayBetweenPhrases);
    }
  }
  
  function erase() {
    if (currentLetterIndex > 0) {
      typewriterElement.textContent = phrases[currentPhraseIndex].substring(0, currentLetterIndex - 1);
      currentLetterIndex--;
      setTimeout(erase, erasingSpeed);
    } else {
      currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
      setTimeout(type, typingSpeed);
    }
  }
  
  setTimeout(type, delayBetweenPhrases);

  const bubbles = document.querySelectorAll('.bubble');

  bubbles.forEach(bubble => {
    const randomLeft = Math.random() * 100 + 'vw';
    const randomDuration = Math.random() * 10 + 5 + 's';
    const randomDelay = Math.random() * 5 + 's';

    bubble.style.left = randomLeft;
    bubble.style.animationDuration = randomDuration;
    bubble.style.animationDelay = randomDelay;
  });
});
