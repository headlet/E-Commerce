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
import prod from "../../../assets/products/product1/prod.png";
import prod1 from "../../../assets/products/product1/prod5.png";
import prod2 from "../../../assets/products/product1/prod6.png";
import prod3 from "../../../assets/products/product1/prod7.png";
import prod4 from "../../../assets/products/product1/prod8.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import ban1 from "../../../assets/banner/ban1.png";
import ban2 from "../../../assets/banner/ban2.png";
import main from "../../../assets/banner/main.png";
import prod5 from "../../../assets/products/product2/prod9.png.png";
import prod6 from "../../../assets/products/product3/prod10.png.png";
import prod7 from "../../../assets/products/product4/prod11.png.png";
import prod8 from "../../../assets/products/product5/prod12.png.png";
import prod9 from "../../../assets/products/product6/prod13.png.png";
import prod10 from "../../../assets/products/prod14.png";
import prod11 from "../../../assets/products/prod15.png";
import prod12 from "../../../assets/products/prod16.png";
import prod13 from "../../../assets/products/prod17.png";
import prod14 from "../../../assets/products/prod18.png";
import prod15 from "../../../assets/products/prod19.png";
import prod16 from "../../../assets/products/prod20.png";
import prod17 from "../../../assets/products/prod21.png";
import prod18 from "../../../assets/products/prod22.png";
import prod19 from "../../../assets/products/prod23.png";
import prod20 from "../../../assets/products/prod24.png";
import prod21 from "../../../assets/products/div.banner.png";
import prod22 from "../../../assets/products/prod46.png.png";

