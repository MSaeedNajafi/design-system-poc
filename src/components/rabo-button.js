const template = document.createElement("template");

template.innerHTML = `
<style>
    button {
        border: none;
        padding: var(--spacing-md);
        border-radius: var(--radius-md);
        cursor: pointer;
        transition: 0.2s ease;
        font-weight: bold
    }

    :host([variant="primary"]) button {
        background: var(--color-primary);
        color: white;
    }

    :host([variant="secondary"]) button {
        background: transparent;
        color: var(--color-primary);
        border: 1px solid var(--color-primary);
    }

    :host(:not([disabled])) button:hover {
        opacity: 0.85;
    }

    :host([disabled]) button {
        opacity: 0.5;
        cursor: not-allowed;
    }
</style>
<button>
    <slot></slot>
</button>
`;

class RaboButon extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.append(template.content.cloneNode(true));

    this.button = this.shadowRoot.querySelector("button");
  }

  connectedCallback() {
    this.button.addEventListener("click", this.handleClick);
  }

  disconnectedCallback() {
    this.button.removeEventListener("click", this.handleClick);
  }

  handleClick = (e) => {
    if (this.hasAttribute("disabled")) {
      e.preventDefault();
      return;
    }

    this.dispatchEvent(
      new CustomEvent("rabo-click", {
        bubbles: true,
        composed: true,
      }),
    );
  };
}

window.customElements.define("rabo-button", RaboButon);
