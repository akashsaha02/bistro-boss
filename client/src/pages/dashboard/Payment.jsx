// import SectionTitle from '../../components/ui/SectiontTitle';
// import CheckoutForm from './CheckoutForm';
// import { loadStripe } from '@stripe/stripe-js';
// import { Elements } from '@stripe/react-stripe-js';
// import { useEffect, useState } from 'react';
// import useAxiosSecure from '../../hooks/useAxiosSecure';

// // TODO: Add Publishable key
// const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);

// const Payment = () => {
//   const [clientSecret, setClientSecret] = useState("");

//   const axiosSecure = useAxiosSecure()

//   useEffect(() => {
//     // Create PaymentIntent as soon as the page loads
//     axiosSecure.post("/create-payment-intent", { price: 1000 })
//       .then((res) => setClientSecret(res.data.clientSecret));
//   }, [axiosSecure]);

//   const appearance = {
//     theme: 'stripe',
//   };

//   const options = {
//     clientSecret: clientSecret,
//     appearance: appearance,
//   };

//   return (
//     <div>
//       <SectionTitle heading="Payment" subHeading="Please pay to eat" />
//       <div className="max-w-3xl mx-auto">
//         {clientSecret ? (
//           <Elements stripe={stripePromise} options={options}>
//             <CheckoutForm />
//           </Elements>
//         ) : (
//           <p>Loading payment details...</p>
//         )}
//         <div className="">
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Payment;


import SectionTitle from '../../components/ui/SectiontTitle';
import CheckoutForm from './CheckoutForm';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import { useEffect, useState } from 'react';
import useAxiosSecure from '../../hooks/useAxiosSecure';

// Load Stripe with the publishable key
const stripePromise = loadStripe(import.meta.env.VITE_PAYMENT_PK);
import useCart from './../../hooks/useCart';

const Payment = () => {
  const [clientSecret, setClientSecret] = useState(null);
  const axiosSecure = useAxiosSecure();

  const [cart] = useCart()
  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);
  useEffect(() => {
    // Fetch the clientSecret when the component mounts
    axiosSecure.post("/create-payment-intent", { price: totalPrice })
      .then((res) => setClientSecret(res.data.clientSecret))
      .catch(() => console.error("Failed to fetch payment intent"));
  }, [axiosSecure, totalPrice]);

  const appearance = { theme: 'stripe' };
  const options = { clientSecret, appearance };

  return (
    <div>
      <SectionTitle heading="Payment" subHeading="Please pay to eat" />
      <div className="max-w-3xl mx-auto">
        {clientSecret ? (
          <Elements stripe={stripePromise} options={options}>
            <CheckoutForm />
          </Elements>
        ) : (
          <p>Loading payment details...</p>
        )}
      </div>
    </div>
  );
};

export default Payment;
