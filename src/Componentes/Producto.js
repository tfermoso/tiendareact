import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function Producto(props) {
    return (
      <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={props.value.imagen} />
        <Card.Body>
          <Card.Title>{props.value.nombre}</Card.Title>
          <Card.Text>
            {props.value.descripcion}
          </Card.Text>
          <Button variant="primary">Añadir al carrito</Button>
        </Card.Body>
      </Card>
    );
  }
  
  export default Producto;