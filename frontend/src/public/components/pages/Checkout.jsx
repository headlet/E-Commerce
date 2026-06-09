import { useState } from "react";

function Checkout() {
  const [formdata, setFormData] = useState({
    firstname: "",
    lastname: "",
    country: "US",
    streetAddress1: "",
    streetAddress2: "",
    townCity: "",
    stateCounty: "Washington",
    zipCode: "",
    phonenumber: "",
    email: "",
    createAccount: false,
    orderNotes: "",
    paymentMethod: "bank_transfer", 
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((values) => ({
      ...values,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formdata);
  };

  return (
    <section className="flex flex-col items-center justify-center w-full p-4 gap-5 bg-gray-100 min-h-screen">
      {/* Top Banner Information */}
      <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
        <div className="bg-[#f2f2f6] rounded p-4 border-t-2 border-gray-300">
          Returning customer? <a href="#" className="text-red-500 hover:underline">Click here to log in</a>
        </div>
        <div className="bg-[#f2f2f6] rounded p-4 border-t-2 border-gray-300">
          Have a coupon? <a href="#" className="text-red-500 hover:underline">Click here to enter your code</a>
        </div>
      </div>

      <form
        onSubmit={handleSubmit}
        className="w-full max-w-7xl grid grid-cols-1 lg:grid-cols-3 gap-8 items-start mt-4"
      >
        {/* Left Section: Billing Details */}
        <div className="lg:col-span-2 bg-white rounded-lg p-6 space-y-5 shadow-sm">
          <h2 className="text-xl font-bold text-gray-800 mb-4">Billing Detail</h2>
          
          {/* First & Last Name */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                First Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="firstname"
                value={formdata.firstname}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 text-gray-700"
                required
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Last Name <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="lastname"
                value={formdata.lastname}
                onChange={handleChange}
                className="w-full px-4 py-2.5 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 text-gray-700"
                required
              />
            </div>
          </div>

    

          {/* Country / Region */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Country / Region <span className="text-red-500">*</span>
            </label>
            <select
              name="country"
              value={formdata.country}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 text-gray-700"
            >
              <option value="US">United States (US)</option>
              <option value="NP">Nepal</option>
              <option value="UK">United Kingdom (UK)</option>
              <option value="CA">Canada</option>
            </select>
          </div>

          {/* Street Address */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">
              Street Address
            </label>
            <input
              type="text"
              name="streetAddress1"
              placeholder="House number and street name ..."
              value={formdata.streetAddress1}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 text-gray-700"
            />
            <input
              type="text"
              name="streetAddress2"
              placeholder="Apartment, suite, unit, etc (Optional)"
              value={formdata.streetAddress2}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 text-gray-700"
            />
          </div>

          {/* Town / City */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Town / City <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="townCity"
              value={formdata.townCity}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 text-gray-700"
              required
            />
          </div>

          {/* State / County */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              State / County <span className="text-red-500">*</span>
            </label>
            <select
              name="stateCounty"
              value={formdata.stateCounty}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 text-gray-700"
            >
              <option value="Washington">Washington</option>
              <option value="California">California</option>
              <option value="New York">New York</option>
            </select>
          </div>

          {/* Zip Code */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Zip Code <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              name="zipCode"
              value={formdata.zipCode}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 text-gray-700"
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Phone Number <span className="text-red-500">*</span>
            </label>
            <input
              type="tel"
              name="phonenumber"
              value={formdata.phonenumber}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 text-gray-700"
              required
            />
          </div>

          {/* Email Address */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email Address <span className="text-red-500">*</span>
            </label>
            <input
              type="email"
              name="email"
              value={formdata.email}
              onChange={handleChange}
              className="w-full px-4 py-2.5 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 text-gray-700"
              required
            />
          </div>

          {/* Create Account Checkbox */}
          <div className="flex items-center gap-2 pt-2">
            <input
              type="checkbox"
              id="createAccount"
              name="createAccount"
              checked={formdata.createAccount}
              onChange={handleChange}
              className="h-4 w-4 text-green-600 border-gray-300 rounded focus:ring-green-500"
            />
            <label htmlFor="createAccount" className="text-sm font-medium text-gray-700 selection:bg-transparent">
              Create an account?
            </label>
          </div>

          {/* Additional Information Section */}
          <div className="pt-4 border-t border-gray-200">
            <h3 className="text-md font-bold text-gray-800 mb-2">Additional Information</h3>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Order Notes <span className="text-gray-400 font-normal">(Optional)</span>
            </label>
            <textarea
              name="orderNotes"
              value={formdata.orderNotes}
              onChange={handleChange}
              rows={4}
              placeholder="Note about your order, e.g. special note for delivery"
              className="w-full px-4 py-2.5 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 text-gray-700"
            ></textarea>
          </div>
        </div>

        {/* Right Section: Your Order Summary & Payment */}
        <div className="bg-[#eef2f7] rounded-xl p-5 flex flex-col justify-between shadow-sm border border-gray-200">
          <div>
            <h2 className="text-lg font-bold text-gray-800 mb-4">Your Order</h2>
            
            {/* Header row */}
            <div className="flex justify-between text-xs font-semibold uppercase tracking-wider text-gray-400 border-b pb-2 mb-4">
              <span>Product</span>
              <span>Sub Total</span>
            </div>

            {/* Product Item info */}
            <div className="flex items-start gap-3 border-b pb-4 mb-4">
              {/* Product Placeholder Image */}
              <div className="w-14 h-14 bg-white rounded border flex items-center justify-center flex-shrink-0 text-[10px] text-gray-400 font-mono">
                [Laptop]
              </div>
              <div className="flex-1 text-sm">
                <p className="font-semibold text-gray-800">Pinnaeple Macbook Pro 2022 M1/ 512GB</p>
                <p className="text-gray-500 text-xs mt-0.5">x 3</p>
              </div>
            </div>

            {/* Shipping Info Row */}
            <div className="flex justify-between text-sm text-gray-700 mb-3">
              <span>Worldwide Standard Shipping Free</span>
              <span className="text-red-500 font-medium">+ $9.50</span>
            </div>

            {/* Order Total Row */}
            <div className="flex justify-between items-center text-md font-bold border-t pt-3 mb-6">
              <span className="text-gray-800">Order Total</span>
              <span className="text-green-600 text-lg">$1,746.50</span>
            </div>

            {/* Payment Methods Choice list */}
            <div className="space-y-4 pt-2 border-t border-gray-300/60">
              
              {/* Method 1: Bank Transfer */}
              <div className="space-y-1">
                <label className="flex items-center gap-2 cursor-pointer font-semibold text-sm text-gray-800">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="bank_transfer"
                    checked={formdata.paymentMethod === "bank_transfer"}
                    onChange={handleChange}
                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
                  />
                  <span>Direct Bank Transfer</span>
                </label>
                {formdata.paymentMethod === "bank_transfer" && (
                  <p className="text-xs text-gray-500 bg-gray-50 p-2.5 rounded border border-gray-200 mt-1 leading-relaxed">
                    Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.
                  </p>
                )}
              </div>

              {/* Method 2: COD */}
              <div>
                <label className="flex items-center gap-2 cursor-pointer font-semibold text-sm text-gray-800">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    checked={formdata.paymentMethod === "cod"}
                    onChange={handleChange}
                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
                  />
                  <span>Cash on Delivery</span>
                </label>
              </div>

              {/* Method 3: Paypal */}
              <div className="flex justify-between items-center">
                <label className="flex items-center gap-2 cursor-pointer font-semibold text-sm text-gray-800">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="paypal"
                    checked={formdata.paymentMethod === "paypal"}
                    onChange={handleChange}
                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
                  />
                  <span>Paypal <a href="#" className="text-xs text-blue-500 underline font-normal ml-1">What's Paypal?</a></span>
                </label>
                <span className="text-blue-600 font-bold italic tracking-tight text-xs bg-white px-2 py-0.5 rounded border shadow-sm">PayPal</span>
              </div>

            </div>
          </div>

          {/* Place Order Action Button */}
          <div className="mt-8">
            <button
              type="submit"
              className="w-full bg-[#1dbf2a] hover:bg-green-600 text-white font-bold text-sm tracking-wider uppercase py-3.5 px-6 rounded transition duration-200 shadow-md text-center"
            >
              Place Order
            </button>
          </div>
        </div>
      </form>
    </section>
  );
}

export default Checkout;