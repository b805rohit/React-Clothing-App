import React from 'react'
import StripeCheckout from 'react-stripe-checkout'

const StripeCheckoutButton =({price})=>{
    const  priceForStripe=price*100
    const publishableKey='pk_test_8p0AniAZUlapVuagNUgXae0e00B4uPJ8gq'
    const onToken=token=>{
        console.log(token)
        alert('Payment Successful')
    }
    return(
        <StripeCheckout
            label='Pay Now'
            name='Bunny Clothing App'
            billingAddress
            shippingAddress
            image='https://sendeyo.com/up/d/f3eb2117da'
            description={`Your Total is $${price}`}
            amount={priceForStripe}
            panelLabel='Pay Now'
            token={onToken}
            stripeKey={publishableKey}
             />
    )
}

export default StripeCheckoutButton