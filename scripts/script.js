document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container_card");
  const cards = document.querySelectorAll(".card");
  let activeCard = null;

  // Fonction pour gérer l'expansion/réduction d'une carte
  const toggleCard = (card) => {
    if (activeCard === card) {
      // Réduire la carte active
      if (document.startViewTransition) {
        document.startViewTransition(() => {
          card.classList.remove("expanded");
          container.classList.remove("has-expanded-card");
          activeCard = null;
          // Attendre la fin de l'animation avant de supprimer la classe animate
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
    } else {
      // Si un autre bouton est déjà agrandi, le réduire
      if (activeCard) {
        activeCard.classList.remove("expanded");
      }

      card.classList.add("animate");

      if (document.startViewTransition) {
        document.startViewTransition(() => {
          cards.forEach((c) => c.classList.remove("expanded"));
          card.classList.add("expanded");
          container.classList.add("has-expanded-card");
          activeCard = card;
        });
      } else {
        cards.forEach((c) => c.classList.remove("expanded"));
        card.classList.add("expanded");
        container.classList.add("has-expanded-card");
        activeCard = card;
      }
    }
  };

  // Gestionnaire de clic pour chaque carte
  cards.forEach((card) => {
    // Ajouter tabindex pour rendre la carte focusable
    card.setAttribute("tabindex", "0");

    // Gestionnaire de clic
    card.addEventListener("click", (event) => {
      event.stopPropagation();
      toggleCard(card);
    });

    // Gestionnaire de touche
    card.addEventListener("keydown", (event) => {
      if (event.code === "Space" || event.code === "Enter") {
        event.preventDefault(); // Empêcher le défilement de la page
        toggleCard(card);
      }
    });
  });

  // Fermer la carte agrandie en cliquant à l'extérieur
  document.addEventListener("click", (event) => {
    if (activeCard && !activeCard.contains(event.target)) {
      if (document.startViewTransition) {
        document.startViewTransition(() => {
          activeCard.classList.remove("expanded");
          // Attendre la fin de l'animation avant de supprimer la classe animate
          requestAnimationFrame(() => {
            activeCard.classList.remove("animate");
          });
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

  // Fermer la carte active avec Escape
  document.addEventListener("keydown", (event) => {
    if (event.code === "Escape" && activeCard) {
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
