import { Link } from "react-router";
import slider1 from "../../../assets/sliders/slider1.png";
import slider2 from "../../../assets/sliders/slider2.png";
import slider3 from "../../../assets/sliders/slider3.png";
import slider4 from "../../../assets/sliders/slider4.png";
import slider5 from "../../../assets/sliders/slider5.png";
import brand1 from "../../../assets/brand/logo1.png";
import brand2 from "../../../assets/brand/logo2.png";
import brand3 from "../../../assets/brand/logo3.png";
import brand4 from "../../../assets/brand/logo4.png";
import brand5 from "../../../assets/brand/logo5.png";
import brand6 from "../../../assets/brand/logo6.png";
import brand7 from "../../../assets/brand/logo7.png";
import brand8 from "../../../assets/brand/logo8.png";
import brand9 from "../../../assets/brand/logo9.png";
import brand10 from "../../../assets/brand/logo10.png";
import cat1 from "../../../assets/categories/cat1.png";
import cat2 from "../../../assets/categories/cat2.png";
import cat3 from "../../../assets/categories/cat3.png";
import cat4 from "../../../assets/categories/cat4.png";

function Home() {
  const brands = [
    brand1,
    brand2,
    brand3,
    brand4,
    brand5,
    brand6,
    brand7,
    brand8,
    brand9,
    brand10,
  ];

  const cats = [
    { icon: cat1, name: "Laptop" },
    { icon: cat2, name: "CPU" },
    { icon: cat3, name: "HeadPhone" },
    { icon: cat4, name: "Monitor" },
  ];
  return (
    <section className="flex flex-col items-center justify-center gap-5 p-4">
      <div className="w-full mx-auto flex flex-col md:flex-row justify-center items-start gap-4 ">
        {/* LEFT CATEGORY */}
        <div className="w-full md:w-[25%] pr-0 lg:pr-4 flex gap-2 md:gap-0 sm:flex-col text-md p-2 md:p-9 lg:pt-9 overflow-x-auto lg:overflow-visible bg-white rounded-2xl">
          <h2 className="text-red-500 text-sm font-semibold whitespace-nowrap">
            SALE 40% OFF
          </h2>

          <ul className="flex flex-row md:flex-col gap-4 text-md pt-1 lg:pt-4 overflow-x-auto lg:overflow-visible font-semibold">
            <li className="whitespace-nowrap">Women's Fashion</li>
            <li className="whitespace-nowrap">Men's Fashion</li>
            <li className="whitespace-nowrap">Electronics</li>
            <li className="whitespace-nowrap">Home & Lifestyle</li>
            <li className="whitespace-nowrap">Medicine</li>
            <li className="whitespace-nowrap">Sports & Outdoor</li>
            <li className="whitespace-nowrap">Baby's & Toys</li>
            <li className="whitespace-nowrap">Groceries & Pets</li>
            <li className="whitespace-nowrap">Health & Beauty</li>
          </ul>
        </div>

        {/* CENTER SECTION */}
        <div className="flex flex-col justify-center items-center gap-3 w-full md:w-[50%]">
          {/* MAIN SLIDER */}
          <div
            className="relative w-full h-[310px] bg-no-repeat bg-center bg-cover rounded-lg overflow-hidden"
            style={{ backgroundImage: `url(${slider1})` }}
          >
            <div className="absolute inset-0 flex flex-col justify-center items-start p-6 md:p-9 text-white bg-black/30">
              <h2 className="text-xl md:text-2xl font-bold">
                Noise Cancelling
              </h2>
              <h3 className="text-lg md:text-2xl">HeadPhone</h3>

              <div className="text-sm font-light mt-2">
                <p>Boso Over-Ear Headphone</p>
                <p>Wifi, Voice Assistant</p>
                <p>Low Latency Game Mode</p>
              </div>

              <button className="mt-3 bg-white text-black px-3 py-1 rounded-lg hover:bg-gray-200">
                Buy Now
              </button>
            </div>

            <p className="bg-white text-black px-4 py-1 rounded-2xl w-fit absolute bottom-4 right-4 text-sm">
              3 / 3
            </p>
          </div>

          {/* BOTTOM CARDS */}
          <div className="flex flex-row justify-center items-center gap-5 w-full">
            <div
              className="flex flex-col flex-1 gap-3 h-32 p-3 rounded-lg bg-no-repeat bg-cover bg-center relative overflow-hidden"
              style={{ backgroundImage: `url(${slider2})` }}
            >
              <div className="absolute inset-0 bg-white/40"></div>

              <div className="relative z-10">
                <h2 className="text-sm md:text-base w-44">
                  Sono Playgo 5 from{" "}
                  <span className="text-[#1ABA1A]">$569</span>
                </h2>
                <Link to="/product" className="text-blue-500 text-sm">
                  DISCOVER NOW
                </Link>
              </div>
            </div>

            <div
              className="flex flex-col flex-1 gap-4 h-32 p-3 rounded-lg bg-no-repeat bg-cover bg-center relative overflow-hidden"
              style={{ backgroundImage: `url(${slider3})` }}
            >
              <div className="absolute inset-0 bg-white/40"></div>

              <div className="relative z-10">
                <h2 className="text-sm md:text-base w-44">
                  Logitek Bluetooth{" "}
                  <span className="text-[#FFC107]">Keyboard</span>
                </h2>
                <Link to="/product/id" className="text-blue-600 text-sm">
                  DISCOVER NOW
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT SECTION */}
        <div className="flex flex-col justify-center items-center gap-4 w-full md:w-[25%]">
          <div
            className="w-full h-[217px] bg-cover bg-center rounded-lg relative overflow-hidden"
            style={{ backgroundImage: `url(${slider4})` }}
          >
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="absolute right-0 z-10 text-white p-3">
              <h3 className="text-xl w-40 font-bold">
                Sport Water Resistance Watch
              </h3>
              <button className="mt-4 bg-white text-black px-2 py-1 rounded">
                Shop Now
              </button>
            </div>
          </div>

          <div
            className="w-full h-[217px] bg-cover bg-center rounded-lg relative overflow-hidden"
            style={{ backgroundImage: `url(${slider5})` }}
          >
            <div className="absolute inset-0 bg-black/30"></div>
            <div className="relative z-10 text-white p-5 w-35 space-y-3">
              <h3>
                <span className="text-xl font-bold">OKODO </span>HERO 11+ BLACK
              </h3>
              <p>
                FROM <span className="text-lg text-[#1ABA1A]">$169</span>
              </p>
            </div>
          </div>
        </div>
      </div>


      {/* Brand & Categories */}
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-5">
        <div className="flex flex-col justify-center  gap-5 bg-white rounded-lg p-6">
          <h2 className="font-semibold text-lg text-left">FEATURED BRANDS</h2>

          <div className="grid grid-cols-5 gap-6 place-items-center">
            {brands.map((Logo, index) => (
              <img src={Logo} alt="" key={index} className="w-16" />
            ))}
          </div>
        </div>

        <div className="flex flex-col justify-center gap-5 bg-white rounded-lg p-6">
          <div>
            <h2 className="font-semibold text-lg text-left">TOP CATEGORIES</h2>
            {/* <div>left right </div> */}
          </div>

          <div className="grid grid-cols-4 gap-4 place-items-center">
            {cats.map((logo, index) => (
              <div key={index} className="flex flex-col justify-center items-center text-md">
                <img src={logo.icon} alt={logo.name} />
                <p>{logo.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Deal of the day */}
      <div>

      </div>
    </section>
  );
}

export default Home;
