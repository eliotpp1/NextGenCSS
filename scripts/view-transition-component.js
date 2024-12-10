class ViewTransitionGrid extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
    this.addEventListeners();
  }

  render() {
    this.shadowRoot.innerHTML = `
        <style>
          :host {
            display: block;
            width: 100%;
            height: 100vh;
            font-family: 'Arial', sans-serif;
            background-color: #f4f4f4;
          }
  
          .container {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            gap: 1rem;
            padding: 1rem;
            height: 100%;
          }
  
          .card {
            display: flex;
            justify-content: center;
            align-items: center;
            background-color: #ffffff;
            border-radius: 12px;
            box-shadow: 0 4px 6px rgba(0,0,0,0.1);
            cursor: pointer;
            transition: all 0.3s ease;
            view-transition-name: card-transition;
          }
  
          .card:hover {
            transform: scale(1.05);
          }
  
          .card p {
            font-size: 3rem;
            color: #333;
            font-weight: bold;
          }
  
          @media (max-width: 600px) {
            .container {
              grid-template-columns: 1fr;
            }
          }
  
          @view-transition {
            navigation: auto;
          }
        </style>
  
        <div class="container">
          ${this.renderCards()}
        </div>
      `;
  }

  renderCards() {
    const cardData = [
      { id: "id1", column: 1, row: 1, text: "1" },
      { id: "id2", column: 2, row: 1, text: "2" },
      { id: "id3", column: 1, row: 2, text: "3" },
      { id: "id4", column: 2, row: 2, text: "4" },
    ];

    return cardData
      .map(
        (card) => `
        <div 
          class="card ${card.id}" 
          data-column="${card.column}" 
          data-row="${card.row}"
          data-card-id="${card.id}"
        >
          <p>${card.text}</p>
        </div>
      `
      )
      .join("");
  }

  addEventListeners() {
    this.shadowRoot.querySelectorAll(".card").forEach((card) => {
      card.addEventListener("click", (event) => this.handleCardClick(event));
    });
  }

  handleCardClick(event) {
    const card = event.currentTarget;
    const cardId = card.dataset.cardId;

    if (!document.startViewTransition) {
      console.warn("View Transitions API not supported");
      return;
    }

    document.startViewTransition(() => {
      card.classList.toggle("expanded");
      this.updateCardStyles(card);
    });
  }

  updateCardStyles(card) {
    if (card.classList.contains("expanded")) {
      card.style.position = "fixed";
      card.style.top = "50%";
      card.style.left = "50%";
      card.style.transform = "translate(-50%, -50%) scale(2)";
      card.style.zIndex = "1000";
    } else {
      card.style.position = "";
      card.style.top = "";
      card.style.left = "";
      card.style.transform = "";
      card.style.zIndex = "";
    }
  }
}

customElements.define("view-transition-grid", ViewTransitionGrid);
