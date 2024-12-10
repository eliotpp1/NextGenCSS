class ShowCode extends HTMLElement {
  connectedCallback() {
    this.subject = this.getAttribute("data-subject");
    this.innerHTML = `
      <pre><code>${
        this.subject === "comparaison"
          ? this.renderComparaison()
          : this.renderMecanisme()
      }</code></pre>
    `;
  }

  renderComparaison() {
    // Injecter ce code dans le HTML
    return `// Exemple de base sans utiliser l'api view transition
cards.forEach((card, index) => {
  card.addEventListener("click", (event) => {
    // Modification du DOM
    card.classList.toggle("expanded");
  });
});

// Exemple de base <span class="highlight">avec l'api view transition</span>
cards.forEach((card, index) => {
  card.addEventListener("click", (event) => {
    <span class="highlight">document.startViewTransition(() => {
      // Modification du DOM
      card.classList.toggle("expanded");
    });</span>
  });
});`;
  }

  renderMecanisme() {
    // Injecter ce code dans le HTML
    return `@keyframes flip {
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

id1.animate {
  view-transition-name: card-transition1;
}

::view-transition-old(card-transition1) {
  animation: flip 0.5s ease-out;
}

::view-transition-new(card-transition1) {
  animation: flip 0.5s ease-out;
}`;
  }
}

customElements.define("show-code", ShowCode);
