import hero1 from "../../../assets/hero1.png";
import {
  FaApple,
  FaRegArrowAltCircleLeft,
  FaRegArrowAltCircleRight,
  FaStar,
  FaCamera,
  FaMobileAlt,
  FaLaptop,
  FaHeadphones,
  FaGamepad,
  FaTv,
  FaTruck,
  FaHeadphonesAlt,
  FaUserShield,
} from "react-icons/fa";
import product1 from "../../../assets/products/product1.png";
import product2 from "../../../assets/products/product2.png";
import product3 from "../../../assets/products/product3.png";
import product4 from "../../../assets/products/product4.png";
import product5 from "../../../assets/products/product5.png";
import product6 from "../../../assets/products/product6.png";
import product7 from "../../../assets/products/product7.png";

function Home() {
  const products = [
    {
      name: "HAVIT HV-G92 Gamepad",
      price: 120,
      oldPrice: 160,
      rating: 5,
      reviews: 88,
      image: product1,
    },
    {
      name: "HAVIT HV-G92 Gamepad",
      price: 120,
      oldPrice: 160,
      rating: 5,
      reviews: 88,
      image: product1,
    },
    {
      name: "HAVIT HV-G92 Gamepad",
      price: 120,
      oldPrice: 160,
      rating: 5,
      reviews: 88,
      image: product1,
    },
    {
      name: "HAVIT HV-G92 Gamepad",
      price: 120,
      oldPrice: 160,
      rating: 5,
      reviews: 88,
      image: product1,
    },
  ];

  const category = [
    {
      icon: <FaCamera size={60} />,
      iconName: "Camera",
    },
    {
      icon: <FaMobileAlt size={60} />,
      iconName: "Mobile",
    },
    {
      icon: <FaLaptop size={60} />,
      iconName: "Laptop",
    },
    {
      icon: <FaHeadphones size={60} />,
      iconName: "Headphones",
    },
    {
      icon: <FaGamepad size={60} />,
      iconName: "Gaming",
    },
    {
      icon: <FaTv size={60} />,
      iconName: "TV",
    },
  ];

  const bestProducts = [
    {
      name: "The north coat",
      price: 260,
      oldPrice: 360,
      reviews: 65,
      image: product2,
    },
    {
      name: "Gucci duffle bag",
      price: 960,
      oldPrice: 1160,
      reviews: 65,
      image: product2,
    },
    {
      name: "RGB liquid CPU Cooler",
      price: 160,
      oldPrice: 170,
      reviews: 65,
      image: product2,
    },
    {
      name: "Small BookSelf",
      price: 360,
      oldPrice: null,
      reviews: 65,
      image: product2,
    },
  ];

  const NewProducts = [
    {
      name: "The north coat",
      price: 260,
      oldPrice: 360,
      reviews: 65,
      image: product3,
    },
    {
      name: "Gucci duffle bag",
      price: 960,
      oldPrice: 1160,
      reviews: 65,
      image: product3,
    },
    {
      name: "RGB liquid CPU Cooler",
      price: 160,
      oldPrice: 170,
      reviews: 65,
      image: product3,
    },
    {
      name: "Small BookSelf",
      price: 360,
      oldPrice: null,
      reviews: 65,
      image: product3,
    },
    {
      name: "The north coat",
      price: 260,
      oldPrice: 360,
      reviews: 65,
      image: product3,
    },
    {
      name: "Gucci duffle bag",
      price: 960,
      oldPrice: 1160,
      reviews: 65,
      image: product3,
    },
    {
      name: "RGB liquid CPU Cooler",
      price: 160,
      oldPrice: 170,
      reviews: 65,
      image: product3,
    },
    {
      name: "Small BookSelf",
      price: 360,
      oldPrice: null,
      reviews: 65,
      image: product3,
    },
  ];

  return (
    <section className="flex flex-col items-center justify-center">
      <div className="w-full max-w-7xl mx-auto flex flex-col lg:flex-row gap-9 mb-10 px-4">
        {/* LEFT SIDEBAR */}
        <ul className="w-full lg:w-1/5 border-b lg:border-b-0 lg:border-r border-gray-300 pr-0 lg:pr-4 flex flex-row lg:flex-col gap-4 text-md pt-4 lg:pt-9 overflow-x-auto lg:overflow-visible">
          <li className="hover:font-semibold cursor-pointer whitespace-nowrap">
            Women's Fashion
          </li>
          <li className="hover:font-semibold cursor-pointer whitespace-nowrap">
            Men's Fashion
          </li>
          <li className="hover:font-semibold cursor-pointer whitespace-nowrap">
            Electronics
          </li>
          <li className="hover:font-semibold cursor-pointer whitespace-nowrap">
            Home & Lifestyle
          </li>
          <li className="hover:font-semibold cursor-pointer whitespace-nowrap">
            Medicine
          </li>
          <li className="hover:font-semibold cursor-pointer whitespace-nowrap">
            Sports & Outdoor
          </li>
          <li className="hover:font-semibold cursor-pointer whitespace-nowrap">
            Baby's & Toys
          </li>
          <li className="hover:font-semibold cursor-pointer whitespace-nowrap">
            Groceries & Pets
          </li>
          <li className="hover:font-semibold cursor-pointer whitespace-nowrap">
            Health & Beauty
          </li>
        </ul>

        {/* HERO BANNER */}
        <div className="w-full lg:w-4/5 bg-black text-white relative overflow-hidden mt-0 lg:mt-9 rounded-md">
          <div className="flex flex-col md:flex-row items-center justify-between px-6 md:px-10 lg:px-20 py-10 gap-8">
            {/* TEXT */}
            <div className="flex flex-col gap-4 text-center md:text-left">
              <div className="flex items-center justify-center md:justify-start gap-2">
                <FaApple size={35} />
                <span className="text-lg">iPhone 14 Series</span>
              </div>

              <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-md">
                Up to 10% off Voucher
              </h1>

              <button className="border-b text-lg border-white w-fit mx-auto md:mx-0">
                Shop Now →
              </button>
            </div>

            {/* IMAGE */}
            <img
              src={hero1}
              className="h-48 md:h-64 lg:h-[350px] object-contain"
            />
          </div>

          {/* DOTS */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-2">
            <div className="w-2 h-2 rounded-full bg-gray-500"></div>
            <div className="w-2 h-2 rounded-full bg-gray-500"></div>
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
            <div className="w-2 h-2 rounded-full bg-gray-500"></div>
          </div>
        </div>
      </div>

      {/* Section */}
      <div className="w-[77%] mt-12 border-b border-gray-300">
        <p className="text-red-500 border-l-10 border-red-500 text-md font-semibold p-1">
          Today's
        </p>
        <span className="flex justify-between items-center pt-2">
          <h2 className="text-4xl font-semibold ">Flash Sales</h2>
          <div>
            <button>
              <FaRegArrowAltCircleLeft size={35} />
            </button>
            <button className="ml-2">
              <FaRegArrowAltCircleRight size={35} />
            </button>
          </div>
        </span>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {products.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-sm transition p-3"
            >
              {/* Image box */}
              <div className="bg-gray-100 rounded-lg h-72 flex flex-col items-center justify-center overflow-hidden relative group">
                <p className="bg-red-500 p-1 text-white absolute top-4 left-3 hidden group-hover:block transition-all duration-300">
                  -40%
                </p>
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-52 group-hover:scale-110 transition duration-300"
                />

                <button className="bg-black text-white text-center relative w-full bottom-[-1] p-2 font-semibold group-hover:block hidden transition-all duration-700">
                  Add To Cart
                </button>
              </div>

              {/* Title */}
              <p className="mt-3 font-semibold text-xl text-gray-800 line-clamp-1">
                {item.name}
              </p>

              {/* Price */}
              <div className="flex gap-2 items-center mt-1">
                <span className="text-amber-500 font-bold text-lg">
                  ${item.price}
                </span>
                <span className="text-gray-400 line-through text-sm">
                  ${item.oldPrice}
                </span>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mt-2">
                {[...Array(item.rating)].map((_, i) => (
                  <FaStar key={i} className="text-amber-400 text-sm" />
                ))}
                <span className="text-gray-500 text-sm ml-1">
                  ({item.reviews})
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center m-16">
          <button className="border bg-orange-600 p-5 text-white text-xl font-semibold hover:text-amber-100 hover:border hover:border-black">
            View All Products
          </button>
        </div>
      </div>
      {/* Category */}
      <div className="w-[77%] mt-12 border-b border-gray-300 pb-12">
        {/* Header */}
        <p className="text-red-500 border-l-4 border-red-500 pl-2 font-semibold">
          Categories
        </p>

        <div className="flex justify-between items-center mt-3">
          <h2 className="text-3xl md:text-4xl font-semibold">
            Browse By Category
          </h2>

          <div className="flex gap-2">
            <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition">
              <FaRegArrowAltCircleLeft size={30} />
            </button>

            <button className="p-2 rounded-full border border-gray-300 hover:bg-gray-100 transition">
              <FaRegArrowAltCircleRight size={30} />
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6">
          {category.map((item, index) => (
            <div
              key={index}
              className="group border border-gray-300 rounded-xl h-40 flex flex-col items-center justify-center gap-3 cursor-pointer transition hover:bg-orange-500 hover:text-white hover:scale-105"
            >
              {/* Icon */}
              <div className="group-hover:text-white transition">
                {item.icon}
              </div>

              {/* Text */}
              <p className="text-sm md:text-base font-semibold">
                {item.iconName}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Product */}
      <div className="w-[77%] mt-12 border-b border-gray-300">
        <p className="text-red-500 border-l-10 border-red-500 text-md font-semibold p-1">
          This Month
        </p>
        <span className="flex justify-between items-center pt-2">
          <h2 className="text-4xl font-semibold ">Best Selling Products</h2>
          <div>
            <button className="border bg-orange-600 p-4 rounded-lg text-white text-lg font-semibold hover:text-amber-100 hover:border hover:border-black">
              View All
            </button>
          </div>
        </span>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {bestProducts.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-sm transition p-3"
            >
              {/* Image box */}
              <div className="bg-gray-100 rounded-lg h-72 flex flex-col items-center justify-center overflow-hidden relative group">
                <p className="bg-red-500 p-1 text-white absolute top-4 left-3 hidden group-hover:block transition-all duration-300">
                  -40%
                </p>
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-52 group-hover:scale-110 transition duration-300"
                />

                <button className="bg-black text-white text-center relative w-full bottom-[-1] p-2 font-semibold group-hover:block hidden transition-all duration-700">
                  Add To Cart
                </button>
              </div>

              {/* Title */}
              <p className="mt-3 font-semibold text-xl text-gray-800 line-clamp-1">
                {item.name}
              </p>

              {/* Price */}
              <div className="flex gap-2 items-center mt-1">
                <span className="text-amber-500 font-bold text-lg">
                  ${item.price}
                </span>
                <span className="text-gray-400 line-through text-sm">
                  ${item.oldPrice}
                </span>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mt-2">
                {[...Array(item.rating)].map((_, i) => (
                  <FaStar key={i} className="text-amber-400 text-sm" />
                ))}
                <span className="text-gray-500 text-sm ml-1">
                  ({item.reviews})
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* featured Product */}
      <div className="mt-30 bg-black w-[75%] grid  grid-cols-1 lg:grid-cols-2 ">
        <div className="flex flex-col   gap-9 text-white p-10">
          <div className="text-lg text-[#00FF66]">Categories</div>

          <h1 className="text-6xl font-bold leading-tight w-[80%]">
            Enhance Your Music Experience
          </h1>

          <button className="text-center text-lg border-white w-fit bg-[#00FF66] p-4 rounded-lg">
            Buy Now →
          </button>
        </div>

        <img src={product2} alt="product" className="h-[450px]" />
      </div>

      {/* product3 */}
      <div className="w-[77%] mt-12 border-b border-gray-300">
        <p className="text-red-500 border-l-10 border-red-500 text-md font-semibold p-1">
          Our Products{" "}
        </p>
        <span className="flex justify-between items-center pt-2">
          <h2 className="text-4xl font-semibold ">Flash Sales</h2>
          <div>
            <button>
              <FaRegArrowAltCircleLeft size={35} />
            </button>
            <button className="ml-2">
              <FaRegArrowAltCircleRight size={35} />
            </button>
          </div>
        </span>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {NewProducts.map((item, index) => (
            <div
              key={index}
              className="group bg-white rounded-xl shadow-sm transition p-3"
            >
              {/* Image box */}
              <div className="bg-gray-100 rounded-lg h-72 flex flex-col items-center justify-center overflow-hidden relative group">
                <p className="bg-[#00FF66] p-1 text-white absolute top-4 left-3 hidden group-hover:block transition-all duration-300">
                  New
                </p>
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-52 group-hover:scale-110 transition duration-300"
                />

                <button className="bg-black text-white text-center relative w-full bottom-[-1] p-2 font-semibold group-hover:block hidden transition-all duration-700">
                  Add To Cart
                </button>
              </div>

              {/* Title */}
              <p className="mt-3 font-semibold text-xl text-gray-800 line-clamp-1">
                {item.name}
              </p>

              {/* Price */}
              <div className="flex gap-2 items-center mt-1">
                <span className="text-amber-500 font-bold text-lg">
                  ${item.price}
                </span>
                <span className="text-gray-400 line-through text-sm">
                  ${item.oldPrice}
                </span>
              </div>

              {/* Rating */}
              <div className="flex items-center gap-1 mt-2">
                {[...Array(item.rating)].map((_, i) => (
                  <FaStar key={i} className="text-amber-400 text-sm" />
                ))}
                <span className="text-gray-500 text-sm ml-1">
                  ({item.reviews})
                </span>
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center m-16">
          <button className="border bg-orange-600 p-5 text-white text-xl font-semibold hover:text-amber-100 hover:border hover:border-black">
            View All Products
          </button>
        </div>
      </div>

      {/* FeaturedNew */}
      <div className="w-[77%] mt-12 border-b border-gray-300">
        <p className="text-red-500 border-l-10 border-red-500 text-md font-semibold p-1">
          Featured
        </p>
        <span className="flex justify-between items-center pt-2">
          <h2 className="text-4xl font-semibold ">New Arrival</h2>
        </span>

        <div className="mt-8 grid grid-cols-1 lg:grid-cols-2 place-content-center gap-3">
          <div
            className="p-7 gap-6 bg-contain bg-no-repeat bg-center h-[600px] w-[95%] bg-black text-white flex flex-col justify-end items-start "
            style={{ backgroundImage: `url(${product4})` }}
          >
            <h2 className="text-2xl font-bold">PlayStation 5</h2>
            <p className="w-62">
              Black and White version of the PS5 coming out on sale.
            </p>
            <button className="border-b  hover:text-green-500">Shop Now</button>
          </div>

          <div className="flex flex-col gap-9">
            <div
              className="p-7 gap-4 bg-contain bg-no-repeat bg-center h-72 w-[100%] bg-black text-white flex flex-col justify-end items-start"
              style={{ backgroundImage: `url(${product5})` }}
            >
              <h2 className="text-2xl font-bold">Women's Collections</h2>
              <p className="w-62">
                Featured women collections that give you another vibe.
              </p>
              <button className="border-b  hover:text-green-500">
                Shop Now
              </button>
            </div>

            <div className="flex gap-9">
              <div
                className="p-7 gap-4 bg-contain bg-no-repeat bg-center h-69 w-[47%] bg-black text-white flex flex-col justify-end items-start"
                style={{ backgroundImage: `url(${product6})` }}
              >
                <h2 className="text-2xl font-bold">Speaker</h2>
                <p className="w-62">Amaxon wireless Speaker</p>
                <button className="border-b  hover:text-green-500">
                  Shop Now
                </button>
              </div>

              <div
                className="p-7 gap-4 bg-contain bg-no-repeat bg-center h-69 w-[48%] bg-black text-white flex flex-col justify-end items-start"
                style={{ backgroundImage: `url(${product7})` }}
              >
                <h2 className="text-2xl font-bold">Perfume</h2>
                <p className="w-62">GUCCI INTENSE OUD EDP</p>
                <button className="border-b  hover:text-green-500">
                  Shop Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* last section */}

      <div className="m-32 md:flex gap-16 ">
        <div className="flex flex-col justify-center items-center">
          <FaTruck
            size={50}
            className="border-6 border-gray-400 rounded-full p-1"
          />
          <h2 className="text-xl font-bold">FREE AND FAST DELIVERY</h2>
          <p>Free delivery for all orders over $140</p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <FaHeadphonesAlt
            size={50}
            className="border-6 border-gray-400 rounded-full p-1"
          />
          <h2 className="text-xl font-bold">24/7 CUSTOMER SERVICE</h2>
          <p>Friendly 24/7 customer support</p>
        </div>

        <div className="flex flex-col justify-center items-center">
          <FaUserShield
            size={50}
            className="border-6 border-gray-400 rounded-full p-1"
          />
          <h2 className="text-xl font-bold">MONEY BACK GUARANTEE</h2>
          <p>We return money within 30 days</p>
        </div>
      </div>
    </section>
  );
}

export default Home;
