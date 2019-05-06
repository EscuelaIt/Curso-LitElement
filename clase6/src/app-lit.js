import { LitElement, html } from 'lit-element';
import './feedback-element';

class AppLit extends LitElement {

  constructor() {
    super();
    this.addEventListener('feedback-message', (e) => {
      this.shadowRoot.getElementById('fe').open(e.detail);
    })
  }
  render() {
    return html`
    <slot></slot>
    <feedback-element id="fe"></feedback-element>
    `;
  }
}
customElements.define('app-lit', AppLit);