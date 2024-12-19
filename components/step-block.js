class StepBlock extends HTMLElement {
  static templates = {
    keyframes: {
      title: `1. Définir les Keyframes`,
      show_code: `<show-code subject="keyframes" language="css"></show-code>`,
      text: `Créez une animation personnalisée en définissant les étapes de transformation. Ici, nous créons un effet de rotation de 0 à 180 degrés.`,
    },

    naming: {
      title: `2. Nommer la transition`,
      show_code: `<show-code subject="naming" language="css"></show-code>`,
      text: `Attribuez un nom unique à la transition de la carte. La classe <code>.animate</code> permet de contrôler quand l'animation s'applique.`,
    },

    transition_states: {
      title: `3. Définir les états de transition`,
      show_code: `<show-code subject="transition-states" language="css"></show-code>`,
      text: `Utilisez <code>::view-transition-old</code> et <code>::view-transition-new</code> pour définir les animations de l'état initial et final.`,
    },

    trigger: {
      title: `4. Déclencher la transition`,
      show_code: `<show-code subject="trigger" language="javascript"></show-code>`,
      text: `Utilisez <code>document.startViewTransition()</code> pour déclencher la transition avec la modification du DOM.`,
    },
  };

  constructor() {
    super();
  }

  connectedCallback() {
    const subject = this.getAttribute("subject");
    if (!subject) {
      console.error(`Attribut "subject" manquant sur l'élément <step-block>.`);
      return;
    }

    const template = StepBlock.templates[subject];
    if (!template) {
      console.error(`Sujet "${subject}" non trouvé dans les templates.`);
      return;
    }

    this.render(template);
  }

  render(template) {
    this.innerHTML = `
        <div class="steps-container">
          <div class="step">
            <h4>${template.title}</h4>
            ${template.show_code}
            <p>${template.text}</p>
          </div>
        </div>
      `;
  }
}

customElements.define("step-block", StepBlock);
