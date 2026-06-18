const template = document.createElement("template");

template.innerHTML = `
<style>
  label {
    display: block;
    gap: var(--spacing-sm);
    font-family: var(--font-family-base);
    color: var(--color-text);
    cursor: pointer;
  }

  input {
    width: 16px;
    height: 16px;
    accent-color: var(--color-primary);
  }

  .error-text {
    color: var(--color-error);
    font-size: 10px;
  }

  :host([error]) label {
    color: var(--color-error);
  }

  :host([disabled]) {
    opacity: 0.6;
    cursor: not-allowed;
  }
</style>

<div>
  <label>
    <input type="checkbox" />
    <slot></slot>
  </label>

  <div class="error-text"></div>
</div>
`;

class RaboCheckbox extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.append(template.content.cloneNode(true));

    this.checkbox = this.shadowRoot.querySelector("input");
    this.error = this.shadowRoot.querySelector(".error-text");
  }

  static get observedAttributes() {
    return ["checked", "error"];
  }

  connectedCallback() {
    this.updateChecked(this.getAttribute("checked"));

    this.checkbox.addEventListener("change", () => {
      this.setAttribute("checked", this.checkbox.checked);
    });

    this._updateError();
  }

  attributeChangedCallback() {
    this._updateError();
    this.updateChecked(this.getAttribute("checked"));
  }

  validate() {
    const required = this.hasAttribute("required");

    if (required && !this.checked) {
      this.setAttribute("error", "You must accept terms");
      return false;
    }

    this.removeAttribute("error");
    return true;
  }

  updateChecked(value) {
    this.checkbox.checked = value === "" || value === "true";
  }

  _updateError() {
    const error = this.getAttribute("error");
    this.error.textContent = error || "";

    this.checkbox.setAttribute("aria-invalid", error ? "true" : "false");
  }

  get checked() {
    return this.checkbox.checked;
  }
}

customElements.define("rabo-checkbox", RaboCheckbox);
