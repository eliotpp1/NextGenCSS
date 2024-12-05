class Switch extends HTMLElement {
    static get observedAttributes() {
        return ['title', 'function']
    }

    connectedCallback() {
        this.attachShadow({mode: 'open'});
        this.shadowRoot.innerHTML = `
        <style>
            .switch {
              font-size: 17px;
              position: relative;
              display: inline-block;
              width: 3.5em;
              height: 2em;
            }
            
            .switch input {
              opacity: 0;
              width: 0;
              height: 0;
            }
            
            .slider {
              position: absolute;
              cursor: pointer;
              top: 0;
              left: 0;
              right: 0;
              bottom: 0;
              background-color: #fff;
              border: 1px solid #adb5bd;
              transition: .4s;
              border-radius: 30px;
            }
            
            .slider:before {
              position: absolute;
              content: "";
              height: 1.4em;
              width: 1.4em;
              border-radius: 20px;
              left: 0.27em;
              bottom: 0.25em;
              background-color: #adb5bd;
              transition: .4s;
            }
            
            input:checked + .slider {
              background-color: #007bff;
              border: 1px solid #007bff;
            }
            
            input:focus + .slider {
              box-shadow: 0 0 1px #007bff;
            }
            
            input:checked + .slider:before {
              transform: translateX(1.4em);
              background-color: #fff;
            }
            .btn_switch {
                display: flex;
                align-items: center;
                justify-content: center;
                gap: 0.75rem;
                font-family: system-ui, -apple-system, sans-serif;
            }
          </style>
        `
        this.render();
        this.checkFunction(this.getAttribute('function'));
    }

    render() {
        const switchFunction = this.getAttribute('title') || "Default";
        this.shadowRoot.innerHTML += `
        <label class="btn_switch">
            <p>${switchFunction}</p>
            <div class="switch">
                <input type="checkbox" class="checkbox">
                <span class="slider"></span>
            </div>   
        </label>
    `
    }

    checkFunction(name) {
        const checkbox = this.shadowRoot.querySelector('.checkbox')
        if (!CSS.supports(name)) {
            checkbox.disabled = true;
        } else {
            checkbox.checked = true;
        }
    }
}

customElements.define('switch-element', Switch)