import { LitElement, html } from 'lit-element';
import 'dile-input/dile-input'

class TodoAdd extends LitElement {
  static get properties() {
    return {
      value: { type: String }
    };
  }

  constructor() {
    super();
    this.value = '';
  }

  render() {
    return html`
      <dile-input
        label="Nueva tarea"
        value="${this.value}"
        placeholder="Escribe la tarea y pulsa enter"
        @enter-pressed="${this.createTask}"
        @input="${(e) => this.value = e.target.value}"
      ></dile-input>
    `;
  }

  createTask(e) {
    this.dispatchEvent(new CustomEvent('task-added', {
      detail: e.target.value
    }));
    this.value = '';
  }
}
customElements.define('todo-add', TodoAdd);