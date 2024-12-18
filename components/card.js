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
        const cardIndex = this.getAttribute('index') || '1';

        this.innerHTML = /*HTML*/`
          <div>
            <div class="item">
                <div class="card-image">
      <img src="${cardImg}" alt="Product Image">
    </div>
    <div class="card-content">
    <div class="card-title-top">
          <h3 class="card-title">${cardTitle}</h3>
            <span>${cardIndex}</span>
</div>
      <p class="card-text">${cardDescription}</p>
      <span class="card-price">${cardPrice} €</span>
    </div>
</div>
  </div>
        `
    }
}

customElements.define('card-element', Card);