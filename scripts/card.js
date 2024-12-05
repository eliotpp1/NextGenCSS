class Card extends HTMLElement {
    static get observedAttributes() {
        return [
            'description',
            'img',
            'title',
            'price'
        ]
    }

    connectedCallback() {
        this.render();
    }

    render() {
        const cardTitle = this.getAttribute('title') || 'Ceci est un titre';
        const cardImg = this.getAttribute('img') || 'https://media.istockphoto.com/id/95574723/fr/photo/th%C3%A9-anglais-dans-une-tasse-de-la-porcelaine.jpg?s=612x612&w=0&k=20&c=mnU652n7mi5IRqPJvHpz4_YiRwy8QpHWo92O6axI4Sk=';
        const cardDescription = this.getAttribute('description') || 'Ceci est une description';
        const cardPrice = this.getAttribute('price') || '9.99';

        this.innerHTML = /*HTML*/`
          <div class="card" draggable="true">
            <div class="item">
                <div class="card-image">
      <img src="${cardImg}" alt="Product Image">
    </div>
    <div class="card-content">
      <h2 class="card-title">${cardTitle}</h2>
      <p class="card-text">${cardDescription}</p>
      <span class="card-price">${cardPrice} €</span>
    </div>
</div>
  </div>
        `
    }
}

customElements.define('card-element', Card);