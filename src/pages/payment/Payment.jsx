import { useState } from "react";

export default function PaymentPage() {
  const [paymentMethod, setPaymentMethod] = useState("card");
  const [cardDetails, setCardDetails] = useState({
    cardNumber: "",
    expiryDate: "",
    cvv: "",
    cardHolder: "",
  });

  // Handle Card Details Change
  const handleCardChange = (e) => {
    setCardDetails({ ...cardDetails, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Payment Method</h2>

      <div className="bg-white shadow-md rounded p-6">
        {/* Payment Selection */}
        <div className="mb-4">
          <h3 className="font-medium mb-2">Choose Payment Method</h3>
          <div className="flex gap-4">
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="paymentMethod"
                value="card"
                checked={paymentMethod === "card"}
                onChange={() => setPaymentMethod("card")}
                className="w-4 h-4"
              />
              <span>Credit/Debit Card</span>
            </label>
            <label className="flex items-center space-x-2 cursor-pointer">
              <input
                type="radio"
                name="paymentMethod"
                value="cod"
                checked={paymentMethod === "cod"}
                onChange={() => setPaymentMethod("cod")}
                className="w-4 h-4"
              />
              <span>Cash on Delivery</span>
            </label>
          </div>
        </div>

        {/* Card Payment Form */}
        {paymentMethod === "card" && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Card Number */}
            <div>
              <label className="block font-medium">Card Number</label>
              <input
                type="text"
                name="cardNumber"
                value={cardDetails.cardNumber}
                onChange={handleCardChange}
                placeholder="1234 5678 9012 3456"
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
              />
            </div>

            {/* Card Holder */}
            <div>
              <label className="block font-medium">Card Holder Name</label>
              <input
                type="text"
                name="cardHolder"
                value={cardDetails.cardHolder}
                onChange={handleCardChange}
                placeholder="John Doe"
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
              />
            </div>

            {/* Expiry Date */}
            <div>
              <label className="block font-medium">Expiry Date</label>
              <input
                type="text"
                name="expiryDate"
                value={cardDetails.expiryDate}
                onChange={handleCardChange}
                placeholder="MM/YY"
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
              />
            </div>

            {/* CVV */}
            <div>
              <label className="block font-medium">CVV</label>
              <input
                type="text"
                name="cvv"
                value={cardDetails.cvv}
                onChange={handleCardChange}
                placeholder="123"
                className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
              />
            </div>
          </div>
        )}

        {/* Proceed Button */}
        <button className="mt-6 w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Proceed to Order Confirmation
        </button>
      </div>
    </div>
  );
}