function Home() {
  const demo = ["", "", ""];
  const list = [
    {
      name: "Android",
      img: prod15,
      stock: 10,
    },

    {
      name: "Iphone",
      img: prod16,
      stock: 10,
    },
    {
      name: "Samsung",
      img: prod17,
      stock: 10,
    },
    {
      name: "ROG",
      img: prod18,
      stock: 10,
    },
    {
      name: "MI",
      img: prod19,
      stock: 10,
    },
    {
      name: "Oppo",
      img: prod20,
      stock: 10,
    },
  ];
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

  const newBrand = [
    {
      name: "Zumac Steel Computer Case",
      desc: "And an option to upgrade every three years",
      img: prod10,
    },
    {
      name: "Summer Sale with Sale up to 50% OFF for Foam Gaming Computer",
      desc: "Limited time offer. Hurry up",
      img: prod11,
    },
    {
      name: "Summer Sale with Sale up to 50% OFF for Foam Gaming Chair",
      desc: "Limited time offer. Hurry up",
      img: prod12,
    },
    {
      name: "IPad Pro Mini 8- Powerfull in hand",
      desc: "Limited time offer. Hurry up",
      img: prod13,
    },
  ];

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

  const dealsimg = [prod1, prod2, prod3, prod4];
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

            <p className="bg-white text-black px-4 py-1 rounded-2xl w-fit absolute bottom-4 right-4 text-sm flex justify-center items-center gap-1">
              <FaChevronLeft />
              3 / 3
              <FaChevronRight />
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
          <div className="flex justify-between items-center">
            <h2 className="font-semibold text-lg text-left">TOP CATEGORIES</h2>
            <div className="flex gap-2 p-2 rounded-lg bg-[#1ABA1A] text-white">
              <FaChevronLeft />
              <FaChevronRight />
            </div>
          </div>

          <div className="grid grid-cols-4 gap-4 place-items-center">
            {cats.map((logo, index) => (
              <div
                key={index}
                className="flex flex-col justify-center items-center text-md"
              >
                <img src={logo.icon} alt={logo.name} />
                <p>{logo.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Deal of the day */}
      <div className="w-full flex flex-col lg:flex-row gap-8">
        <div className="flex flex-col justify-center lg:w-[76%]">
          <div className="flex justify-between bg-[#1ABA1A] items-center p-4 rounded-2xl">
            <div className=" font-semibold text-lg text-left text-white ">
              <h2>DEALS OF THE DAY</h2>
            </div>
            <div className="flex gap-2 text-white">
              <FaChevronLeft />
              <FaChevronRight />
            </div>
          </div>

          <div className="flex flex-col md:flex-row justify-center items-center bg-white rounded-lg p-9 gap-10">
            <div className="flex w-full justify-center items-center">
              <div className="w-auto h-96 py-6 flex flex-col gap-3">
                {dealsimg.map((deal, index) => (
                  <div key={index}>
                    <img src={deal} alt={deal} className="hover:bg-[#1ABA1A]" />
                  </div>
                ))}
              </div>
              <div className="relative py-15 w-[80%]">
                <p className="absolute top-12 left-5 bg-[#1ABA1A] p-1 text-white font-semibold  rounded-2xl">
                  Save <span className="text-xl block">$199.00</span>
                </p>
                <img src={prod} alt="" className="w-auto h-72" />
              </div>
            </div>
            <div className="flex flex-col gap-4 justify-center items-center md:justify-start md:items-start">
              <h2 className="font-bold text-xl w-92">
                Xiomi Redmi Note 11 pro 256GB 2023, Black Smartphone
              </h2>
              <p className="text-[#F1352B] text-xl font-bold">
                $569.00
                <span className="text-gray-500 font-normal line-through px-2">
                  {" "}
                  $759.00
                </span>
              </p>
              <ul className=" list-disc px-8">
                <li>
                  Intel LGA 1700 Socket: Supports 13th & 12th Gen Intel Core
                </li>
                <li> DDR5 Compatible: 4*SMD DIMMs with XMP 3.0 Memory</li>
                <li>Commanding Power Design: Twin 16+1+2 Phases Digital VRM</li>
              </ul>

              <div className="flex gap-4">
                <p className="bg-green-100 p-2 rounded text-[#1ABA1A]">
                  FREE SHIPPING
                </p>
                <p className="bg-red-100 p-2 rounded text-[#F1352B]">
                  FREE GIFT
                </p>
              </div>

              <div className="grid grid-cols-4">
                <h2 className="font-semibold">
                  HURRY UP! PROMORTION WILL EXPIRES IN
                </h2>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
                {/* Time countdown */}
              </div>

              <div className="w-full">
                <div className="w-[80%] h-2 bg-gray-300 rounded-full overflow-hidden border">
                  <div className="h-full w-[34.6%] bg-green-500"></div>
                </div>
                <p>
                  SOLD: <span className="font-bold">26/75</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="w-92 lg:w-[22%] flex flex-col gap-4 mx-auto">
          <img src={ban1} alt="" className=" h-44" />
          <img src={ban2} alt="" className=" h-44" />
        </div>
      </div>

      {/* break section */}
      <div
        className="bg-[#1ABA1A] w-full p-6 h-20 rounded-lg text-white text-center bg-center bg-no-repeat bg-cover"
        style={{ backgroundImage: `url(${main})` }}
      >
        <p>
          Member get FREE SHIPPING* with no order minimumal, * Restriction apply
          free 30-day trial
        </p>
      </div>

      {/* Best seller */}
      <div className="w-full bg-white rounded-lg">
        <div className="flex justify-between items-center p-7">
          <div className="flex gap-6">
            <h2 className="text-lg font-semibold">BEST SELLER</h2>
            <p>NEW IN</p>
            <p>POPULAR</p>
          </div>
          <button>View All</button>
        </div>

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

      {/* New brand */}
      <div className="w-full bg-white p-7 flex flex-col gap-8 rounded-lg">
        <div className="flex justify-between items-center w-full">
          <h2 className="text-lg font-semibold">BRAND NEW FOR YOU</h2>
          <div className="flex gap-4">
            <FaChevronLeft />
            <FaChevronRight />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 place-items-center">
          {newBrand.map((brand, index) => (
            <div
              className="flex flex-col gap-2 items-start justify-center h-[377px]"
              key={index}
            >
              <img
                src={brand.img}
                alt=""
                className="w-[302px] h-56 rounded-xl"
              />
              <h2 className="text-lg font-semibold h-8 overflow-hidden w-80 ">
                {brand.name}
              </h2>
              <p className="text-sm">{brand.desc} </p>
              <button className="border-2 border-[#1ABA1A] text-[#1ABA1A] rounded-lg p-1 text-sm">
                SHOP NOW
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* top sells */}
      <div className="w-full bg-white rounded-lg ">
        <div className="flex justify-between items-center p-7">
          <h2 className="text-lg font-semibold">TOP SELLING</h2>
          <button>View All</button>
        </div>

        <div className="flex flex-col justify-center items-center w-full px-10 gap-6">
          <div className="flex flex-col md:flex-row justify-center md:justify-between w-full gap-6">
            <div className="flex md:w-[50%] px-10 rounded-lg justify-between items-center">
              <div className="flex flex-col gap-3 justify-center items-start h-[200px] ">
                <h2 className="text-xl font-semibold max-w-[180px]">
                  REDMI NOTE 12 PRO+ 5G
                </h2>
                <p className="text-sm text-gray-400">Rise to the challenge</p>
                <button className="bg-black text-white p-2 rounded-lg">
                  SHOP NOW
                </button>
              </div>
              <img src={prod14} alt="" className="w-[60%]" />
            </div>

            <div className="grid grid-cols-3 grid-rows-2 h-[200px] gap-6 md:w-[50%]">
              {list.map((items, index) => (
                <div key={index} className="flex items-center gap-7">
                  <div>
                    <h2 className="text-md font-semibold">{items.name}</h2>
                    <p className="text-xs text-gray-500">{items.stock} items</p>
                  </div>
                  <img src={items.img} alt="" className="w-14 h-14" />
                </div>
              ))}
            </div>
          </div>
          <div className="flex md:justify-center  md:items-center w-full bg-white rounded-lg py-10">
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

                  <div
                    className="flex flex-col justify-center gap-2"
                    key={index}
                  >
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
      </div>

      {/* top sells 2nd */}
      <div className="w-full bg-white rounded-lg ">
        <div className="flex justify-between items-center p-7">
          <h2 className="text-lg font-semibold">TOP SELLING</h2>
          <button>View All</button>
        </div>

        <div className="flex flex-col justify-center items-center w-full px-10 gap-6">
          <div className="flex flex-col md:flex-row justify-center md:justify-between w-full gap-6">
            <div className="flex md:w-[50%] px-10 rounded-lg justify-between items-center">
              <div className="flex flex-col gap-3 justify-center items-start h-[200px] ">
                <h2 className="text-xl font-semibold max-w-[180px]">
                  REDMI NOTE 12 PRO+ 5G
                </h2>
                <p className="text-sm text-gray-400">Rise to the challenge</p>
                <button className="bg-black text-white p-2 rounded-lg">
                  SHOP NOW
                </button>
              </div>
              <img src={prod14} alt="" className="w-[60%]" />
            </div>

            <div className="grid grid-cols-3 grid-rows-2 md:h-[200px] gap-6 md:w-[50%]">
              {list.map((items, index) => (
                <div
                  key={index}
                  className="flex flex-col-reverse lg:flex-row items-center gap-7"
                >
                  <div>
                    <h2 className="text-md font-semibold">{items.name}</h2>
                    <p className="text-xs text-gray-500">{items.stock} items</p>
                  </div>
                  <img src={items.img} alt="" className="w-14 h-14" />
                </div>
              ))}
            </div>
          </div>
          <div className="flex md:justify-center  md:items-center w-full bg-white rounded-lg py-10">
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

                  <div
                    className="flex flex-col justify-center gap-2"
                    key={index}
                  >
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
      </div>

      {/* 3card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full gap-4">
        {demo.map((_, index) => (
          <div
            key={index}
            className="bg-white rounded-lg p-8 flex flex-col justify-evenly gap-4"
          >
            <div className="flex justify-between items-center">
              <h2 className="text-lg font-semibold">AUDIOS & CAMERAS</h2>
              <button>View All</button>
            </div>

            <div className="flex flex-col gap-10">
              <img src={prod21} alt="" className="lg:h-48 rounded-lg" />

              <div className="grid grid-cols-2 place-items-center gap-4">
                {demo.map((_, i) => (
                  <div key={i} className="text-center">
                    <img
                      src={prod22}
                      alt=""
                      className="h-32 w-32 rounded-full bg-gray-300"
                    />
                    <h2 className="font-semibold">Speaker</h2>
                    <p>9 items</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Home;
