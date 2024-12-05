document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  const container = document.querySelector(".grid-container");
  let activeCard = null;

  cards.forEach((card) => {
    card.addEventListener("click", (event) => {
      // Empêcher la propagation pour éviter la fermeture immédiate
      event.stopPropagation();

      // Si un autre bouton est déjà agrandi, le réduire
      if (activeCard && activeCard !== card) {
        activeCard.classList.remove("expanded");
      }

      // Utiliser View Transition API si supportée
      if (document.startViewTransition) {
        document.startViewTransition(() => {
          // Toggle de la classe expanded
          card.classList.toggle("expanded");
          activeCard = card.classList.contains("expanded") ? card : null;
        });
      } else {
        // Fallback sans View Transition
        card.classList.toggle("expanded");
        activeCard = card.classList.contains("expanded") ? card : null;
      }
    });
  });

  // Fermer la carte agrandie en cliquant à l'extérieur
  document.addEventListener("click", (event) => {
    if (activeCard && !activeCard.contains(event.target)) {
      if (document.startViewTransition) {
        document.startViewTransition(() => {
          activeCard.classList.remove("expanded");
          activeCard = null;
        });
      } else {
        activeCard.classList.remove("expanded");
        activeCard = null;
      }
    }
  });
});
