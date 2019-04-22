import { LitElement, html, css } from 'lit-element';

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
    console.log('checkedChanged', e)
    // this.task = {
    //   ...this.task,
    //   completed: e.detail
    // };
    this.task.completed = e.detail;
    this.requestUpdate();

    // let x = [1,3,6];
    // x = [...x, 67];
    // console.log(x);
  }
}
customElements.define('todo-item', TodoItem);