import React, { useState, useEffect } from 'react';
import { Paper, Stepper, Step, StepLabel, Typography, Divider, Button, CircularProgress } from '@material-ui/core';
import { Link } from 'react-router-dom';
import { commerce } from '../../lib/commerce';
import AddressForm from '../addressForm';
import PaymentForm from '../paymentForm'; 

import useStyles from './styles';

const steps =['Detalhes do envio', 'Pagamento']

const Checkout = ({ cart, order, handleCaptureCheckout, error }) => {
    const classes = useStyles();
    const [activeStep, setActiveStep] = useState(0);
    const [checkoutToken, setCheckoutToken] = useState(null);
    const [shippingData, setShippingData] = useState({});

    useEffect(() => {
        const generateToken = async () => {
            try {
                const token = await commerce.checkout.generateToken(cart.id, { type: 'cart' });
                                
                setCheckoutToken(token);
            } catch (error){
                console.log(error);
            }
        }
        generateToken();
    }, [cart]);

    const nextStep = () => setActiveStep((prevActiveStep) => prevActiveStep + 1);
    const backStep = () => setActiveStep((prevActiveStep) => prevActiveStep - 1);

    const next = (data) => {
        setShippingData(data);
        nextStep();
    };

    let Confirmation = () => order.customer ? (
        <>
            <div>
                <Typography variant="h5">Muito obrigado, {order.customer.firstname} {order.customer.lastname}! Sua compra foi finalizada.</Typography>
                <Divider className={classes.divider} />
                <Typography variant="subtitle2">Pedido #: {order.customer_reference}</Typography>
            </div>
            <br />
            <Button component={Link} to="/" variant="outlined" type="button" >Início</Button>
        </>
    ) : (
        <div className={classes.spinner}>
            <CircularProgress />
        </div>
    );

    if(error) {
        <>
            <Typography variant="h5">Error: {error}</Typography>
            <br />
            <Button component={Link} to="/" variant="outlined" type="button" >Início</Button>
        </>
    }

    const Form = () => activeStep === 0
        ? <AddressForm checkoutToken={checkoutToken} next={next} />
        : <PaymentForm shippingData={shippingData} checkoutToken={checkoutToken} nextStep={nextStep} backStep={backStep} handleCaptureCheckout={handleCaptureCheckout} />
    
    return (
        <>
            <div className={classes.toolbar}/>
            <main className={classes.layout}>
                <Paper className={classes.paper}>
                    <Typography variant="h4" align="center">Checkout</Typography>
                    <Stepper activeStep={activeStep} className={classes.stepper}>
                        {steps.map((step) => (
                            <Step key={step}>
                                <StepLabel>{step}</StepLabel>
                            </Step>
                        ))}
                    </Stepper>
                    {activeStep === steps.length ? <Confirmation /> : checkoutToken && <Form />}
                </Paper>
            </main>
        </>
    )
}

export default Checkout;