import { LitElement, html } from 'lit-element';
import { MenuOverlay } from './menu-overlay';

class MenuOverlayPosition extends MenuOverlay {

  static get properties() {
    return {
      top: { type: Number }
    };
  }

  constructor() {
    super();
    this.top = 0;
  }

  get contentTemplate() {
    return html`
      <section 
        class="${ this.closed ? 'closed' : '' }" 
        @click="${this.doClick}"
        style="top: ${this.top}px"  
      >
        <slot></slot>
        <a href="#" @click="${this.closeHandler}">Cerrar</a>
      </section>
    `;
  }
}
customElements.define('menu-overlay-position', MenuOverlayPosition);