import { LitElement, html, css } from 'lit-element';
import './eit-switch';

import { FeedbackMixin } from './mixins/feedback-mixin';
import { sharedStyles } from './shared-styles';

class EitSwitchLabel extends FeedbackMixin(LitElement) {
  static get styles() {
    return [sharedStyles, css`
    :host {
      display: inline-block;
    }
    div {
      display: flex;
      align-items: center;
    }
    eit-switch {
      margin-right: 6px;
    }
    `]; 
  }
  static get properties() {
    return {
      checked: { type: Boolean },
      label: { type: String }
    };
  }
  render() {
    return html`
    <div>
      <eit-switch ?checked="${this.checked}" @click="${this.enviarOtroMensaje}"></eit-switch> 
      <span @click="${this.onClick}">${this.label}</span>
    </div>
    `;
  }

  onClick() {
    this.checked = !this.checked;
    this.sendFeedback('cambio el cheked');
  }
  enviarOtroMensaje() {
    this.sendFeedback('cambio el cheked pulsando el cuadrado');
  }
}
customElements.define('eit-switch-label', EitSwitchLabel);