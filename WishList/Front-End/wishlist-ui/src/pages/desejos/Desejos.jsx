import { Component } from 'react'
import './style_Desejos.css'
import logo from './assets/logo-wishlist.svg'
import imagemPainel from './assets/painel-cenario.png'
import genio from './assets/imagem-genio.png'

class Desejos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idUsuario: 0,
      descricaoDesejo: '',
      listaDesejos: [],
      pagina: false
    }
  };

  cadastrar = () => {

    fetch('http://localhost:5000/desejos', {
      method: 'POST',
      body: JSON.stringify({
        idUsuario: this.state.idUsuario,
        descricao: this.state.descricaoDesejo
      }),

      headers: {
        "Content-Type": "application/json"
      }
    })
  }

  buscarDesejos = (event) => {
    event.preventDefault();

    fetch('http://localhost:5000/desejos')

      .then(resposta => resposta.json())

      .then(desejos => this.setState({ listaDesejos: desejos }))

      .catch(erro => console.log(erro))
  }

  abrirPagina = () => {
    this.setState({
      pagina: !this.state.pagina
    })
    console.log(this.state.pagina)
  }

  render() {
    return (
      <div className="app navegacao">
        <aside className="abas">
          <div className="container-abas">
            <div>
              <img className="logo" src={logo} alt="" />
              <button onClick={this.abrirPagina} disabled={this.state.pagina === false ? true : false}>Cadastros</button>
              <button onClick={this.abrirPagina} disabled={this.state.pagina !== false ? true : false}>Lista</button>
            </div>
            <img className="painel" src={imagemPainel} alt="" />
          </div>
        </aside>
        <div style={this.state.pagina === false? {display:''} : {display: 'none'}} className="box-content">
          <h1>Informe seus desejos e veja acontecer!</h1>
          <div>
            <form action="">
              <h2>Diga-me, o que deseja?</h2>
              <input className="input1" placeholder="quem deseja?" type="text" />
              <textarea className="input2" placeholder="o desejo é..." name="" id="" cols="30" rows="10"></textarea>
              <button>Cadastrar</button>
            </form>
            <img src={genio} alt="" />
          </div>
        </div >
        <div style={this.state.pagina === false ? {display:'none'} : {display: ''}} className="listas">
          <p>sfrghçsioderufbghçiozsdfgvçodsfghçiou</p>
        </div>
      </div>
    );
  }
}

export default Desejos;