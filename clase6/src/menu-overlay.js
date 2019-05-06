import { LitElement, html, css } from 'lit-element';
import { FeedbackMixin } from './mixins/feedback-mixin';
import { ContentTemplate } from './mixins/content-template-mixin';

import { sharedStyles } from './shared-styles';


export class MenuOverlay extends ContentTemplate(FeedbackMixin(LitElement)) {

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
    return [sharedStyles,css`
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
    `];
  }

  render() {
    return html`
      ${ this.triggerTemplate }
      ${ this.contentTemplate }
      ${ this.moreContent }
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
    this.sendFeedback('has cerrado!!!');
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