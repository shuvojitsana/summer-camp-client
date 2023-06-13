import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../Providers/AuthProvider";


const CheckOutFrom = ({ price, classes }) => {
    const stripe = useStripe();
    const elements = useElements();
    const { user } = useContext(AuthContext);
    const [clientSecret, setClientSecret] = useState('');
    const [cardError, setCardError] = useState('');
    const [processing, setProcessing] = useState(false);
    const [transactionId, setTransactionId] = useState('')



    // useEffect(() => {
    //     if (price > 0) {
    //         fetch('http://localhost:5000/create-payment-intent', {
    //             method: 'POST',
    //             headers: {
    //                 'content-type': 'application/json'
    //             },
    //             body: JSON.stringify({ price })
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 console.log(data.client_secret);
    //                 setClientSecret(data.client_secret);
    //             })
    //     }
    // }, [price])


    // const handleSubmit = async (event) => {
    //     event.preventDefault();


    //     if (!stripe || !elements) {
    //         return
    //     }

    //     const card = elements.getElement(CardElement);
    //     if (card === null) {
    //         return
    //     }


    //     const { error, paymentMethod } = await stripe.createPaymentMethod({
    //         type: 'card',
    //         card,
    //     });

    //     if (error) {
    //         console.log('error', error);
    //         setCardError(error.message);
    //     } else {
    //         setCardError('');
    //         console.log('Payment Method', paymentMethod);
    //     }



    //     setProcessing(true);

    //     const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
    //         clientSecret,
    //         {
    //             payment_method: {
    //                 card: card,
    //                 billing_details: {
    //                     name: user?.name || 'anonymous',
    //                     email: user?.email || 'unknown',
    //                 },
    //             },
    //         },
    //     );
    //     if (confirmError) {
    //         console.log(confirmError)
    //     }
    //     console.log(paymentIntent);

    //     setProcessing(false);
    //     if (paymentIntent.status === 'success') {
    //         setTransactionId(paymentIntent.id);
    //         // save payment information to the server
    //         const payment = {
    //             email: user?.email,
    //             transactionId: paymentIntent.id,
    //             price,
    //             date: new Date(),
    //             quantity: classes.length,
    //             orderStatus: 'service pending',
    //             items: classes.map(item => item.name),
    //             itemId: classes.map(item => item._id),
    //             classesItem: classes.map(item => item.classesId)
    //         }

    //         fetch('http://localhost:5000/payment', {
    //             method: 'POST',
    //             headers: {
    //                 'content-type': 'application/json'
    //             },
    //             body: JSON.stringify(payment)
    //         })
    //             .then(res => res.json())
    //             .then(data => {
    //                 console.log(data)
    //                 if (data.result.insertedId) {
    //                     // display confirm
    //                 }
    //             })

    //     }
    // }
    // return (
    //     <form onSubmit={handleSubmit}>
    //         <CardElement
    //             options={{
    //                 style: {
    //                     base: {
    //                         fontSize: '16px',
    //                         color: '#424770',
    //                         '::placeholder': {
    //                             color: '#aab7c4',
    //                         },
    //                     },
    //                     invalid: {
    //                         color: '#9e2146',
    //                     },
    //                 },
    //             }}
    //         />
    //         <button className="btn btn-warning btn-sm mt-4" type="submit" disabled={!stripe || !clientSecret || processing}>
    //             Pay
    //         </button>
    //         {cardError && <p className="text-red-600">{cardError}</p>}
    //         {transactionId && <p className="text-red-600">TransactionId complete with  TransactionId: {transactionId}</p>}
    //     </form>
    // );
};

export default CheckOutFrom;