import { Component } from 'react'
import './style_Desejos.css'
import logo from './assets/logo-wishlist.svg'
import imagemPainel from './assets/painel-cenario.png'
import genio from './assets/imagem-genio.png'

class Desejos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idUsuario: '',
      produto: '',
      descricaoDesejo: '',
      listaDesejos: [],
      pagina: false,
      qntDesejos: 5
    }
  };

  componentDidMount = () => {
    this.buscarDesejos()
    this.limparCampos()
  }

  cadastrar = (event) => {

    event.preventDefault();

    fetch('http://localhost:5000/api/desejos', {
      method: 'POST',
      body: JSON.stringify({
        produto: this.state.produto,
        idUsuario: this.state.idUsuario,
        descricao: this.state.descricaoDesejo
      }),

      headers: {
        "Content-Type": "application/json"
      }
    })

    this.buscarDesejos()
  }

  quantidadeReposAdd = () => {
    this.setState({
      qntDesejos: this.state.qntDesejos + 5
    })
  }

  buscarDesejos = () => {

    fetch('http://localhost:5000/api/desejos')

      .then(resposta => resposta.json())

      .then(desejos => this.setState({ listaDesejos: desejos }))

      .then(this.limparCampos)

      .catch(erro => console.log(erro))
  }

  abrirPagina = () => {
    this.buscarDesejos()
    this.setState({
      pagina: !this.state.pagina
    })
    console.log(this.state.pagina)
  }

  atualizaEstadoUsuario = async (event) => {
    await this.setState({
      idUsuario: event.target.value
    })
  }

  atualizaEstadoProduto = async (event) => {
    await this.setState({
      produto: event.target.value
    })
  }

  atualizaEstadoDescricao = async (event) => {
    await this.setState({
      descricaoDesejo: event.target.value
    })
  }

  limparCampos = () => {
    this.setState({
        idUsuario: '',
        produto: '',
        descricaoDesejo: ''
    })
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
        <div style={this.state.pagina === false ? { display: '' } : { display: 'none' }} className="box-content">
          <h1>Informe seus desejos e veja acontecer!</h1>
          <div>
            <form onSubmit={this.cadastrar}>
              <h2>Diga-me, o que deseja?</h2>
              <input className="input1" type="text"
                value={this.state.idUsuario}
                placeholder="quem deseja?"
                onChange={this.atualizaEstadoUsuario}
              />
              <input className="input1" type="text"
                value={this.state.produto}
                placeholder="Qual desejo?"
                onChange={this.atualizaEstadoProduto}
              />
              <textarea className="input2" name="" id="" cols="30" rows="10"
                value={this.state.descricaoDesejo}
                placeholder="Sobre o que é o desejo?"
                onChange={this.atualizaEstadoDescricao}
              ></textarea>

              <button type="submit" >Cadastrar</button>
            </form>
            <img src={genio} alt="" />
          </div>
        </div >
        <div style={this.state.pagina === false ? { display: 'none' } : { display: '' }} className="listas">
          <div>
            <h2>Lista de desejos</h2>
            <table>
              <thead>
                <tr>
                  <th style={{ width: '210px' }}>Sonhador</th>
                  <th>Sonho</th>
                  <th>Descrição</th>
                </tr>
              </thead>
              <tbody>
                {
                  this.state.listaDesejos.slice(0, this.state.qntDesejos).map((desejo) => {
                    return (
                      <tr key={desejo.idDesejo}>
                        <td>{desejo.idUsuarioNavigation.nomeUsuario}</td>
                        <td>{desejo.produto}</td>
                        <td>{desejo.descricao}</td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
            <button onClick={this.quantidadeReposAdd} style={this.state.listaDesejos.length >= 5 ? { display: '' } : { display: 'none' }}>Ver mais</button>
          </div>

        </div>
      </div>
    );
  }
}

export default Desejos;