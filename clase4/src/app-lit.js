import { LitElement, html, css } from 'lit-element';

class AppLit extends LitElement {

  static get styles() {
    return css`
      :host {
        display: block;
        --eit-switch-background-color: #005cc5;
        border: 1px solid orange;
        padding: 15px;
        margin-bottom: 15px;
      }
    `;
  }
  render() {
    return html`
    <h2>Soy app-lit</h2>
    <p>El siguiente switch debe estar con un color distinto.</p>
    <eit-switch id="mys"></eit-switch>
    `;
  }
}
customElements.define('app-lit', AppLit);