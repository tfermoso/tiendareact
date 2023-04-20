import './App.css';
import React from 'react';

import Home from './Home';
import Carrito from './Carrito';
import NavbarLibros from './NavBarLibros';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'carrito': [],
      'productos': []

    };
  }

  componentDidMount() {
    fetch("http://localhost:3500")
      .then(datos => datos.json())
      .then(datos => {
        let productos = [...this.state.productos];
        productos = datos.map(p => {
          return {
            id: p.ID,
            nombre: p.Nombre,
            descripcion: p.Descripcion,
            precio: p.Precio,
            imagen: p.Imagen
          }
        });
        console.log(productos)
        this.setState({ 'productos': productos })

      })
      .catch(err => {
        console.log(err);
      })
  }

  render() {
    return (
      <Router>
        <div className="container">
          <NavbarLibros carrito={this.state.carrito.length} />
          <Routes>
            <Route path="/" exact element={<Home productos={this.state.productos} manejador={(p) => this.manejador(p)} />}></Route>
            <Route path="/carrito" element={<Carrito 
            cart={this.state.carrito} 
            eliminarProducto={(p)=>this.eliminarProducto(p)}
            pagar={(email)=>{ alert(email); }} />}></Route>
          </Routes>
        </div>
      </Router>
    );
  }
  manejador(p) {
    const nuevoCarrito = [...this.state.carrito];
    if (nuevoCarrito.indexOf(p) < 0) {
      p.cantidad=1;
      nuevoCarrito.push(p);
      this.setState({ 'carrito': nuevoCarrito });
    }

  }
  eliminarProducto(p){
    const nuevoCarrito = [...this.state.carrito];
    const filtrado=nuevoCarrito.filter(prod=>prod!==p);
    this.setState({'carrito':filtrado});
  }

  pagar(email){
    let datos={
      'carrito':this.state.carrito,
      'email':email
    }
    let url="http://localhost:3500/pagar";
    fetch(url,{
      method:'POST',
      headers:{
        'Content-Type': 'application/json'
      },
      body:JSON.stringify(datos)
    })
    .then(datos=>datos.json())
    .then(datos=>{
      console.log(datos);
    })
    .catch((err)=>{
      console.log(err);
    })
  }
}

export default App;
