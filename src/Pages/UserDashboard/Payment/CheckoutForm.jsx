import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useState } from "react";
import useAxiosSecure from "../../../Hooks/UseAxiosSecure";
import { useEffect } from "react";
import useAuth from "../../../Hooks/UseAuth";

const CheckoutForm = ({ price }) => {
  const stripe = useStripe();
  const elements = useElements();
  const [axiosSecure] = useAxiosSecure();
  const {user} = useAuth();
  const [cardError, setCardError] = useState("");
  const [clientSecret, setClientSecret] = useState("");
  const [processing, setProcessing] = useState(false);
  const [transactionId,setTransactionId] = useState('');

  //
  useEffect(() => {
    axiosSecure.post("/create-payment-intent", { price }).then((res) => {
      console.log(res.data.clientSecret);
      setClientSecret(res.data.clientSecret);
    });
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!stripe || !elements) {
      return;
    }

    const card = elements.getElement(CardElement);
    if (card === null) {
      return;
    }
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card,
    });
    if (error) {
      // console.log('error', error)
      setCardError(error.message);
    } else {
      console.log('payment method', paymentMethod)
      setCardError("");
    }
    setProcessing(true)
    const { paymentIntent, error:confirmError } = await stripe.confirmCardPayment(
     clientSecret,
      {
        payment_method: {
          card: card,
          billing_details: {
            name: user?.displayName || 'anonymous',
            email:user?.email || 'unknown'
          },
        },
      }
    );
    if(confirmError){
      setCardError(confirmError.message)
    }
    // console.log("payment intent",paymentIntent)
    setProcessing(false)
    if(paymentIntent.status === 'succeeded'){
      setTransactionId(paymentIntent.id);
      // TODO: next steps----------
    }

  };
  return (
    <>
      {" "}
      <form
        className="text-center w-6/12 mx-auto mt-24"
        onSubmit={handleSubmit}
      >
        <CardElement
          options={{
            style: {
              base: {
                fontSize: "16px",
                color: "#424770",
                border: "",
                "::placeholder": {
                  color: "#aab7c4",
                },
              },
              invalid: {
                color: "#9e2146",
              },
            },
          }}
        />
        <div className="text-center">
          <button
            className="bg-[#D1A054] text-white cursor-pointer font-semibold px-20 py-2 my-8"
            type="submit"
            disabled={!stripe || !clientSecret || processing}
          >
            Pay
          </button>
        </div>
      </form>
      {cardError && <p className="text-center text-red-600">{cardError}</p>}
      {transactionId && <p className="text-center text-green-500">Transaction Id: {transactionId}</p>}
    </>
  );
};

export default CheckoutForm;
