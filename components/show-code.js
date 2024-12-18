class ShowCode extends HTMLElement {
  constructor() {
    super();
  }

  // Modèles de code comme propriétés statiques
  static templates = {
    comparaison: `// Exemple de base sans utiliser l'API View Transition
  cards.forEach((card) => {
    card.addEventListener("click", (event) => {
      // Modification du DOM
      card.classList.toggle("expanded");
    });
  });

  // Exemple de base avec l'API View Transition
  cards.forEach((card) => {
    card.addEventListener("click", (event) => {
      card.classList.add("animate");
      if (document.startViewTransition) {
        document.startViewTransition(() => {
          // Modification du DOM
          card.classList.toggle("expanded");
        });
      }
    });
  });`,

    mecanisme: `@keyframes flip {
    0% {
      transform: perspective(1000px) rotateY(0deg);
    }
    50% {
      transform: perspective(1000px) rotateY(90deg);
    }
    100% {
      transform: perspective(1000px) rotateY(180deg);
    }
  }

  // Animation sur un élément spécifique
  .id1.animate {
    view-transition-name: card-transition1;
  }

  // Animations de transition
  ::view-transition-old(card-transition1) {
    animation: flip 0.5s ease-out;
  }

  ::view-transition-new(card-transition1) {
    animation: flip 0.5s ease-out reverse;
  }`,

    keyframes: `@keyframes flip {
    0% {
      transform: perspective(1000px) rotateY(0deg);
    }
    50% {
      transform: perspective(1000px) rotateY(90deg);
    }
    100% {
      transform: perspective(1000px) rotateY(180deg);
    }
  }`,

    naming: `// Application de la transition à la carte 1
  .id1.animate {
    view-transition-name: card-transition1;
  }`,

    "transition-states": `// Animation de l'état initial
  ::view-transition-old(card-transition1) {
    animation: flip 0.5s ease-out;
  }

  // Animation de l'état final
  ::view-transition-new(card-transition1) {
    animation: flip 0.5s ease-out reverse;
  }`,

    trigger: `// Déclenchement de la transition
    cards.forEach((card) => {
        card.addEventListener("click", (event) => {
            card.classList.add("animate");
            if (document.startViewTransition) {
                document.startViewTransition(() => {
                // Modification du DOM
                card.classList.toggle("expanded");
                });
            } else {
                // Fallback pour les navigateurs non supportés
                card.classList.toggle("expanded");
            }
        });
    });`,
  };

  connectedCallback() {
    const subject = this.getAttribute("subject") || "comparaison";
    const language = this.getAttribute("language") || "javascript";

    if (!ShowCode.templates.hasOwnProperty(subject)) {
      console.error(`Sujet "${subject}" non trouvé`);
      return;
    }

    this.innerHTML = `
        <pre ><code class="language-${language}">${this.escapeHtml(
      ShowCode.templates[subject]
    )}</code></pre>
      `;
  }

  escapeHtml(unsafe) {
    return unsafe
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }
}

customElements.define("show-code", ShowCode);
