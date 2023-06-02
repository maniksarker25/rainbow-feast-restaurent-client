import { loadStripe } from "@stripe/stripe-js";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";


const Payment = () => {

    //TODO: provide publishable key
    const stripePromise = loadStripe('');
    return (
        <div>
            <SectionTitle subHeading={"--please provide--"} heading={"Payments"}></SectionTitle>
            <Elements stripe={stripePromise}><CheckoutForm/></Elements>
        </div>
    );
};

export default Payment;