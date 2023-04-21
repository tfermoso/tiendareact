import Producto from "./Producto";
import Pagar from "./Pagar";
function Home(props) {
    return (
        <div className="row">
            {props.productos.map((producto) => (
                <Producto
                    key={producto.id}
                    value={producto}
                    onClick2={() => props.manejador(producto)}
                />
            ))}
            <Pagar total={300}/>
        </div>
    )
}
export default Home;