import { LitElement, html } from 'lit-element';

class TimestampToDate extends LitElement {
  static get properties() {
    return {
      timestamp: { type: String }
    };
  }
  render() {
    return html`
      <span>${ this.getDate(this.timestamp) }</span>
    `;
  }

  getDate(timestamp) {
    let date = new Date(parseInt(timestamp));
    return date.getDate() + '/' + (date.getMonth() + 1) + '/' + date.getFullYear();
  }
}
customElements.define('timestamp-to-date', TimestampToDate);