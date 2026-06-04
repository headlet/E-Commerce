import hero1 from "../../../assets/hero1.png";
import { FaApple } from "react-icons/fa";

function Home() {
  return (
    <section className="flex justify-center">
      <div className="w-[90vw] flex gap-8 justify-center mb-6">
        {/* LEFT SIDEBAR */}
        <ul className="w-[12%] border-r border-gray-300 pr-4 flex flex-col gap-4 text-md pt-9">
          <li className="hover:font-semibold cursor-pointer">
            Women's Fashion
          </li>
          <li className="hover:font-semibold cursor-pointer">Men's Fashion</li>
          <li className="hover:font-semibold cursor-pointer">Electronics</li>
          <li className="hover:font-semibold cursor-pointer">
            Home & Lifestyle
          </li>
          <li className="hover:font-semibold cursor-pointer">Medicine</li>
          <li className="hover:font-semibold cursor-pointer">
            Sports & Outdoor
          </li>
          <li className="hover:font-semibold cursor-pointer">Baby's & Toys</li>
          <li className="hover:font-semibold cursor-pointer">
            Groceries & Pets
          </li>
          <li className="hover:font-semibold cursor-pointer">
            Health & Beauty
          </li>
        </ul>

        {/* HERO BANNER */}
        <div className="w-[60%] bg-black text-white relative overflow-hidden mt-9">
          <div className="flex items-center justify-between px-10 h-[350px]">
            {/* TEXT */}
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-2">
                <FaApple size={35} />
                <span>iPhone 14 Series</span>
              </div>

              <h1 className="text-4xl font-bold leading-tight w-[80%]">
                Up to 10% off Voucher
              </h1>

              <button className="border-b border-white w-fit">
                Shop Now →
              </button>
            </div>

            {/* IMAGE */}
            <img src={hero1} className="h-[300px] object-contain" />
          </div>

          {/* DOTS */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            <div className="w-2 h-2 rounded-full bg-gray-500"></div>
            <div className="w-2 h-2 rounded-full bg-gray-500"></div>
            <div className="w-2 h-2 rounded-full bg-red-500"></div>
            <div className="w-2 h-2 rounded-full bg-gray-500"></div>
          </div>
        </div>
      </div>


      <div>
        
      </div>
    </section>
  );
}

export default Home;
