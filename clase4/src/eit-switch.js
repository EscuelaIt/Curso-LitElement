import { LitElement, html, css } from 'lit-element';

class EitSwitch extends LitElement {
  static get properties() {
    return {
      checked: { type: Boolean },
    };
  }

  constructor() {
    super(); 
    this.checked = false;
    // this.addEventListener('click', () => {
    //   console.log('evento!!');
    //   this.checked = !this.checked;
    // });
  }

  static get styles() {
    return css`
    :host {
      display: inline-block;
    }
    span {
      display: flex;
      background-color: #95D5D5;
      border-radius: 4px;
      width: 20px;
      height: 20px;
      line-height: 0;
      align-items: center;
      justify-content: center;
    }
    .checked {
      background-color: #4ae;
      color: #fff;
    }
    path[fill="none"], .checked path[fill="none"] {
      fill: transparent;
    }
    path {
      fill: #fff;
    }
    .checked path {
      fill: #fff;
    }
    `;
  }

  render() {
    return html`
      <span @click="${this.doClick}">
        ${this.checked
          ? this.checkedIcon
          : this.unCheckedIcon
        }
      </span>
    `;
  }

  doClick() {
    this.checked = !this.checked;
    this.dispatchEvent(new CustomEvent('eit-switch-checked', {
      bubbles: true,
      composed: true,
      detail: this.checked
    }));
  }


  get checkedIcon() {
    return html`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M0 0h24v24H0z" fill="none"/><path d="M19 3H5c-1.11 0-2 .9-2 2v14c0 1.1.89 2 2 2h14c1.11 0 2-.9 2-2V5c0-1.1-.89-2-2-2zm-9 14l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/></svg>`;
  }
  get unCheckedIcon() {
    return html`<svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path d="M19 5v14H5V5h14m0-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/><path d="M0 0h24v24H0z" fill="none"/></svg>`;
  }
}
customElements.define('eit-switch', EitSwitch);