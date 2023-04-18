import './App.css';
import React from 'react';
import Producto from './Producto';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state.p = {
      nombre: "Nombre del producto",
      imagen: "",
      descripcion: "descripcion del producto"
    };
  }

  render() {
    return (
      <div className="App">
        <Producto value={this.state.p} />
      </div>
    );
  }

}

export default App;
