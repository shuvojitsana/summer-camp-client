import { loadStripe } from "@stripe/stripe-js";
import CheckOutFrom from "./CheckOutFrom";
import { Elements } from "@stripe/react-stripe-js";
import useClasses from "../../../hooks/useClasses";


const stripePromise = loadStripe(import.meta.env.VITE_Payment_Gateway_PK);

const Payment = () => {
    const [classes] = useClasses();

    const total = classes.reduce((sum, item) =>sum + item.price, 0);
    const price = parseFloat(total.toFixed(2));
    return (
        <div className="w-2/3">
            <h2>Taka o taka tumi ura ura acho...</h2>
            <Elements stripe={stripePromise}>
                <CheckOutFrom classes={classes} price={price}></CheckOutFrom>
            </Elements>
        </div>
    );
};

export default Payment;