import { useState } from "react";
import { useRouter } from "next/router";
import { client } from "@/sanity/lib/client"; // Your configured Sanity client

const Checkout = ({ cartItems }) => {
  const router = useRouter();
  const [form, setForm] = useState({
    customerName: "",
    email: "",
  });

  const calculateTotal = () => {
    return cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleCheckout = async () => {
    try {
      const order = {
        _type: "order",
        customerName: form.customerName,
        email: form.email,
        products: cartItems.map((item) => ({
          productId: item._id,
          quantity: item.quantity,
        })),
        total: calculateTotal(),
      };

      await client.create(order);
      alert("Order placed successfully!");
      router.push("/thank-you"); // Redirect to a thank-you page
    } catch (err) {
      console.error("Checkout error:", err);
      alert("Failed to place order. Please try again.");
    }
  };

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      {/* Customer Details Form */}
      <div className="mb-6">
        <label className="block mb-2">Name</label>
        <input
          type="text"
          name="customerName"
          value={form.customerName}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-6">
        <label className="block mb-2">Email</label>
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          className="w-full p-2 border rounded"
        />
      </div>

      {/* Cart Summary */}
      <h2 className="text-xl font-semibold mb-4">Cart Summary</h2>
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div key={item._id} className="flex justify-between">
            <div>
              <p className="font-medium">{item.title}</p>
              <p className="text-sm text-gray-600">
                Quantity: {item.quantity} x ${item.price}
              </p>
            </div>
            <p>${item.price * item.quantity}</p>
          </div>
        ))}
        <div className="flex justify-between font-bold">
          <p>Total</p>
          <p>${calculateTotal()}</p>
        </div>
      </div>

      {/* Checkout Button */}
      <button
        onClick={handleCheckout}
        className="mt-6 w-full bg-green-600 text-white p-3 rounded hover:bg-green-700"
      >
        Place Order
      </button>
    </div>
  );
};

export default Checkout;

// Fetch cartItems as props or from a state management system
export async function getServerSideProps() {
  // Example static cart data
  const cartItems = [
    { _id: "product1", title: "Soap", price: 5, quantity: 2 },
    { _id: "product2", title: "Shampoo", price: 10, quantity: 1 },
  ];

  return { props: { cartItems } };
}
