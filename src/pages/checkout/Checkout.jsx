import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { appPath } from "../../utils/pathConstants";

export default function BillingDetails() {
  const [billing, setBilling] = useState({
    fullName: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    country: "",
    zip: "",
  });
  const location=useLocation()
  const navigate=useNavigate()
  const userId=location.state
  useEffect(()=>{
        if(!userId || userId==undefined) return navigate(`/${appPath.LOGIN}`);
  },[location,userId])

  // Handle Input Change
  const handleChange = (e) => {
    setBilling({ ...billing, [e.target.name]: e.target.value });
  };

  return (
    <div className="container mx-auto p-4">
      <h2 className="text-2xl font-semibold mb-4">Billing Details</h2>

      <div className="bg-white shadow-md rounded p-6">
        <form className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Full Name */}
          <div>
            <label className="block font-medium">Full Name</label>
            <input
              type="text"
              name="fullName"
              value={billing.fullName}
              onChange={handleChange}
              placeholder="Enter your full name"
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            />
          </div>

          {/* Email */}
          <div>
            <label className="block font-medium">Email</label>
            <input
              type="email"
              name="email"
              value={billing.email}
              onChange={handleChange}
              placeholder="Enter your email"
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            />
          </div>

          {/* Phone */}
          <div>
            <label className="block font-medium">Phone</label>
            <input
              type="tel"
              name="phone"
              value={billing.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            />
          </div>

          {/* Address */}
          <div>
            <label className="block font-medium">Address</label>
            <input
              type="text"
              name="address"
              value={billing.address}
              onChange={handleChange}
              placeholder="Enter your address"
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            />
          </div>

          {/* City */}
          <div>
            <label className="block font-medium">City</label>
            <input
              type="text"
              name="city"
              value={billing.city}
              onChange={handleChange}
              placeholder="Enter your city"
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            />
          </div>

          {/* Country */}
          <div>
            <label className="block font-medium">Country</label>
            <select
              name="country"
              value={billing.country}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            >
              <option value="">Select Country</option>
              <option value="Pakistan">Pakistan</option>
              <option value="USA">USA</option>
              <option value="UK">UK</option>
            </select>
          </div>

          {/* Zip Code */}
          <div>
            <label className="block font-medium">ZIP Code</label>
            <input
              type="text"
              name="zip"
              value={billing.zip}
              onChange={handleChange}
              placeholder="Enter your ZIP code"
              className="w-full border border-gray-300 rounded px-3 py-2 mt-1"
            />
          </div>
        </form>

        {/* Proceed Button */}
        <button className="mt-6 w-full bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">
          Proceed to Payment
        </button>
      </div>
    </div>
  );
}
