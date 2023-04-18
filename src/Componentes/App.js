import './App.css';
import React from 'react';
import Producto from './Producto';
import { Navbar, Nav,NavDropdown } from 'react-bootstrap';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      'productos': [{
        id: 1,
        nombre: "Learn PHP 7",
        imagen: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/4842/9781484217290.jpg",
        descripcion: "This new book on PHP 7 introduces writing solid, secure, object-oriented code in the new PHP 7: you will create a complete three-tier application using a natural process of building and testing modules within each tier. This practical approach teaches you about app development and introduces PHP features when they are actually needed rather than providing you with abstract theory and contrived examples.",
        precio: 300
      },
      {
        id: 2,
        nombre: "Learn PHP 7",
        imagen: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/4842/9781484217290.jpg",
        descripcion: "This new book on PHP 7 introduces writing solid, secure, object-oriented code in the new PHP 7: you will create a complete three-tier application using a natural process of building and testing modules within each tier. This practical approach teaches you about app development and introduces PHP features when they are actually needed rather than providing you with abstract theory and contrived examples.",
        precio: 300
      },
      {
        id: 3,
        nombre: "Learn PHP 7",
        imagen: "https://d1w7fb2mkkr3kw.cloudfront.net/assets/images/book/lrg/9781/4842/9781484217290.jpg",
        descripcion: "This new book on PHP 7 introduces writing solid, secure, object-oriented code in the new PHP 7: you will create a complete three-tier application using a natural process of building and testing modules within each tier. This practical approach teaches you about app development and introduces PHP features when they are actually needed rather than providing you with abstract theory and contrived examples.",
        precio: 300
      }
      ]

    };
  }

  render() {
    return (
      <div className="container">
        <Navbar bg="light" expand="lg">
          <Navbar.Brand href="#">Mi sitio web</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#inicio">Inicio</Nav.Link>
              <Nav.Link href="#nosotros">Nosotros</Nav.Link>
              <NavDropdown title="Productos" id="basic-nav-dropdown">
                <NavDropdown.Item href="#producto1">Producto 1</NavDropdown.Item>
                <NavDropdown.Item href="#producto2">Producto 2</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#todos-los-productos">Todos los productos</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#contacto">Contacto</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <div className="row">
          {this.state.productos.map((producto) => (
            <Producto
              key={producto.id}
              value={producto}
            />
          ))}
        </div>
      </div>
    );
  }

}

export default App;
