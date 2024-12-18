document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container_card");
  const cards = document.querySelectorAll(".card");
  let activeCard = null;

  cards.forEach((card) => {
    card.addEventListener("click", (event) => {
      event.stopPropagation();

      // Si on reclique sur la carte déjà agrandie, on la réduit
      if (activeCard === card) {
        if (document.startViewTransition) {
          document.startViewTransition(() => {
            card.classList.remove("expanded");

            container.classList.remove("has-expanded-card");
            activeCard = null;
            requestAnimationFrame(() => {
              card.classList.remove("animate");
            });
          });
        } else {
          card.classList.remove("expanded");
          card.classList.remove("animate");
          container.classList.remove("has-expanded-card");
          activeCard = null;
        }
        return;
      }

      // Si un autre bouton est déjà agrandi, le réduire
      if (activeCard && activeCard !== card) {
        activeCard.classList.remove("expanded");
      }

      card.classList.add("animate");
      // Utiliser View Transition API si supportée
      if (document.startViewTransition) {
        document.startViewTransition(() => {
          // Réinitialiser les autres cartes
          cards.forEach((c) => c.classList.remove("expanded"));

          // Agrandir la carte cliquée
          card.classList.add("expanded");
          container.classList.add("has-expanded-card");
          activeCard = card;
        });
      } else {
        // Réinitialiser les autres cartes
        cards.forEach((c) => c.classList.remove("expanded"));

        // Agrandir la carte cliquée
        card.classList.add("expanded");
        container.classList.add("has-expanded-card");
        activeCard = card;
      }
    });
  });

  // Fermer la carte agrandie en cliquant à l'extérieur
  document.addEventListener("click", (event) => {
    if (activeCard && !activeCard.contains(event.target)) {
      if (document.startViewTransition) {
        document.startViewTransition(() => {
          activeCard.classList.remove("expanded");
          activeCard.classList.remove("animate");
          container.classList.remove("has-expanded-card");
          activeCard = null;
        });
      } else {
        activeCard.classList.remove("expanded");
        activeCard.classList.remove("animate");
        container.classList.remove("has-expanded-card");
        activeCard = null;
      }
    }
  });
});
