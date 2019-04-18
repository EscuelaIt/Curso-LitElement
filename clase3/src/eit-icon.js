import { LitElement, html, css } from 'lit-element';
import { icons } from './icons';
//import {unsafeHTML} from 'lit-html/directives/unsafe-html.js';

class EitIcon extends LitElement {

  static get properties() {
    return {
      icon: { type: String }
    };
  }

  constructor() {
    super();
    this.icon = 'done';
  }

  static get styles() {
    return css`
      :host[hidden] { display: none;}
      :host { display: inline-block; line-height: 0; position: relative; top: 0.5em;}
      path {
        fill: var(--eit-icon-color, #888);
      }
      path[fill="none"] {
        fill: transparent;
      }
      svg {
        width: var(--eit-icon-size, 24px);
        height: var(--eit-icon-size, 24px);
        display: inline-block;
      }
    `;
  }

  render() {
    //return html`${ unsafeHTML(icons[this.icon]) }`;
    return html`${ icons[this.icon] }`;
  }
}

customElements.define('eit-icon', EitIcon);