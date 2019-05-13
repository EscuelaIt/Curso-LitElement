import { LitElement, html, css } from 'lit-element';
import './eit-switch';

class TodoItem extends LitElement {
  static get properties() {
    return {
      task: { type: Object }
    };
  }

  static get styles() {
    return css`
    p {
      display: flex;
      align-items: center;
    }
    eit-switch {
      margin-right: 10px;
    }
    .completed {
      text-decoration: line-through;
      color: #888;
    }
    `;
  }

  render() {
    return html`
    <p class="${this.task.completed ? 'completed' : ''}">
      <eit-switch ?checked="${this.task.completed}" @eit-switch-checked="${this.checkedChanged}"></eit-switch>  ${ this.task.name }
    </p>
    `;
  }

  checkedChanged(e) {
    this.dispatchEvent(new CustomEvent('task-changed', {
      bubbles: true,
      composed: true,
      detail: {
        state: e.detail,
        task: this.task
      }
    }));

  }
}
customElements.define('todo-item', TodoItem);