  const messages = [
    "DEVELOPER",
    "ENGINEER",
  ];

  let messageIndex = 1;
  let charIndex = 0;
  const typingSpeed = 200; // milliseconds per character
  const pauseBetweenMessages = 2000; // pause before deleting
  const element = document.getElementById("typewriter");

  function typeMessage() {
    if (charIndex < messages[messageIndex].length) {
      element.textContent += messages[messageIndex].charAt(charIndex);
      charIndex++;
      setTimeout(typeMessage, typingSpeed);
    } else {
      setTimeout(eraseMessage, pauseBetweenMessages);
    }
  }

  function eraseMessage() {
    if (charIndex > 0) {
      element.textContent = messages[messageIndex].substring(0, charIndex - 1);
      charIndex--;
      setTimeout(eraseMessage, typingSpeed / 2);
    } else {
      messageIndex = (messageIndex + 1) % messages.length;
      setTimeout(typeMessage, typingSpeed);
    }
  };


  // Start the loop
  typeMessage();


  // back to the top
  const backToTopBtn = document.getElementById("backToTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 400) {
    backToTopBtn.style.display = "inline-block";
  } else {
    backToTopBtn.style.display = "none";
  }
});

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});