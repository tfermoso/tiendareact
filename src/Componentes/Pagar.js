import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

export default function Pagar(props) {
    return (
        <div>
            <PayPalScriptProvider options={{ "client-id": "AdfZo6m0qnNparPX5S_Q9ymLKJn1h-2B06CKB4i4nNHddwd8rQN7ORAz90tesaaQMXorRrcLCKJDe11a" }}>
                <PayPalButtons
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
    );
}