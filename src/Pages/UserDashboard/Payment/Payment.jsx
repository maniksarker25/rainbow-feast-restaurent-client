import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import useCart from "../../../Hooks/UseCart";


const Payment = () => {
    const [cart] = useCart();
    const total = cart.reduce((sum,item)=>sum + item.price,0);
    const price = parseFloat(total.toFixed(2));

    //TODO: provide publishable key
    const stripePromise = loadStripe(import.meta.env.VITE_payment_getway_PK);

    return (
        <div>
            <SectionTitle subHeading={"--please provide--"} heading={"Payments"}></SectionTitle>
            <Elements stripe={stripePromise}><CheckoutForm price={price} /></Elements>
        </div>
    );
};

export default Payment;