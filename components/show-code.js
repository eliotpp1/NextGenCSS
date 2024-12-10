class ShowCode extends HTMLElement {
  // Définition des modèles de code comme propriétés statiques
  static templates = {
    comparaison: `// Exemple de base sans utiliser l'api view transition
  cards.forEach((card) => {
    card.addEventListener("click", (event) => {
      // Modification du DOM
      card.classList.toggle("expanded");
    });
  });
  
  // Exemple de base <span class="highlight">avec l'api view transition</span>
  cards.forEach((card) => {
    card.addEventListener("click", (event) => {
        card.classList.add("animate");
        if (document.startViewTransition) {
        document.startViewTransition(() => {
        // Modification du DOM
        card.classList.toggle("expanded");
      });</span>
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
  };

  connectedCallback() {
    const subject = this.getAttribute("subject") || "comparaison";

    if (!ShowCode.templates.hasOwnProperty(subject)) {
      console.error(`Sujet "${subject}" non trouvé`);
      return;
    }

    this.innerHTML = `
        <pre><code>${this.escapeHtml(ShowCode.templates[subject])}</code></pre>
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
