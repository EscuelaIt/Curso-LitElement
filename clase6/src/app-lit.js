import { LitElement, html } from 'lit-element';
import './feedback-element';
import 'social-icon/dile-social-icon';

class AppLit extends LitElement {

  constructor() {
    super();
    this.addEventListener('feedback-message', (e) => {
      this.shadowRoot.getElementById('fe').open(e.detail);
    })
  }

  render() {
    return html`
    <style>
    :host {
      --dile-social-icon-color: blue;
    }
    </style>
    <slot></slot>
    <feedback-element id="fe"></feedback-element>
    <p>
      <dile-social-icon icon="linkedin"></dile-social-icon>
    </p>
    `;
  }
}
customElements.define('app-lit', AppLit);