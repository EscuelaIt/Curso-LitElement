import { LitElement, html, css } from 'lit-element';

class TagList extends LitElement {
  static get properties() {
    return {
      tags: { type: Array },
    };
  }
  constructor() {
    super();
    this.tags = [];
    this.addEventListener('click', (e) => this.addRandomTag())
  }
  static get styles() {
    return css`
      p {
        display: inline-block;
        margin-right: 12px;
        padding: 4px;
        font-size: 0.7em;
        font-weight: bold;
        color: #fff;
        background-color: #c66;
        border-radius: 3px;
      }
    `;
  }
  render() {
    return html`
      ${ this.tags.map( item => html`<p>${item}</p>` ) }
    `;
  }

  addRandomTag() {
    console.log('addRandomTag')
    let valor = Math.floor(Math.random() * 1000);
    this.tags.push(valor);
    this.requestUpdate();
  }
}
customElements.define('tag-list', TagList);