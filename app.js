// // * ↓ En utilisant une structure littérale d'objet ↓
//  const confettis = {
//   body: document.querySelector("body"),
//   interval: 10, // Intervalle de création des confettis en millisecondes
//   duration: 3000, // Durée de vie de chaque confetti en millisecondes
//   intervalId: null, // Identifiant de l'intervalle pour pouvoir le stopper

//   // Méthode pour démarrer l'animation
//   start() {
//     if (!this.intervalId) {
//       this.intervalId = setInterval(() => this.createConfetti(), this.interval);
//     }
//   },

//   // Méthode pour arrêter l'animation
//   stop() {
//     if (this.intervalId) {
//       clearInterval(this.intervalId);
//       this.intervalId = null;
//     }
//   },

//   // Méthode pour créer un confetti
//   createConfetti() {
//     const confetti = document.createElement("div");
//     confetti.classList.add("drop");

//     // Dimensions aléatoires du confetti
//     confetti.style.width = Math.random() * 20 + 2 + "px";
//     confetti.style.height = Math.random() * 40 + 10 + "px";

//     // Animation et propriétés aléatoires
//     confetti.style.animationName = "confettisFalls";
//     confetti.style.animationDuration = Math.random() * 2 + 1 + "s";
//     confetti.style.animationTimingFunction = "ease-in";
//     confetti.style.animationFillMode = "forwards";
//     confetti.style.left = Math.random() * window.innerWidth + "px";

//     // Couleur aléatoire
//     const r = Math.floor(Math.random() * 256);
//     const g = Math.floor(Math.random() * 256);
//     const b = Math.floor(Math.random() * 256);
//     confetti.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

//     // Sens de rotation aléatoire
//     const rotationDirection = Math.random() < 0.5 ? 1 : -1;
//     confetti.style.setProperty("--rotation-direction", rotationDirection);

//     const rotationYDirection = Math.random() < 0.5 ? 1 : -1;
//     confetti.style.setProperty("--rotation-y-direction", rotationYDirection);

//     // Ajout du confetti au body
//     this.body.appendChild(confetti);

//     // Suppression du confetti après sa durée de vie
//     setTimeout(() => {
//       confetti.remove();
//     }, this.duration);
//   },
// };

// // Utilisation de l'objet
// if (window.location.pathname === "/maintenance") {
//   confettis.start();

//   // Arrêter les confettis après un certain temps, par exemple 10 secondes
//   setTimeout(() => {
//     confettis.stop();
//   }, 10000);
// }

// * ↓ En utilisant une Class ↓
class ConfettiAnimation {
  constructor(interval = 10, duration = 3000) {
    this.body = document.querySelector("body");
    this.interval = interval; // Interval de création des confettis
    this.duration = duration; // Durée de vie de chaque confetti
    this.intervalId = null;
  }

  // Méthode pour démarrer l'animation
  start() {
    if (!this.intervalId) {
      this.intervalId = setInterval(() => this.createConfetti(), this.interval);
    }
  }

  // Méthode pour arrêter l'animation
  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  // Méthode pour créer un confetti
  createConfetti() {
    const confetti = document.createElement("div");
    confetti.classList.add("drop");

    // Dimensions aléatoires du confetti
    confetti.style.width = Math.random() * 20 + 2 + "px";
    confetti.style.height = Math.random() * 40 + 10 + "px";

    // Animation et propriétés aléatoires
    confetti.style.animationName = "confettisFalls";
    confetti.style.animationDuration = Math.random() * 2 + 1 + "s";
    confetti.style.animationTimingFunction = "ease-in";
    confetti.style.animationFillMode = "forwards";
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

    // Ajout du confetti au body
    this.body.appendChild(confetti);

    // Suppression du confetti après sa durée de vie
    setTimeout(() => {
      confetti.remove();
    }, this.duration);
  }
}

// Utilisation de l'objet
const confettiAnimation = new ConfettiAnimation(10, 3000);

// if (window.location.pathname === "/maintenance") {
confettiAnimation.start();

// Arrêter les confettis après un certain temps, par exemple 10 secondes
setTimeout(() => {
  confettiAnimation.stop();
}, 10000);
// }
