const template = document.createElement("template");

template.innerHTML = `
<style>
    .wrapper {
        display: flex;
        flex-direction: column;
        gap: var(--spacing-sm);
    }

    label {
        font-family: var(--font-family-base);
        color: var(--color-text);
        font-size: 14px;
        font-weight: bold;
    }

    input {
        padding: var(--spacing-md);
        border-radius: var(--radius-md);
        border: 1px solid var(--color-text);
        font-family: var(--font-family-base);
        color: var(--color-text);
        background: var(--color-surface);
        outline: none;
        transition: 0.2s ease;
        width: 240px;
    }

    input:focus {
        border-color: var(--color-primary);
    }

    .error-text {
        font-size: 10px;
        color: var(--color-error);
    }

    :host([error]) input {
         border-color: var(--color-error);
    }


    :host([disabled]) input {
        cursor: not-allowed;
        opacity: 0.6;
    }
</style>
 <div class="wrapper">
    <label></label>
    <input />
    <div class="error-text"></div>
</div>
`;

class RaboInput extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.append(template.content.cloneNode(true));

    this.input = this.shadowRoot.querySelector("input");
    this.label = this.shadowRoot.querySelector("label");
    this.error = this.shadowRoot.querySelector(".error-text");
  }

  static get observedAttributes() {
    return ["error"];
  }

  connectedCallback() {
    const id = crypto.randomUUID();

    this.input.id = id;
    this.label.setAttribute("for", id);

    this.label.textContent = this.getAttribute("label") || "";
    this.input.placeholder = this.getAttribute("placeholder") || "";

    const errorId = `${id}-error`;
    this.error.id = errorId;
    this.input.setAttribute("aria-describedby", errorId);

    if (this.hasAttribute("disabled")) {
      this.input.disabled = true;
    }

    this._updateError();
  }

  attributeChangedCallback() {
    this._updateError();
  }

  validate() {
    const value = this.input.value.trim();

    if (this.hasAttribute("required") && !value) {
      this.setAttribute("error", "This field is required");
      return false;
    }

    this.removeAttribute("error");
    return true;
  }

  _updateError() {
    const error = this.getAttribute("error");
    this.error.textContent = error || "";

    if (error) {
      this.input.setAttribute("aria-invalid", "true");
    } else {
      this.input.removeAttribute("aria-invalid");
    }
  }

  get value() {
    return this.input.value;
  }
}

window.customElements.define("rabo-input", RaboInput);
