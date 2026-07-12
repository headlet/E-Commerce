import prod15 from "../../../assets/products/prod19.png";
import prod16 from "../../../assets/products/prod20.png";
import prod17 from "../../../assets/products/prod21.png";
import prod18 from "../../../assets/products/prod22.png";
import prod19 from "../../../assets/products/prod23.png";
import prod20 from "../../../assets/products/prod24.png";
import slider1 from "../../../assets/sliders/slider1.png";
import slider5 from "../../../assets/sliders/slider5.png";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { Link } from "react-router";
import { Title } from "react-head";
import prod5 from "../../../assets/products/product2/prod9.png.png";
import prod6 from "../../../assets/products/product3/prod10.png.png";
import prod7 from "../../../assets/products/product4/prod11.png.png";
import prod8 from "../../../assets/products/product5/prod12.png.png";
import prod9 from "../../../assets/products/product6/prod13.png.png";

function Product() {
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

  const secondprod = [
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
  ];

  return (
    <section className="flex flex-col items-center justify-center w-full p-4 gap-5">
      <Title>Product | SpeedMart</Title>
      <div className="text-sm text-gray-500 w-full bg-white rounded-lg p-5">
        Home / pages /{" "}
        <span className="text-md font-semibold text-black">
          Top Cell Phone & Tablet
        </span>
      </div>

      <div className="flex flex-col justify-center items-start w-full gap-4 bg-white rounded-lg p-8">
        <h2 className="text-lg font-semibold">TOP CELL PHONE & TABLET</h2>
        <div className="flex flex-col md:flex-row justify-center items-center w-full gap-4">
          <div className="flex flex-col justify-center items-center gap-3 w-full md:w-[65%]">
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
          </div>

          {/* RIGHT SECTION */}
          <div className="flex flex-col justify-center items-center gap-4 w-full md:w-[35%]">
            <div
              className="w-full h-[310px] bg-cover bg-center rounded-lg relative overflow-hidden"
              style={{ backgroundImage: `url(${slider5})` }}
            >
              <div className="absolute inset-0 bg-black/30"></div>
              <div className="relative z-10 text-white p-5 w-35 space-y-3">
                <h3>
                  <span className="text-xl font-bold">OKODO </span>HERO 11+
                  BLACK
                </h3>
                <p>
                  FROM <span className="text-lg text-[#1ABA1A]">$169</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col justify-center items-start w-full bg-white rounded-lg p-7">
        <h2 className="text-lg font-semibold">POPULAR CATEGORIES</h2>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-6 w-full  p-4">
          {list.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-between p-3 rounded-lg"
            >
              <div>
                <h2 className="text-md font-semibold">{item.name}</h2>
                <p className="text-xs text-gray-500">{item.stock} items</p>
              </div>

              <img
                src={item.img}
                alt={item.name}
                className="w-14 h-14 object-contain"
              />
            </div>
          ))}
        </div>
      </div>
      {/* 
product */}
      <div className="flex flex-col gap-6 bg-white rounded-lg p-7 w-full">
        <div className="w-full flex flex-col md:flex-row justify-center gap-4">
          <div className="w-full md:w-[20%] bg-gray-200 rounded-lg p-4 flex flex-col">
            <h2 className="text-lg font-semibold">CATEGORIES</h2>
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

          <div className="w-full md:w-[75%] rounded-lg p-4 flex flex-col items-center justify-center gap-4">
              <h2 className="text-lg font-semibold">
                BEST SELLER IN THIS CATEGORY
              </h2>
              <div className="flex justify-center  items-center w-full bg-white rounded-lg py-10">
                <FaChevronLeft size={30} className="bg-gray-200 rounded-lg" />
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 px-7 place-items-center gap-6">
                  {bestprod.map((prod, index) => (
                    <div className="flex flex-col justify-center items-center gap-4 rounded-lg px-3">
                      <div className="relative ">
                        <p className="absolute top-4 left-2 bg-[#1ABA1A] p-2 text-white  rounded-2xl text-xs">
                          Save{" "}
                          <span className="text-md block">{prod.save}</span>
                        </p>
                        <img src={prod.prodimg} alt="" className="h-48 w-48" />
                        <div>
                          <img
                            src={prod.prodimg}
                            alt=""
                            className="w-10 h-10 hover:bg-[#1ABA1A] hover:border-[#1ABA1A] hover:border-2"
                          />
                        </div>
                      </div>

                      <div
                        className="flex flex-col justify-center gap-1 w-48"
                        key={index}
                      >
                        <h2 className="w-full h-15 text-md font-semibold block overflow-hidden">
                          {prod.name}
                        </h2>
                        <div className="flex gap-3 text-md">
                          <p className="text-red-500">{prod.price}</p>
                          <p className="line-through">{prod.org_price}</p>
                        </div>
                        <div className="flex gap-4">
                          <p className="bg-green-100 rounded text-[#1ABA1A]">
                            FREE SHIPPING
                          </p>
                        </div>
                        <p>{prod.stock}</p> {/*add cross */}
                      </div>
                    </div>
                  ))}
                </div>
                <FaChevronRight size={30} className="bg-gray-200 rounded-lg" />
              </div>
          </div>
        </div>

        {/* second product */}
        <div className="w-full flex  flex-col md:flex-row justify-center  gap-4">
          <div className="w-full md:w-[20%] bg-gray-200 rounded-lg p-4 ">
            <div className="flex justify-between items-center">
              <h2 className="text-md font-semibold">CATEGORIES</h2>
              <Link className="text-sm">Reset All</Link>
            </div>
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

          <div className="w-full md:w-[75%] p-4  border-t flex flex-col justify-center items-center gap-4">
            <h2 className="text-lg font-semibold">
              BEST SELLER IN THIS CATEGORY
            </h2>

            <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 place-items-center px-7 gap-6 py-10">
              {secondprod.map((prod, index) => (
                <div className="flex flex-col justify-center items-center gap-4 rounded-lg px-3">
                  <div className="relative ">
                    <p className="absolute top-4 left-2 bg-[#1ABA1A] p-2 text-white  rounded-2xl text-xs">
                      Save <span className="text-md block">{prod.save}</span>
                    </p>
                    <img src={prod.prodimg} alt="" className="h-48 w-48" />
                    <div>
                      <img
                        src={prod.prodimg}
                        alt=""
                        className="w-10 h-10 hover:bg-[#1ABA1A] hover:border-[#1ABA1A] hover:border-2"
                      />
                    </div>
                  </div>

                  <div
                    className="flex flex-col justify-center gap-1 w-48"
                    key={index}
                  >
                    <h2 className="w-full h-12 text-md font-semibold block overflow-hidden">
                      {prod.name}
                    </h2>
                    <div className="flex gap-3 text-md">
                      <p className="text-red-500">{prod.price}</p>
                      <p className="line-through">{prod.org_price}</p>
                    </div>
                    <div className="flex gap-4">
                      <p className="bg-green-100 rounded text-[#1ABA1A]">
                        FREE SHIPPING
                      </p>
                    </div>
                    <p>{prod.stock}</p> {/*add cross */}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Product;
