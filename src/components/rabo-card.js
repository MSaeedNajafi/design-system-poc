const template = document.createElement("template");

template.innerHTML = `
<style>
  .card {
    border: 1px solid var(--color-text);
    border-radius: var(--radius-md);
    padding: var(--spacing-md);
    background: var(--color-surface);
    display: flex;
    flex-direction: column;
    gap: var(--spacing-md);
    margin-bottom: var(--spacing-sm);
  }
  .title {
    font-size: 20px;
    font-weight: bold;
  }
</style>

<div class="card">
  <div class="title"><slot name="title"></slot></div>
  <div><slot></slot></div>
</div>
`;

class RaboCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.append(template.content.cloneNode(true));
  }
}

window.customElements.define("rabo-card", RaboCard);
