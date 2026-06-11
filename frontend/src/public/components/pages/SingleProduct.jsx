import product1 from "../../../assets/products/product1/prod.png";
import product2 from "../../../assets/products/product1/prod5.png";
import product3 from "../../../assets/products/product1/prod6.png";
import product4 from "../../../assets/products/product1/prod7.png";
import product5 from "../../../assets/products/product1/prod8.png";
import gift from "../../../assets/gift.png";
import det1 from "../../../assets/det1.png";
import det2 from "../../../assets/det2.png";
import det3 from "../../../assets/det3.png";
import {
  FaFacebook,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaCheck,
  FaMinus,
  FaPlus,
  FaHeart,
  FaTruck,
  FaChevronLeft,
  FaChevronRight,
} from "react-icons/fa";
import pay5 from "../../../assets/pay.png";
import { Link } from "react-router";
import prod5 from "../../../assets/products/product2/prod9.png.png";
import prod6 from "../../../assets/products/product3/prod10.png.png";
import prod7 from "../../../assets/products/product4/prod11.png.png";
import prod8 from "../../../assets/products/product5/prod12.png.png";
import prod9 from "../../../assets/products/product6/prod13.png.png";
import { useState } from "react";

function SingleProduct() {
  const img = [product2, product3, product4, product5];

  const bestprod = [
    {
      name: "BOSO 2 Wireless On Ear Headphone",
      price: "$300.00",
      org_price: "$400.00",
      prodimg: prod5,
      stock: "In Stock",
      save: "",
    },
    {
      name: "iPad Pro 11-inch",
      price: "$899.00",
      org_price: "$999.00",
      prodimg: prod6,
      stock: "In Stock",
      save: "$400",
    },
    {
      name: "uLosk Mini Case 2.0",
      price: "$120.00",
      org_price: "$150.00",
      prodimg: prod7,
      stock: "In Stock",
      save: "$400",
    },
    {
      name: "Xenon i10 / 32GB / SSD 512GB / VGA 8GB",
      price: "$1,250.00",
      org_price: "$1,400.00",
      prodimg: prod8,
      stock: "In Stock",
      save: "$400",
    },
    {
      name: "Opplo Watch Series 8 GPS + Cellular Stainless Steel Case with Milanese Loop",
      price: "$599.00",
      org_price: "$699.00",
      prodimg: prod9,
      stock: "In Stock",
      save: "$400",
    },
  ];

  // Initialize state with default quantity of 1
  const [cartData, setCartData] = useState({ quantity: 1 });

  const handleData = (e) => {
    const { name, value } = e.target; // Fixed: object destructuring instead of array

    // Enforce minimum value of 1
    const targetValue = Math.max(1, Number(value) || 1);

    setCartData((values) => ({ ...values, [name]: targetValue }));
  };

  const handleMinus = () => {
    setCartData((prev) => ({
      ...prev,
      quantity: Math.max(1, (prev?.quantity || 1) - 1), // Decrease, but never below 1
    }));
  };

  const handlePlus = () => {
    setCartData((prev) => ({
      ...prev,
      quantity: (prev?.quantity || 1) + 1, // Increase quantity
    }));
  };

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
              <img key={index} src={img} alt="" className="w-[10%]" />
            ))}
          </div>
        </div>

        {/* Second Section: Details */}
        <div className="flex flex-col">
          <div className="flex flex-col gap-2 border-b border-gray-400 p-2">
            <h2 className="text-lg font-bold">
              Somseng Galatero X6 Ultra LTE 4G/128GB, Black Smartphone
            </h2>
            <p className="text-lg font-bold">$300.00-$600.00</p>
            <ul className="p-4 list-disc text-sm flex flex-col gap-2">
              <li>
                Intel LGA 1700 Socket: Supports 13th & 12th Gen Intel Core DDR5
              </li>
              <li>
                Compatible: 4*SMD DIMMs with XMP 3.0 Memory Commanding Power
              </li>
              <li>Design: Twin 16+1+2 Phases Digital VRM</li>
            </ul>

            <div className="flex gap-4">
              <p className="bg-green-100 rounded text-[#1ABA1A] w-fit px-2 py-0.5">
                FREE SHIPPING
              </p>
              <p className="bg-red-100 rounded text-red-500 w-fit px-2 py-0.5">
                FREE Gift
              </p>
            </div>
          </div>

          <div className="border-b border-gray-400 p-6 flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <h2>
                COLOR: <span>Midnight Blue</span>
              </h2>
              <div className="flex flex-row gap-6">
                <div className="border-2 border-[#1ABA1A] p-3 rounded-xl text-center font-semibold hover:border-green-300">
                  <p>Midnight Blue</p>
                  <p>$556</p>
                </div>
                <div className="border-2 border-gray-400 p-3 rounded-xl text-center font-semibold hover:border-[#1ABA1A]">
                  <p>Midnight Red</p>
                  <p>$556</p>
                </div>
                <div className="border-2 border-gray-400 p-3 rounded-xl text-center font-semibold hover:border-[#1ABA1A]">
                  <p>Midnight Green</p>
                  <p>$556</p>
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-4">
              <h2>
                MEMORY SIZE: <span>128GB</span>
              </h2>
              <div className="flex gap-6">
                <div className="border-2 border-gray-400 p-3 rounded-xl text-center font-semibold hover:border-[#1ABA1A]">
                  <p>64GB</p>
                </div>
                <div className="border-2 border-[#1ABA1A] p-3 rounded-xl text-center font-semibold">
                  <p>128GB</p>
                </div>
                <div className="border-2 border-gray-400 p-3 rounded-xl text-center font-semibold hover:border-[#1ABA1A]">
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
              <h2 className="font-bold">
                SKU: <span className="font-normal">ABC12391290</span>
              </h2>
              <h2 className="font-bold">
                CATEGORY:{" "}
                <span className="font-normal">Cell Phones & Tablets</span>
              </h2>
              <h2 className="font-bold">
                Brand: <span className="font-normal">Sumsong</span>
              </h2>
            </div>

            <div className="flex gap-8 text-3xl">
              <a
                href="#"
                className="hover:text-blue-500 transition rounded-full bg-gray-200 p-3"
              >
                <FaFacebook />
              </a>
              <a
                href="#"
                className="hover:text-red-500 transition rounded-full bg-gray-200 p-3"
              >
                <FaYoutube />
              </a>
              <a
                href="#"
                className="hover:text-pink-500 transition rounded-full bg-gray-200 p-3"
              >
                <FaInstagram />
              </a>
              <a
                href="#"
                className="hover:text-sky-400 transition rounded-full bg-gray-200 p-3"
              >
                <FaTwitter />
              </a>
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
              <FaCheck className="bg-green-400 rounded-full w-6 h-6 p-1" /> In
              Stock
            </p>

            <div className="flex items-center justify-between bg-white rounded-lg p-2 border border-gray-300">
              <button
                className="px-2 text-gray-600 hover:text-black transition-colors"
                onClick={handleMinus}
                type="button"
              >
                <FaMinus size={12} />
              </button>

              {/* Quantity Input */}
              <input
                type="number"
                name="quantity"
                value={cartData?.quantity || 1} // Fixed: Passed as a dynamic expression, not a string literal
                onChange={handleData}
                min="1"
                className="w-12 text-center font-semibold focus:outline-none [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              />

              {/* Plus Button */}
              <button
                className="px-2 text-gray-600 hover:text-black transition-colors"
                onClick={handlePlus}
                type="button"
              >
                <FaPlus size={12} />
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
                    <a
                      href="#"
                      className="text-xs text-blue-500 underline font-normal ml-1"
                    >
                      What's Paypal?
                    </a>
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
              <p className="text-sm font-semibold text-gray-600">
                Guaranteed Safe Checkout
              </p>
              <img
                src={pay5}
                alt="Payment Gateways"
                className="w-full object-contain"
              />
            </div>
          </div>

          <div className="flex flex-col justify-center items-center gap-4 bg-gray-200 rounded-lg p-6 w-full">
            <p className="bg-black text-white p-2 rounded-lg text-sm font-semibold">
              Quick Order 24/7
            </p>
            <h2 className="text-2xl font-bold">+01-49234823</h2>
          </div>

          <h2 className="flex justify-center items-center gap-2 text-sm text-gray-700">
            <FaTruck /> Ships from <span className="font-bold">NEPAL</span>
          </h2>
        </div>
      </div>

      {/* Frequently Bought Together Section */}
      <div className="w-full bg-white rounded-lg p-6 shadow-sm border border-gray-100 flex flex-col gap-6">
        {/* Section Title */}
        <h2 className="font-bold text-base md:text-lg text-gray-900 tracking-tight">
          FREQUENTLY BOUGHT TOGETHER
        </h2>

        {/* Top Row: Product Images + Total Actions */}
        <div className="flex flex-col lg:flex-row justify-between items-center gap-8 pb-6 border-b border-gray-200">
          {/* Left Side: Images and Plus Connectors */}
          <div className="flex flex-wrap md:flex-nowrap items-center justify-center gap-4 md:gap-6">
            {/* Product 1 */}
            <div className="w-28 h-28 flex items-center justify-center p-2">
              <img
                src={product1}
                alt="Smartphone"
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* Plus Divider */}
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-gray-700 font-bold text-sm shadow-sm">
              <FaPlus size={12} />
            </div>

            {/* Product 2 */}
            <div className="w-28 h-28 flex items-center justify-center p-2">
              <img
                src={product2}
                alt="Headphones"
                className="max-h-full max-w-full object-contain"
              />
            </div>

            {/* Plus Divider */}
            <div className="flex items-center justify-center w-8 h-8 rounded-full bg-slate-100 text-gray-700 font-bold text-sm shadow-sm">
              <FaPlus size={12} />
            </div>

            {/* Product 3 */}
            <div className="w-28 h-28 flex items-center justify-center p-2">
              <img
                src={product3}
                alt="Smartwatch"
                className="max-h-full max-w-full object-contain"
              />
            </div>
          </div>

          {/* Right Side: Total Pricing & Add to Cart Action */}
          <div className="flex flex-col gap-3 w-full lg:w-64">
            <div>
              <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider">
                TOTAL PRICE:
              </p>
              <h3 className="text-3xl font-extrabold text-gray-900 tracking-tight">
                $609.00
              </h3>
            </div>

            <button className="w-full bg-[#1ABA1A] text-white font-bold py-3 px-6 rounded-lg hover:bg-[#159615] transition-colors duration-200 text-sm tracking-wide shadow-sm">
              ADD TO CART
            </button>

            <button className="flex items-center justify-center lg:justify-start gap-2 text-sm font-medium text-gray-500 hover:text-gray-800 transition-colors">
              <FaHeart size={14} className="text-gray-400" />
              <span>Ad all to Wishlist</span>
            </button>
          </div>
        </div>

        {/* Bottom Row: Item Selection Checkbox List */}
        <div className="flex flex-col gap-3.5 pt-2">
          {/* Item 1 */}
          <label className="flex items-start gap-3 cursor-pointer text-sm text-gray-600 hover:text-gray-900 transition-colors">
            <input
              type="checkbox"
              defaultChecked
              className="mt-1 h-4 w-4 rounded border-gray-300 text-[#1ABA1A] focus:ring-[#1ABA1A]"
            />
            <span>
              <span className="font-bold text-gray-800">This item:</span>{" "}
              Somseng Galatero X6 Ultra LTE 4G/128 Gb, Black Smartphone
              <span className="text-red-500 font-semibold ml-1">
                ( $569.00 )
              </span>
            </span>
          </label>

          {/* Item 2 */}
          <label className="flex items-start gap-3 cursor-pointer text-sm text-gray-600 hover:text-gray-900 transition-colors">
            <input
              type="checkbox"
              defaultChecked
              className="mt-1 h-4 w-4 rounded border-gray-300 text-[#1ABA1A] focus:ring-[#1ABA1A]"
            />
            <span>
              BOSO 2 Wireless On Ear Headphone
              <span className="text-red-500 font-semibold ml-1">
                ( $369.00 )
              </span>
            </span>
          </label>

          {/* Item 3 */}
          <label className="flex items-start gap-3 cursor-pointer text-sm text-gray-600 hover:text-gray-900 transition-colors">
            <input
              type="checkbox"
              defaultChecked
              className="mt-1 h-4 w-4 rounded border-gray-300 text-[#1ABA1A] focus:ring-[#1ABA1A]"
            />
            <span>
              Opplo Watch Series 8 GPS + Cellular Stainless Stell Case with
              Milanese Loop
              <span className="text-red-500 font-semibold ml-1">
                ( $129.00 )
              </span>
            </span>
          </label>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 flex flex-col gap-6">
        <div className="flex gap-4 text-lg ">
          <button className="font-bold">DESCTIPTION</button>
          <button className="text-gray-500 hover:text-green-400">
            REVIEWS(5)
          </button>
          <button className="text-gray-500 hover:text-green-400">
            ADDITIONAL INFORMATION
          </button>
        </div>

        <p>
          Built for ultra-fast performance, the thin and lightweight Samsung
          Galaxy Tab S2 goes anywhere you go. Photos, movies and documents pop
          on a crisp, clear Super AMOLED display. Expandable memory lets you
          enjoy more of your favorite content. And connecting and sharing
          between all your Samsung devices is easier than ever. Welcome to life
          with the reimagined Samsung Galaxy Tab S2. Watch thev world come to
          life on your tablet's Super AMOLED display * . With deep contrast,
          rich colors and crisp details, you won't miss a thing
        </p>
        <img src={det1} alt="" />
        <h2 className="text-lg font-bold">From the manufacturer</h2>
        <p>
          Dive into the blockbuster movies you can't wait to see. Switch between
          your favorite apps quickly and easily. The new and improved octa-core
          processor gives you the power and speed you need to see more and do
          more. Expand your tablet's memory from 32GB to up to an additional
          128GB and enjoy more of your favorite music, photos, movies and games
          on the go with a microSD card. With Quick Connect, start a show on
          your Smart TV and, with the touch of a button, take it with you by
          moving it to your Galaxy Tab S2.Or send videos and photos from your
          tablet screen to your TV screen to share with everyone in the room.
          Work effortlessly between your Samsung tablet and Samsung smartphone
          with SideSync. Quickly drag and drop photos between devices. And even
          respond to a call from your smartphone right on your tablet screen.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 place-items-center w-full gap-4">
          <img src={det2} alt="" className="w-full" />
          <img src={det3} alt="" className="w-full" />
        </div>
        <h2 className="text-lg font-bold">
          Semsong Galaxy Tab S2, 8-Inch, White
        </h2>
        <p>
          The Samsung Galaxy Tab S2 offers dual cameras: a rear-facing
          8-megapixel camera with Auto Focus and a 2.1-megapixel camera on the
          front. Take high-quality pictures and video or video chat with
          friends, family, and colleagues. Customize your Galaxy Tab S2 with the
          apps you use most. The Samsung Galaxy Essentials widget provides a
          collection of premium complimentary apps optimized for your tablet
          screen. Select and download the apps you want to instantly upgrade
          your tablet experience.
        </p>
        <Link to="/" className="text-blue-400 hover:text-green-400">
          SHOW MORE
        </Link>
      </div>

      <div className="w-full bg-white rounded-lg p-10">
        <h2 className="text-lg font-bold">RELATED PRODUCTS</h2>
        <div className="flex md:justify-center  md:items-center w-full bg-white rounded-lg p-10">
          <FaChevronLeft size={40} className="bg-gray-200 rounded-lg" />
          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 px-7 gap-4">
            {bestprod.map((prod, index) => (
              <div className="flex flex-col justify-center items-center gap-3 rounded-lg px-3">
                <div className="relative ">
                  <p className="absolute top-4 left-2 bg-[#1ABA1A] p-2 text-white  rounded-2xl text-xs">
                    Save <span className="text-md block">{prod.save}</span>
                  </p>
                  <img src={prod.prodimg} alt="" className="h-52 w-48" />
                  <div>
                    <img
                      src={prod.prodimg}
                      alt=""
                      className="w-10 h-10 hover:bg-[#1ABA1A] hover:border-[#1ABA1A] hover:border-2"
                    />
                  </div>
                </div>

                <div className="flex flex-col justify-center gap-2" key={index}>
                  <h2 className="w-full h-15 text-lg font-semibold block overflow-hidden">
                    {prod.name}
                  </h2>
                  <div className="flex gap-3 text-lg">
                    <p className="text-red-500">{prod.price}</p>
                    <p className="line-through">{prod.org_price}</p>
                  </div>
                  <div className="flex gap-4">
                    <p className="bg-green-100 p-2 rounded text-[#1ABA1A]">
                      FREE SHIPPING
                    </p>
                    <p className="bg-red-100 p-2 rounded text-[#F1352B]">
                      FREE GIFT
                    </p>
                  </div>
                  <p>{prod.stock}</p> {/*add cross */}
                </div>
              </div>
            ))}
          </div>
          <FaChevronRight size={40} className="bg-gray-200 rounded-lg" />
        </div>
      </div>
    </section>
  );
}

export default SingleProduct;
