
import { OverlayTrigger, Popover, Button, Card } from 'react-bootstrap';

function Producto(props) {
  return (
    <Card style={{ width: '18rem' }}>
      <OverlayTrigger trigger="hover" placement="center" overlay={<MyPopoverContent2 />}>
        <Card.Img data-bs-trigger="hover" className="card-img-top" height="300px" data-bs-toggle="popover" data-bs-content={props.value.descripcion} variant="top" src={props.value.imagen} />
      </OverlayTrigger>
      <Card.Body>
        <Card.Title>{props.value.nombre}</Card.Title>
        <Card.Text>
          {props.value.precio}€
        </Card.Text>
        <Button variant="primary">Añadir al carrito</Button>
      </Card.Body>

    </Card >

  );
}
function MyPopoverContent2() {
  return (
    <Popover>
      <Popover.Header as="h3">Título del popover</Popover.Header>
      <Popover.Body>
        Contenido del popover. Aquí puedes agregar texto, imágenes, enlaces o cualquier otro elemento HTML que desees.
      </Popover.Body>
    </Popover>
  );
}

export default Producto;