import { useEffect } from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
function NavbarLibros(props){

  useEffect(()=>{
    //console.log("use effect en NavBarLibros");
  })

    return(
        <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#">Tienda</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Link className="nav-link" to="/">Home</Link>
            <Link className="nav-link" to="/carrito">Carrito({props.carrito})</Link>             
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
}

export default NavbarLibros;