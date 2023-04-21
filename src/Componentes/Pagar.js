function Pagar(props) {
    return (
        <div class="p-5 mb-4 bg-light rounded-3 text-center">
            <div class="container-fluid py-5">
                <h1 class="display-5 fw-bold"> ¡Paso Final! </h1>
                <hr/>
                    <p class="col-md-8 fs-4"> Estas a punto de pagar con paypal la cantidad de:
                        <h4> {props.total}€ </h4> 
                        <div id="paypal-button-container">
                        </div>
                    </p>
                    <p> Los productos podrán ser descargados una vez completado el pago </p>
            </div>
        </div>
    )
}

export default Pagar;