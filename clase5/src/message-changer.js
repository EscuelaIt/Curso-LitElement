import { LitElement, html } from 'lit-element';

class MessageChanger extends LitElement {
  static get properties() {
    return {
      currentMessage: { type: String },
      messages: { type: Array },
    };
  }

  constructor() {
    super();
    this.currentMessage = '';
    this.messages = [];
    this.currentIndex = 0;
  }

  render() {
    return html`
    <style>
    div {
      padding: 15px 30px;
      background-color: #eee;
      text-align: center;
      font-size: 0.8em;
    }
    </style>
    <div>
      ${ this.currentMessage }
    </div>
    <button id="boton" @click="${this.stop}">Stop</button>
    `;
  }

  changeMessages() {
    //console.log('changeMessages', this.messages[this.currentIndex])
    this.currentMessage = this.messages[this.currentIndex];
    this.currentIndex = (this.currentIndex + 1) % this.messages.length;
    this.timer = setTimeout(() => this.changeMessages(), 5000);
  }

  firstUpdated() {
    this.changeMessages();
  }

  updated(changedProperties) {
    changedProperties.forEach((oldValue, propName) => {
      console.log('Prop: ', propName, ' | valor actual: ', this[propName], ' | Valor anterior: ', oldValue);
    }); 
    this.shadowRoot.getElementById('boton').focus();
    if(changedProperties.has('messages')) {
      console.log(' ha cambiado el array', this.messages);
    }
  }
}
customElements.define('message-changer', MessageChanger);