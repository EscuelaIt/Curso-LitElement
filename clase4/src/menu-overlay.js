import { LitElement, html, css } from 'lit-element';
import './eit-input';

class MenuOverlay extends LitElement {

  static get properties() {
    return {
      closed: { type: Boolean },
    };
  }

  constructor() {
    super();
    this.closed = true;
    this.closeBind = this.close.bind(this);
  }

  connectedCallback() {
    super.connectedCallback();
    document.addEventListener('click', this.closeBind);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    document.removeEventListener('click', this.closeBind);
  }

  static get styles() {
    return css`
    :host {
      position: relative;
    }
    .trigger {
      cursor: pointer;
    }
    section {
      border: 1px solid #ddd;
      box-shadow: 3px 3px 8px #eee;
      padding: 15px;
      width: 300px;
      position: absolute;
      background-color: #f5f5f5;
    }
    .closed {
      display: none;
    }
    `;
  }

  render() {
    return html`
      ${ this.triggerTemplate }
      ${ this.contentTemplate }
    `;
  }

  get triggerTemplate() {
    return html`
      <div class="trigger" @click="${this.toggle}">
        <slot name="trigger"></slot>  
      </div>
    `;
  }

  get contentTemplate() {
    return html`
      <eit-input label="escribe y pulsa enter" @eit-input-enter=${this.toggle}></eit-input>
      <section class="${ this.closed ? 'closed' : '' }" @click="${this.doClick}">
        <slot></slot>
        <a href="#" @click="${this.closeHandler}">Cerrar</a>
      </section>
    `;
  }

  toggle(e) {
    e.stopPropagation();
    this.closed = ! this.closed;
    console.log('closed esta a', this.closed);
  }

  closeHandler(e) {
    e.preventDefault();
    this.close();
  }

  close() {
    //console.log('voy a cerrar', this);
    this.closed = true;
  }

  doClick(e) {
    console.log('has hecho clic', e);
  }
}
customElements.define('menu-overlay', MenuOverlay);