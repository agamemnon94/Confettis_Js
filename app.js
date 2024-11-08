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
  constructor(
    interval = 10,
    duration = 3000,
    startEvent = null,
    endEvent = null,
    optionalEndEvent = null
  ) {
    this.body = document.querySelector("body");
    this.interval = interval; // Interval de création des confettis
    this.duration = duration; // Durée de vie de chaque confetti
    this.startEvent = startEvent; // Évènement qui peut aussi déclencher l'animation
    this.endEvent = endEvent; // Évènement qui peut aussi arêter l'animation
    this.optionalEndEvent = optionalEndEvent; // Évènement optionnel pour arrêter l'animation
    this.intervalId = null;

    if (this.startEvent) {
      this.startEvent.addEventListener("click", () => this.start());
    }

    if (this.endEvent) {
      this.endEvent.addEventListener(
        this.endEvent.tagName === "BUTTON" ? "click" : "focus",
        () => this.stop()
      );
    }

    if (this.optionalEndEvent) {
      this.optionalEndEvent.addEventListener(
        this.optionalEndEvent.tagName === "BUTTON" ? "click" : "focus",
        () => this.stop()
      );
    }
  }

  /**
   * Démarrer l'animation des confettis
   */
  start() {
    if (!this.intervalId) {
      this.intervalId = setInterval(() => this.createConfetti(), this.interval);
    }
  }

  /**
   * Arrêter l'animation des confettis
   */
  stop() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
      this.intervalId = null;
    }
  }

  /**
   * Créer un confetti
   */
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

// Utilisation de l'objet (Pour une utilisation dans une autre page : Ajouter "export" devant le nom de la Class ou de l'objet et copier le code ↓ ci-dessous ↓ dans la page concernée)
const confettiAnimation = new ConfettiAnimation(10, 3000, start, email, end);

// ↓ Pour conditionner l'utilisation de l'animation à une page précise, décommenter et renseigner ↓
// if (window.location.pathname === "/maintenance") {
confettiAnimation.start();

// Arrêter les confettis après un certain temps, par exemple 10 secondes
setTimeout(() => {
  confettiAnimation.stop();
}, 5000);
// }
