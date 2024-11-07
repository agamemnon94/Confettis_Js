const confettis = () => {
  const body = document.querySelector("body");
  let confetti = document.createElement("div");

  confetti.classList.add("drop");

  // Dimensions aléatoire des confettis
  confetti.style.width = Math.random() * 20 + 2 + "px";
  confetti.style.height = Math.random() * 40 + 10 + "px";

  // Application de l'animation
  confetti.style.animationName = "confettisFalls";
  // Propriétés aléatoire de l'animation
  confetti.style.animationDuration = Math.random() * 2 + 1 + "s";
  confetti.style.animationTimingFunction = "ease-in";
  confetti.style.animationFillMode = "forwards";

  // Position aléatoire de confettis
  confetti.style.left = Math.random() * window.innerWidth + "px";

  // Couleur aléatoire
  const r = Math.floor(Math.random() * 256);
  const g = Math.floor(Math.random() * 256);
  const b = Math.floor(Math.random() * 256);
  confetti.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

  // Sens de rotation aléatoire
  const rotationDirection = Math.random() < 0.5 ? 1 : -1;
  confetti.style.setProperty("--rotation-direction", rotationDirection);

  const rotationYDirection = Math.random() < 0.5 ? 1 : -1;
  confetti.style.setProperty("--rotation-y-direction", rotationYDirection);

  body.appendChild(confetti);

  setTimeout(() => {
    confetti.remove();
  }, 3000);
};

setInterval(confettis, 10);
