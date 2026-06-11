import product1 from "../../../assets/products/product1/prod.png";
import product2 from "../../../assets/products/product1/prod5.png";
import product3 from "../../../assets/products/product1/prod6.png";
import product4 from "../../../assets/products/product1/prod7.png";
import product5 from "../../../assets/products/product1/prod8.png";
import gift from "../../../assets/gift.png";
import {
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaCheck,
  FaMinus,
  FaPlus,
  FaHeart,
  FaTruck
} from "react-icons/fa";
import pay5 from "../../../assets/pay.png";

function SingleProduct() {
  const img = [product2, product3, product4, product5];
  return (
    <section className="flex flex-col items-center justify-center w-full p-4 gap-5">
      <div className="text-sm text-gray-500 w-full bg-white rounded-lg p-5">
        Home / pages / Top Cell Phone & Tablet / {""}
        <span className="text-md font-semibold text-black">
          Some Mobile galaxy walaxy
        </span>
      </div>

      {/* Main Grid: 1 col on mobile, 2 cols on tablet, explicit 2fr_2fr_1fr track sizing on desktop */}
      <div className="w-full bg-white rounded-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[2fr_2fr_1fr] p-8 justify-center gap-6">
        
        {/* First Section: Images */}
        <div className="flex flex-col">
          <img src={product1} alt="" className="" />
          <div className="flex justify-center items-center gap-8 mt-20">
            {img.map((img, index) => (
              <img key={index} src={img} alt="" className="w-[10%]"/>
            ))}
          </div>
        </div>

        {/* Second Section: Details */}
        <div className="flex flex-col">
          <div className="flex flex-col gap-2 border-b border-gray-400 p-6">
            <h2 className="text-lg font-bold">
              Somseng Galatero X6 Ultra LTE 4G/128GB, Black Smartphone
            </h2>
            <p className="text-lg font-bold">$300.00-$600.00</p>
            <ul className="p-4 list-disc text-sm flex flex-col gap-2">
              <li>Intel LGA 1700 Socket: Supports 13th & 12th Gen Intel Core DDR5</li>
              <li>Compatible: 4*SMD DIMMs with XMP 3.0 Memory Commanding Power</li>
              <li>Design: Twin 16+1+2 Phases Digital VRM</li>
            </ul>

            <div className="flex gap-4">
              <p className="bg-green-100 rounded text-[#1ABA1A] w-fit px-2 py-0.5">FREE SHIPPING</p>
              <p className="bg-red-100 rounded text-red-500 w-fit px-2 py-0.5">FREE Gift</p>
            </div>
          </div>

          <div className="border-b border-gray-400 p-6 flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <h2>COLOR: <span>Midnight Blue</span></h2>
              <div className="flex flex-row gap-6">
                <div className="border border-[#1ABA1A] p-3 rounded-xl text-center font-semibold">
                  <p>Midnight Blue</p>
                  <p>$556</p>
                </div>
                <div className="border border-gray-400 p-3 rounded-xl text-center font-semibold">
                  <p>Midnight Red</p>
                  <p>$556</p>
                </div>
                <div className="border border-gray-400 p-3 rounded-xl text-center font-semibold">
                  <p>Midnight Green</p>
                  <p>$556</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h2>MEMORY SIZE: <span>128GB</span></h2>
              <div className="flex gap-6">
                <div className="border border-gray-400 p-3 rounded-xl text-center font-semibold">
                  <p>64GB</p>
                </div>
                <div className="border border-[#1ABA1A] p-3 rounded-xl text-center font-semibold">
                  <p>128GB</p>
                </div>
                <div className="border border-gray-400 p-3 rounded-xl text-center font-semibold">
                  <p>256GB</p>
                </div>
              </div>
            </div>
          </div>

          <div className="p-6 flex flex-col gap-8">
            <div className="w-full p-4 bg-[#ECF6EC] flex justify-evenly items-center gap-4">
              <img src={gift} alt="hello" />
              <ul className="list-disc text-lg">
                <li>Buy 02 boxes get a Snack Tray</li>
                <li>Buy 04 boxes get a free Block Toys</li>
              </ul>
            </div>

            <div>
              <h2 className="font-bold">SKU: <span className="font-normal">ABC12391290</span></h2>
              <h2 className="font-bold">CATEGORY: <span className="font-normal">Cell Phones & Tablets</span></h2>
              <h2 className="font-bold">Brand: <span className="font-normal">Sumsong</span></h2>
            </div>

            <div className="flex gap-8 text-3xl">
              <a href="#" className="hover:text-blue-500 transition rounded-full bg-gray-200 p-3"><FaFacebook /></a>
              <a href="#" className="hover:text-red-500 transition rounded-full bg-gray-200 p-3"><FaYoutube /></a>
              <a href="#" className="hover:text-pink-500 transition rounded-full bg-gray-200 p-3"><FaInstagram /></a>
              <a href="#" className="hover:text-sky-400 transition rounded-full bg-gray-200 p-3"><FaTwitter /></a>
            </div>
          </div>
        </div>

        {/* Third Section: Centered on MD, goes back to narrow sidebar on LG */}
        <div className="flex flex-col items-center gap-4 md:col-span-2 lg:col-span-1 w-full md:max-w-md md:mx-auto lg:max-w-none">
          <div className="flex flex-col gap-4 bg-gray-200 rounded-lg p-6 w-full">
            <div>
              <p className="text-sm text-gray-600">TOTAL PRICE:</p>
              <h2 className="text-xl font-bold">$609.00</h2>
            </div>

            <p className="flex gap-2 items-center">
              <FaCheck className="bg-green-400 rounded-full w-6 h-6 p-1" /> In Stock
            </p>

            <div className="flex items-center justify-center bg-white rounded-lg p-2 border border-gray-300">
              <button className="px-2 text-gray-600 hover:text-black">
                <FaMinus />
              </button>
              <input
                type="text"
                name="quantity"
                value="1"
                readOnly
                className="w-12 text-center font-semibold focus:outline-none"
              />
              <button className="px-2 text-gray-600 hover:text-black">
                <FaPlus />
              </button>
            </div>

            <button className="bg-[#1ABA1A] text-white font-bold p-3 rounded-lg hover:bg-[#159615] transition">
              ADD TO CART
            </button>

            {/* Payment Methods */}
            <div className="space-y-4 pt-2 border-t border-gray-300/60">
              <h2 className="font-semibold text-md">BUY WITH</h2>
              
              <div className="space-y-1">
                <label className="flex items-center gap-2 cursor-pointer font-semibold text-sm text-gray-800">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="bank_transfer"
                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
                  />
                  <span>Direct Bank Transfer</span>
                </label>
              </div>

              <div>
                <label className="flex items-center gap-2 cursor-pointer font-semibold text-sm text-gray-800">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="cod"
                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
                  />
                  <span>Cash on Delivery</span>
                </label>
              </div>

              <div className="flex justify-between items-center">
                <label className="flex items-center gap-2 cursor-pointer font-semibold text-sm text-gray-800">
                  <input
                    type="radio"
                    name="paymentMethod"
                    value="paypal"
                    className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300"
                  />
                  <span>
                    Paypal
                    <a href="#" className="text-xs text-blue-500 underline font-normal ml-1">What's Paypal?</a>
                  </span>
                </label>
                <span className="text-blue-600 font-bold italic tracking-tight text-xs bg-white px-2 py-0.5 rounded border shadow-sm">
                  PayPal
                </span>
              </div>
            </div>

            <div className="flex justify-center items-center gap-2">
              <FaHeart className="text-green-600" />
              <p className="text-gray-500">Wishlist added</p>
            </div>

            <div className="flex flex-col gap-3">
              <p className="text-sm font-semibold text-gray-600">Guaranteed Safe Checkout</p>
              <img src={pay5} alt="Payment Gateways" className="w-full object-contain" />
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-4 bg-gray-200 rounded-lg p-6 w-full">
            <p className="bg-black text-white p-2 rounded-lg text-sm font-semibold">Quick Order 24/7</p>
            <h2 className="text-2xl font-bold">+01-49234823</h2>   
          </div>

          <h2 className="flex justify-center items-center gap-2 text-sm text-gray-700">
            <FaTruck/> Ships from <span className="font-bold">NEPAL</span>
          </h2>
        </div>

      </div>
    </section>
  );
}

export default SingleProduct;