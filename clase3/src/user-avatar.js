import { LitElement, html, css } from 'lit-element';
import { icons } from './icons';

class UserAvatar extends LitElement {

  static get styles() {
    return css`
    :host {
      display: inline-block;
    }
    div {
      display: inline-block;                
      background-repeat: no-repeat;
      background-position: center;
      background-color: #fff;
    }
    `;
  }
  static get properties() {
    return {
      src: { type: String },
      size: { type: Number },
    }
  }
  constructor() {
    super();
    this.alt = '';
    this.size = '36';
  }

  render() {
    return html`
    <style>
      section {
        width: ${this.size * 6}px;
        background-color: red;
      }
    </style>
    ${this.src 
      ? html`
          <section>Estoy probando</section>
          <div
            id="img"
            role="img"
            style="background-image: url('${this._asignImage(this.src)}'); border-radius: ${ this.size + 'px' }; height: ${ this.size + 'px' }; width: ${ this.size + 'px' }; background-size: ${ this.size + 'px' };"
          ></div>`
      : icons.face
    }
    `;
  }

  _asignImage(src) {
    return '/images/' + src;
  }
}
customElements.define('user-avatar', UserAvatar);