import {LitElement, html} from 'lit-element';

class DwAjax extends LitElement {
  static get properties() {
    return {
      data: {  type: Object },
      method: { type: String },
      url: { type: String }
    }
  }

  constructor() {
    super();
    this.data = {};
    this.method = 'post';
    this.url = '';
  }

  generateRequest() {
    let request;
    //console.log('generateRequest', this.url);
    let currentMethod = this.method.toLowerCase().trim();
    switch(currentMethod) {
      case 'post':
        request = axios.post(this.url, this.data);
        break;
      case 'get':
        request = axios.get(this.url, this.data);
        break;
      case 'put':
        request = axios.put(this.url, this.data);
        break;
      case 'delete':
        request = axios.delete(this.url, this.data);
        break;
    }
    request.then((response) => {
      if((currentMethod=='get' && response.status == 200) || (currentMethod=='post' && response.status == 201)) {
        let res = response.data;
        console.log('res request dw-ajax', res)
        if(res.error) {
          throw 'Error conexión Ajax';
        } else {
          this.dispatchEvent(new CustomEvent('ajax-success', {
            detail: res
          }));
        }
      } else {
        throw 'Conexión con servidor deficiente';
      }
    })
    .catch(err => {
      if(err.response) {
        const status = err.response.status;
        switch(status) {
          case 419:
            this.dispatchEvent(new CustomEvent('ajax-error', {
              detail: 'Tu sesión ha caducado. Refresca la página'
            }));
            break;
          default:
            this.dispatchEvent(new CustomEvent('ajax-error', {
              detail: 'Acción no completada por error en el servidor'
            }));
        }
      } else {
        this.dispatchEvent(new CustomEvent('ajax-error', {
          detail: err
        }));
      }
    }) 
  }
}

customElements.define('dw-ajax', DwAjax);