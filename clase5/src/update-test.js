import { LitElement, html } from 'lit-element';

class UpdateTest extends LitElement {
  static get properties() {
    return {
      name: { 
        type: String,
        hasChanged(newVal, oldVal) {
          console.log('haschanged', newVal, oldVal);
          if(newVal > oldVal) {
            return true;
          }
          return false;
        }
      }
    }
  }

  render() {
    return html`
    
    <eit-input
      id="elinput"
      .value="${this.name}"
      label="Nombre"
    ></eit-input>

    <p>
      <button @click="${this.nameChange}">Cambiar el nombre</button>
    </p>
    `;
  }

  get elinputAlternativo() {
    return this.shadowRoot.getElementById('elinput');
  }

  firstUpdated() {
    this.elinput = this.shadowRoot.getElementById('elinput');
  }

  nameChange() {
    this.name = Math.random();
    this.updateComplete.then(() => {
      console.log('nuevo dato??', this.elinput.value);
    });
  }
}
customElements.define('update-test', UpdateTest);