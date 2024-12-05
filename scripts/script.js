document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");
  let activeCard = null;

  cards.forEach((card, index) => {
    card.addEventListener("click", (event) => {
      event.stopPropagation();

      // Si on reclique sur la carte déjà agrandie, on la réduit
      if (activeCard === card) {
        if (document.startViewTransition) {
          document.startViewTransition(() => {
            card.classList.remove("expanded");
            activeCard = null;
          });
        } else {
          card.classList.remove("expanded");
          activeCard = null;
        }
        return;
      }

      // Si un autre bouton est déjà agrandi, le réduire
      if (activeCard && activeCard !== card) {
        activeCard.classList.remove("expanded");
      }

      // Utiliser View Transition API si supportée
      if (document.startViewTransition) {
        document.startViewTransition(() => {
          card.classList.toggle("expanded");
          activeCard = card.classList.contains("expanded") ? card : null;
        });
      } else {
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
