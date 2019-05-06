import { html } from 'lit-element';

export const ContentTemplate = (Superclass) => {
  return class extends Superclass {
    get moreContent() {
      return html`
        <h1>Probando más contenido</h1>
        <p>Un contenido extra </p>
        <p>
          ${this.closed ? 'Estás cerrado' : 'Estás abierto'}
        </p>
      `;
    }

  }
}
