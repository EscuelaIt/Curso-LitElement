import { LitElement, html } from 'lit-element';

class MyAccessors extends LitElement {

  static get properties() { 
    return { prop: { type: Number } };
  }

  get prop() {
    //console.log('tipo:', typeof(this._prop));
    return this._prop + "xx";
  }

  set prop(val) {
    const oldVal = this._prop;
    this._prop = Math.floor(val);
    this.requestUpdate('prop', oldVal);
  }

  render() {
    return html`
      <p>prop: ${this.prop}</p>
      <button @click="${() =>  { this.prop = Math.random()*10; }}">
        change prop
      </button>
    `;
  }
}
customElements.define('my-accessors', MyAccessors);