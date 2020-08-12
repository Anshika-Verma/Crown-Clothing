import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({ price }) => {
    const priceforStripe = price*100;
    const publishableKey = 'pk_test_51HEgkqEt2cjSceN6IYSQ5kA1zA1h3cpKhpNJ2WagAHX83r8hIxIg3qZKtu7iYvLHkeoah26XagBgPpGhaXM042kC007E7K31dh';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    }


    return (
        <StripeCheckout 
            label ='Pay Now'
            name ='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image ='https://svgshare.com/i/CUz.svg'
            description = {`Your total is$${price}`}
            amout = {priceforStripe}
            panelLabel = 'Pay Now'
            token ={onToken}
            stripeKey ={publishableKey}
        />
    );
};

export default StripeCheckoutButton ;