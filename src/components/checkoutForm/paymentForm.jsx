import React from 'react';
import { Typography, Button, Divider } from '@material-ui/core';
import { Elements, CardElement, ElementsConsumer } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';
import Review from './review';

const stripePromise = loadStripe( process.env.REACT_APP_STRIPE_PUBLIC_KEY );

const PaymentForm = ({ checkoutToken, backStep }) => {
    return (
        <>
            <Review checkoutToken={checkoutToken} />
            <Divider />
            <Typography variant="h6" gutterbottom style={{ margin: '20px 0' }}>Método de pagamento</Typography>
            <Elements stripe={stripePromise}>
                <ElementsConsumer>
                    {({ elements, stripe }) => (
                        <form>
                            <CardElement />
                            <br /> <br />
                            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                                <Button variant="outlined" onclick={backStep}>Voltar</Button>
                                <Button type="submit" variant="contained" disabled={!stripe} color="primary">
                                    Pagar { checkoutToken.live.subtotal.formatted_with_symbol }
                                </Button>
                            </div>
                        </form>
                    )}
                </ElementsConsumer>
            </Elements>
        </>
    )
}

export default PaymentForm;