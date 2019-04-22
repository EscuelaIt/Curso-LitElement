import { LitElement, html } from 'lit-element';

class TodoList extends LitElement {

  static get properties() {
    return {
      items: { type: Array }
    };
  }

  constructor() {
    super();
    this.items = [
      {
        name: 'tarea1',
        completed: false
      },
      {
        name: 'tarea dos',
        completed: false
      },
      {
        name: 'TREEEES',
        completed: true
      },
    ]  
  }

  render() {
    return html`
      ${
        this.items.map( item => html`<todo-item @eit-switch-checked="${this.newChecked}" .task=${item}></todo-item>`)
      }
    `;
  }

  newChecked(e) {
    console.log(' estoy en listado', e);
  }
}
customElements.define('todo-list', TodoList);