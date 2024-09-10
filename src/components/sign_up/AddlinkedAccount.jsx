import React, { useState } from "react";
import { FaCreditCard, FaCalendarAlt } from "react-icons/fa";
function AddlinkedAccount({currentPage,setCurrentPage}) {
    const [formData, setFormData] = useState({
        name: "",
        cardNumber: "",
        expiryDate: "",
        cvv: "",
      });
    
      const [errors, setErrors] = useState({});
    
      // Basic validation for each field
      const validate = () => {
        let tempErrors = {};
        if (!formData.name) tempErrors.name = "Cardholder name is required";
        if (!formData.cardNumber.match(/^[0-9]{16}$/))
          tempErrors.cardNumber = "Card number must be 16 digits";
        if (!formData.expiryDate.match(/^(0[1-9]|1[0-2])\/[0-9]{2}$/))
          tempErrors.expiryDate = "Expiry date must be MM/YY";
        if (!formData.cvv.match(/^[0-9]{3,4}$/))
          tempErrors.cvv = "CVV must be 3 or 4 digits";
        return tempErrors;
      };
    
      const handleChange = (e) => {
        setFormData({
          ...formData,
          [e.target.name]: e.target.value,
        });
      };
    
      const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validate();
        if (Object.keys(validationErrors).length === 0) {
          // Submit the form (e.g., process payment)
          console.log("Payment successful:", formData);
        } else {
          setErrors(validationErrors);
        }
      };
    
      const formatCardNumber = (value) => {
        return value
          .replace(/\D/g, "")
          .replace(/(.{4})/g, "$1 ")
          .trim();
      };
    
      const formatExpiryDate = (value) => {
        const numericValue = value.replace(/\D/g, "");
        const formattedValue = numericValue.slice(0, 4);
        return formattedValue.length > 2
          ? formattedValue.slice(0, 2) + "/" + formattedValue.slice(2)
          : formattedValue;
      };
    
      return (
        <div className="bg-gray-100 p-8 rounded-lg max-w-md mx-auto">
          <h2 className="text-xl font-semibold mb-6 text-center">Credit Card</h2>
          <form onSubmit={handleSubmit}>
            {/* Cardholder Name */}
            <div className="mb-4">
              <label className="block mb-1 font-medium">Cardholder Name</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. John Doe"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
              {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
            </div>
    
            {/* Card Number */}
            <div className="mb-4">
              <label className="block mb-1 font-medium">Card Number</label>
              <div className="flex items-center">
                <FaCreditCard className="text-gray-500 mr-2" />
                <input
                  type="text"
                  name="cardNumber"
                  value={formatCardNumber(formData.cardNumber)}
                  onChange={(e) => {
                    e.target.value = formatCardNumber(e.target.value);
                    handleChange(e);
                  }}
                  maxLength="19"
                  placeholder="1234 1234 1234 1234"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>
              {errors.cardNumber && (
                <p className="text-red-500 text-sm">{errors.cardNumber}</p>
              )}
            </div>
    
            {/* Expiry Date */}
            <div className="mb-4">
              <label className="block mb-1 font-medium">Expiry Date (MM/YY)</label>
              <div className="flex items-center">
                <FaCalendarAlt className="text-gray-500 mr-2" />
                <input
                  type="text"
                  name="expiryDate"
                  value={formatExpiryDate(formData.expiryDate)}
                  onChange={(e) => {
                    e.target.value = formatExpiryDate(e.target.value);
                    handleChange(e);
                  }}
                  maxLength="5"
                  placeholder="MM/YY"
                  className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
                />
              </div>
              {errors.expiryDate && (
                <p className="text-red-500 text-sm">{errors.expiryDate}</p>
              )}
            </div>
    
            {/* CVV */}
            <div className="mb-4">
              <label className="block mb-1 font-medium">CVV</label>
              <input
                type="text"
                name="cvv"
                value={formData.cvv}
                onChange={handleChange}
                maxLength="4"
                placeholder="123"
                className="w-full p-2 border border-gray-300 rounded focus:outline-none focus:border-blue-500"
              />
              {errors.cvv && <p className="text-red-500 text-sm">{errors.cvv}</p>}
            </div>
    
            <button
              type="submit"
              className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 transition-colors duration-200"
            >
              Pay Now
            </button>
          </form>
        </div>
      );
    
}

export default AddlinkedAccount