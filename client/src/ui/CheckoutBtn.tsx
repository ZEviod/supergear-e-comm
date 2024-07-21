import { loadStripe } from "@stripe/stripe-js";
import { ProductProps } from "../type";
import { store } from "../lib/store";
import { config } from "../config";

const CheckoutBtn = ({ products }: { products: ProductProps[] }) => {
  const { currentUser } = store();
  const publishableKey =
    "pk_test_51Pet9LSGw6Y6nNKU5W6ziYa87DF3s16jvFN9JxZGZrb93xAA9uW2JxpEvnrveDjzut5DqysHvRZfsirB8OQAEgwC00mwXFerTz";
  const stripePromise = loadStripe(publishableKey);

  const handleCheckout = async () => {
    try {
      const stripe = await stripePromise;
      const response = await fetch(`${config?.baseUrl}/checkout`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          items: products,
          email: currentUser?.email,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to create checkout session");
      }

      const checkoutSession = await response.json();

      const result = await stripe?.redirectToCheckout({
        sessionId: checkoutSession.id,
      });

      if (result?.error) {
        window.alert(result.error.message);
      }
    } catch (error) {
      console.error("Error during checkout:", error);
      window.alert("An error occurred during checkout. Please try again.");
    }
  };

  return (
    <div className="mt-6">
      {currentUser ? (
        <button
          onClick={handleCheckout}
          type="submit"
          className="w-full rounded-md border border-transparent bg-gray-800 px-4 py-3 text-base font-medium text-white shadow-sm hover:bg-black focus:outline-none focus:ring-2 focus:ring-skyText focus:ring-offset-2 focus:ring-offset-gray-50 duration-200"
        >
          Checkout
        </button>
      ) : (
        <button className="w-full text-base text-white text-center rounded-md border border-transparent bg-gray-500 px-4 py-3 cursor-not-allowed">
          Checkout
        </button>
      )}
      {!currentUser && (
        <p className="mt-2 text-sm font-medium text-red-500 text-center">
          Need to sign in to make checkout
        </p>
      )}
    </div>
  );
};

export default CheckoutBtn;
