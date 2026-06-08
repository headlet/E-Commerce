import aboutimg from "../../../assets/div.about.png";
function About() {
  return (
    <section className="flex flex-col items-center justify-center w-full p-4 gap-5">
      <div className="text-sm text-gray-500 w-full bg-white rounded-lg p-5">
        Home / pages /
        <span className="text-md font-semibold text-black">About</span>
      </div>

      {/* top hero section */}
      <div className="bg-white rounded-lg w-full">
        <div>
          <div className="w-full flex flex-col justify-center items-center lg:flex-row  md:justify-between border-b border-gray-400">
            <div className="flex flex-col justify-center p-15 gap-5">
              <h2 className="text-3xl font-bold">
                Best experience{" "}
                <span className="block text-xl font-normal ">always wins</span>
              </h2>
              <p className="text-sm text-gray-400 w-full ">
                1st Online Marketplace for Shopping in Nepal
              </p>
            </div>
            <img src={aboutimg} alt="" className="h-full w-[80%]" />
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
      </div>

      {/* second section */}
      <div>
        <img src="" alt="" />
        <div>
          <h2>
            We connect millions of buyers and sellers around the world,
            empowering people & creating economic opportunity for all.
          </h2>
          <p>
            Within our markets, millions of people around the world connect,
            both online and offline, to make, sell and buy unique goods. We also
            offer a wide range of Seller Services and tools that help creative
            entrepreneurs start, manage & scale their businesses.
          </p>
          <a href="" className="">OUR SHOWREEL</a>
        </div>
      </div>
    </section>
  );
}

export default About;
