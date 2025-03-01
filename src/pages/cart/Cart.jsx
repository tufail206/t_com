import { useState } from "react";
import { Link } from "react-router-dom";
import { appPath } from "../../utils/pathConstants";

export default function CartPage() {
  // Cart State
  const [cart, setCart] = useState([
    {
      id: 1,
      title: "Sample Product",
      price: 120,
      quantity: 2,
      image: "https://via.placeholder.com/60",
    },
  ]);

  // Handle Quantity Change
  const handleQuantityChange = (id, newQuantity) => {
    if (newQuantity < 1) return; // Prevent negative quantity

    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === id ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  // Calculate Subtotal
  const getSubtotal = (price, quantity) => price * quantity;

  // Calculate Cart Total
  const cartTotal = cart.reduce(
    (total, item) => total + getSubtotal(item.price, item.quantity),
    0
  );

  return (
    <div className="container mx-auto p-4">
      {/* Cart Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="p-4">Products</th>
              <th className="p-4">Price</th>
              <th className="p-4">Quantity</th>
              <th className="p-4">Subtotal</th>
            </tr>
          </thead>
          <tbody>
            {cart.map((item) => (
              <tr key={item.id} className="border-b border-gray-200">
                <td className="p-4 flex items-center space-x-4">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-16 h-16 object-cover rounded"
                  />
                  <span>{item.title}</span>
                </td>
                <td className="p-4">${item.price}</td>
                <td className="p-4">
                  <input
                    type="number"
                    className="w-16 border border-gray-300 rounded px-2 py-1"
                    value={item.quantity}
                    onChange={(e) =>
                      handleQuantityChange(item.id, parseInt(e.target.value))
                    }
                  />
                </td>
                <td className="p-4">
                  ${getSubtotal(item.price, item.quantity)}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Buttons */}
      <div className="flex flex-wrap justify-between mt-6">
        <button className="bg-gray-600 text-white px-4 py-2 rounded hover:bg-gray-700">
          Return to Shopping
        </button>
        <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Update Cart
        </button>
      </div>

      {/* Coupon & Cart Total */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
        {/* Coupon Section */}
        <div className="border border-gray-200 p-4 rounded">
          <h3 className="font-semibold mb-2">Apply Coupon</h3>
          <div className="flex">
            <input
              type="text"
              placeholder="Enter Coupon Code"
              className="w-full border border-gray-300 rounded px-2 py-1"
            />
            <button className="ml-2 bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700">
              Apply
            </button>
          </div>
        </div>

        {/* Cart Total */}
        <div className="border border-gray-200 p-4 rounded">
          <h3 className="font-semibold mb-2">Cart Total</h3>
          <div className="flex justify-between border-b py-2">
            <span>Subtotal</span>
            <span>${cartTotal}</span>
          </div>
          <div className="flex justify-between border-b py-2">
            <span>Shipping</span>
            <span className="text-green-600">Free</span>
          </div>
          <div className="flex justify-between font-semibold text-lg py-2">
            <span>Total</span>
            <span>${cartTotal}</span>
          </div>
          <Link  to={appPath.CHECKOUT} state={"user_id"} className="w-full mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700">
            Proceed to Checkout
          </Link>
        </div>
      </div>
    </div>
  );
}
