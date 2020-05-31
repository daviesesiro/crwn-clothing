import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

const StripeCheckoutButton = ({price}) => {
    const priceForStripe = price * 100;
    const publishableKey = 'pk_test_Xf1igI6osBd6gpLwAmqxyYwU00lFZtBRZf';

    const onToken = token => {
        console.log(token);
        alert('Payment Successful');
    };

    return(
        <StripeCheckout
            label='Pay Now'
            name='CRWN Clothing Ltd.'
            billingAddress
            shippingAddress
            image='http://svgshare.com/i/CUz.svg'
            description={`Your total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            publishableKey={publishableKey}
            stripeKey={publishableKey}
        />
    );
};

export default StripeCheckoutButton;