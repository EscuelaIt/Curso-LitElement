import { LitElement, html } from 'lit-element';
import './tag-list';

class TestElement extends LitElement {
  /**
    * Object describing property-related metadata used by Polymer features
    */
  static get properties() {
    return {
      etiquetas: { type: Array }
    };
  }
  /**
    * Instance of the element is created/upgraded. Useful for initializing
    * state, set up event listeners, create shadow dom.
    * @constructor
    */
  constructor() {
    super();
  
    this.etiquetas = [1, 5, 6, 88, 'dfdfdff'];
  
  }
  render() {
    return html`
      <p>Estas son las etiquetas: <tag-list .tags="${this.etiquetas}"></tag-list> </p>

      <menu-overlay id="menu1">
        <p>Cualquier otra cosa...</p>
        <button @click="${this.cerrar}">cerrar</button>
        <button>abrir</button>
        <button>guardar</button>
        <div slot="trigger">Menú</div>
      </menu-overlay>

    `;
  }

  cerrar() {
    this.shadowRoot.getElementById('menu1').close();
  }
}
customElements.define('test-element', TestElement);