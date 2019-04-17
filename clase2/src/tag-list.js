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
}
customElements.define('tag-list', TagList);