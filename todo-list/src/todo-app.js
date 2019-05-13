import { LitElement, html, css } from 'lit-element';
import './components/todo-item';
import './components/todo-list';
import './components/todo-add';

class TodoApp extends LitElement {
	static get properties() {
		return {
			todos: { type: Array },
		};
	}
	constructor() {
		super();
		this.todos =  [
      {
        name: 'Tarea1',
				completed: false,
				id: 0
      },
      {
        name: 'Zapatos al zapatero',
				completed: true,
				id: 1
      },
      {
        name: 'Algo diferente',
        completed: false,
				id: 2
      },
    ]  
	}

	static get styles() {
		console.log('estilos');
		return css`
		:host {
			display: block;
			padding: 15px;
		}
		`;
	}

	render() {
		return html`
			<h1>Todo app</h1>

			<todo-add 
				@task-added="${this.createTask}"
			></todo-add>
			<todo-list 
				id="listado" 
				.tasks="${this.todos}"
				@task-changed="${this.taskChanged}"
			></todo-list>
		`;
	}

	createTask(e) {
		//console.log('createTask', e.detail);
		// this.todos.push({
		// 	name: e.detail,
		// 	completed: false
		// });
		// this.shadowRoot.getElementById('listado').requestUpdate();
		this.todos = [
			...this.todos,
			{
				name: e.detail,
				completed: false,
				id: this.todos.length
			}
		]
	}

	taskChanged(e) {
		console.log('taskChanged', e.detail);
		this.todos = this.todos.map( item => {
			if(item.id == e.detail.task.id) {
				return {
					...item,
					completed: e.detail.state
				}
			} else {
				return item;
			}
		});
	}

}

customElements.define('todo-app', TodoApp);
