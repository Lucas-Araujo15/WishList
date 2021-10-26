import { Component } from "react";

class DesejosCadastro extends Component {
  constructor(props) {
    super(props);
    this.state = {
      idUsuario: 0,
      descricaoDesejo: ''
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
}

class DesejoListagem extends Component {
  constructor(props) {
    super(props);
    this.state = {
      listaDesejos: []
    }
  }

  buscarDesejos = (event) => {
    event.preventDefault();

    fetch('http://localhost:5000/desejos')

      .then(resposta => resposta.json())

      .then(desejos => this.setState({ listaDesejos: desejos }))

      .catch(erro => console.log(erro))
  }
}

function Desejos() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Página da lista de desejos</h1>
        <button onClick={<DesejoListagem />}></button>
        <button onClick={<DesejosCadastro />}></button>
      </header>
    </div>
  );
}

export default Desejos;