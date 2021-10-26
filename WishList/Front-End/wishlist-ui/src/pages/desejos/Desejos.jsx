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

function Desejos() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Página da lista de desejos</h1>
        <DesejosCadastro />
      </header>
    </div>
  );
}

export default Desejos;