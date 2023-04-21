import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import './Pagar.css';
export default function Pagar(props) {
    const style = {
        color: 'blue',
        shape: 'pill',
        label: 'pay',
        height: 40
    };
    return (
        <div>
            <div class="contenedorPagar p-5 mb-4 bg-light rounded-3 text-center">
                <div class="container-fluid py-5">
                    <h1 class="display-5 fw-bold"> ¡Paso Final! </h1>
                    <hr />
                    <p class="col-md-8 fs-4"> Estas a punto de pagar con paypal la cantidad de:
                        <h4> {props.total}€ </h4>
                        <div id="paypal-button-container">
                        </div>
                    </p>
                    <p> Los productos podrán ser descargados una vez completado el pago </p>
                    <PayPalScriptProvider options={{ "client-id": "AdfZo6m0qnNparPX5S_Q9ymLKJn1h-2B06CKB4i4nNHddwd8rQN7ORAz90tesaaQMXorRrcLCKJDe11a" }}>
                        <PayPalButtons
                            style={style}
                        createOrder={(data, actions) => {
                            return actions.order.create({
                                purchase_units: [
                                    {
                                        amount: {
                                            value: props.total,
                                        },
                                    },
                                ],
                            });
                        }}
                        onApprove={(data, actions) => {
                            return actions.order.capture().then((details) => {
                                const name = details.payer.name.given_name;
                                alert(`Transaction completed by ${name}`);
                            });
                        }}
                        />
                    </PayPalScriptProvider>
                </div>
            </div>

        </div>
    );
}