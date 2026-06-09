import aboutimg from "../../../assets/div.about.png";
import ban2 from "../../../assets/banner/aboutimg.png";
import { FaThumbsUp, FaTruck, FaDollarSign } from "react-icons/fa";
function About() {
  return (
    <section className="flex flex-col items-center justify-center w-full p-4 gap-5">
      <div className="text-sm text-gray-500 w-full bg-white rounded-lg p-5">
        Home / pages /
        <span className="text-md font-semibold text-black">About</span>
      </div>

      {/* top hero section */}
      <div className="bg-white rounded-lg w-full">
        <div className="w-full flex flex-col lg:flex-row items-center justify-between border-b border-gray-400">
          <div className="flex flex-col justify-center items-center gap-5 lg:w-[28%] py-4">
            <h2 className="text-3xl font-bold text-center">
              Best experience
              <span className="block text-xl font-normal">always wins</span>
            </h2>

            <p className="text-sm text-gray-400 px-5 text-center">
              1st Online Marketplace for Shopping in Nepal
            </p>
          </div>

          <img src={aboutimg} alt="" className="w-full lg:w-[60%] h-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-6 place-items-center gap-6">
          <h2 className="text-lg font-semibold">
            Our purpose is to enrich{" "}
            <span className="text-[#1ABA1A] block"> and enhance lives</span>{" "}
            through technology
          </h2>

          <div>
            <h2 className="text-2xl font-bold">$12,5 M</h2>
            <p className="w-48 text-sm text-gray-500">
              TOTAL REVENUE FROM 2020 -2026
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">12K+</h2>
            <p className="w-48 text-sm text-gray-500">
              ORDER DELIVERD SUCCESSFULON EVERYDAY
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">725+</h2>
            <p className="w-48 text-sm text-gray-500">
              STORE AND OFFICE IN NP AND WORLDWIDE
            </p>
          </div>
        </div>
      </div>

      {/* second section */}
      <div className="bg-white rounded-lg w-full p-6 grid grid-cols-1 md:grid-cols-2 place-items-center gap-2">
        <img src={ban2} alt="" className=" h-[420px] rounded-lg" />
        <div className=" md:h-[420px] flex flex-col justify-center  gap-4 bg-gray-300 rounded-lg p-16">
          <h2 className="text-lg font-bold ">
            We connect millions of buyers and sellers around the world,
            empowering people & creating economic opportunity for all.
          </h2>
          <p className="text-sm">
            Within our markets, millions of people around the world connect,
            both online and offline, to make, sell and buy unique goods. We also
            offer a wide range of Seller Services and tools that help creative
            entrepreneurs start, manage & scale their businesses.
          </p>
          <a href="" className="bg-[#1ABA1A] text-white p-2 rounded-lg w-fit">
            OUR SHOWREEL
          </a>
        </div>
      </div>

      {/* third section */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 w-full">
        <div className="bg-white rounded-lg p-6 flex flex-col justify-center gap-8">
          <div className="flex justify-between items-center text-xl font-semibold">
            <h2>100% AUTHENTIC PRODUCTS</h2>
            <div className="bg-[#1ABA1A] rounded-full p-2 text-center">
              <FaThumbsUp />
            </div>
          </div>
          <p>
            Swoo Tech Mart just distribute 100% authorized products & guarantee
            quality. Nulla porta nulla nec orci vulputate, id rutrum sapien
            varius.
          </p>
        </div>

        <div className="bg-white rounded-lg p-6 flex flex-col justify-center gap-8">
          <div className="flex justify-between items-center text-xl font-semibold">
            <h2>100% AUTHENTIC PRODUCTS</h2>
            <div className="bg-[#1ABA1A] rounded-full p-2 text-center">
              <FaTruck/>
            </div>
          </div>
          <p>
            Swoo Tech Mart just distribute 100% authorized products & guarantee
            quality. Nulla porta nulla nec orci vulputate, id rutrum sapien
            varius.
          </p>
        </div>
        <div className="bg-white rounded-lg p-6 flex flex-col justify-center gap-8">
          <div className="flex justify-between items-center text-xl font-semibold">
            <h2>100% AUTHENTIC PRODUCTS</h2>
            <div className="bg-[#1ABA1A] rounded-full p-2 text-center">
              <FaDollarSign />
            </div>
          </div>
          <p>
            Swoo Tech Mart just distribute 100% authorized products & guarantee
            quality. Nulla porta nulla nec orci vulputate, id rutrum sapien
            varius.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
