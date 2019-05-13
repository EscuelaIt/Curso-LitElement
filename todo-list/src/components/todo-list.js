import { LitElement, html, css } from 'lit-element';

class TodoList extends LitElement {

  static get properties() {
    return {
      tasks: { type: Array },
      query: { type: String },
      order: { type: String }
    };
  }

  static get styles() {
    return css`
    :host {
      display: block;
      margin: 15px 0;
      padding: 15px;
      border: 1px solid #4ae;
      border-radius: 10px;
      font-family: sans-serif;
    }
    section {
      margin-left: 10px;
    }
    article {
      flex-grow: 1;
    }
    button {
      margin-right: 15px;
    }
    div {
      border-radius: 10px;
      height: 30px;
      background-color: #eee;
      margin-bottom: 15px;
      display: flex;
      align-items: center;
      padding: 0 15px;
    }
    span {
      margin-right: 10px;
    }
    `;
  }

  constructor() {
    super();
    this.items = [];
    this.order = 'asc';
    this.query = '';
  }

  render() {
    return html`
      <div>
        <article>
          <button @click=${this.setFilterAsc}>Asc</button>
          <button @click="${this.setFilterDesc}">Desc</button>
        </article>
        <span>Filtro:</span> <input type="text" @input="${this.changeFilter}">
      </div>
      ${
        this.getItems(this.tasks, this.query, this.order).map( (item, index) => html`${index}.- <todo-item .task=${item}></todo-item>`)
      }
    `;
  }

  getItems(tasks, query, order) {
    return this.doOrder(this.doFilter(tasks, query), order);
  }

  doFilter(tasks, query) {
    console.log('dofilter')
    return tasks.filter(item => {
      if(!query) {
        console.log('no !query')
        return true;
      }
      if (item.name.indexOf(query) != -1) {
        console.log('hay indexof')        
        return true;
      }
      console.log('false')
      return false;
    });
  }

  setFilterAsc() {
    console.log('setfilterasc')
    this.order = 'asc';
  }
  setFilterDesc() {
    console.log('setfilter desc')
    this.order = 'desc';
  }

  changeFilter(e) {
    this.query = e.target.value;
  }

  doOrder(tasks, order) {
    console.log('doOrder', tasks, order)
    return tasks.sort((a, b) => {
      let nameA, nameB;
      if(order == 'asc') {
        nameA = a.name.toLowerCase();
        nameB = b.name.toLowerCase();
      } else {
        nameB = a.name.toLowerCase();
        nameA = b.name.toLowerCase();
      }
      if(nameA > nameB) {
        return 1;
      }
      if(nameA < nameB) {
        return -1;
      }
      return 0;
    });
  }
}
customElements.define('todo-list', TodoList);