function Carrito(props) {
    let total = 0;
    let novacio=props.cart.length;
    props.cart.map(p=>total+=parseFloat(p.cantidad*p.precio));
    return (
        <div>
            <h3>Lista del carrito</h3>
            <table class="table table-dark">
                <thead>
                    <tr>
                        <th scope="col">Descripción</th>
                        <th scope="col">Cantidad</th>
                        <th scope="col">Precio</th>
                        <th scope="col">Total</th>
                        <th scope="col">--</th>
                    </tr>
                </thead>
                <tbody>
                    {  
                                
                        props.cart.map((p) => (
                        <tr>
                            <th scope="row">{p.nombre}</th>
                            <td>{p.cantidad}</td>
                            <td>{p.precio}</td>
                            <td>{p.cantidad * p.precio}€</td>
                            <td>
                            <button onClick={()=>{props.eliminarProducto(p)}} class="btn btn-danger" type="submit" name="btnAccion" value="Eliminar">Eliminar</button>
                            </td>
                        </tr>
                    ))
                    }
                    <tr>
                        <td colSpan={2} align="right">
                            <h3>Total</h3>
                        </td>
                        <td colSpan={2} align="right">
                            <h3>{total}€</h3>
                        </td>
                        <td></td>
                    </tr>
                    
                    {novacio && (<tr>
                    <td colSpan={5}>
                        <form onSubmit={(e)=>{e.preventDefault(); props.pagar(document.getElementById("email").value)}}  action="">
                            <div class="alert alert-success" role="alert">
                                <div class="mb-3">
                                    <label for="" class="form-label">Email</label>
                                    <input type="email" name="email" id="email" class="form-control" placeholder="Por favor escribe tu correo" aria-describedby="helpId" required/>
                                    <small id="helpId" class="text-muted">Los productos se enviarán a este email</small>
                                </div>
                                <div class="d-grid gap-2">
                                  <button type="submit" name="btnAccion" value="pagar" id="" class="btn btn-primary btn-lg btn-block">Proceder a pagar {'>>'}</button>
                                </div>
                            </div>


                        </form>
                    </td>
                </tr>)}
                </tbody>
            </table>

        </div >
    )
}
export default Carrito;