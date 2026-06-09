import aboutimg from "../../../assets/div.about.png";
import ban2 from "../../../assets/banner/aboutimg.png";
import { FaThumbsUp, FaTruck, FaDollarSign } from "react-icons/fa";
import ban3 from "../../../assets/banner/about3.png";
import avatar from "../../../assets/avatars.jpg";
function About() {
  const Owner = [
    {
      id: 1,
      name: "Ajay Bhayadyo",
      img: avatar,
      pos: "Founder & CEO",
    },
    {
      id: 2,
      name: "Sarah Jenkins",
      img: avatar,
      pos: "Chief Operating Officer",
    },
    {
      id: 3,
      name: "Michael Chen",
      img: avatar,
      pos: "Head of Logistics",
    },
    {
      id: 4,
      name: "Amara Okafor",
      img: avatar,
      pos: "Technical Director",
    },
    {
      id: 5,
      name: "Carlos Mendez",
      img: avatar,
      pos: "Marketing Lead",
    },
  ];

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
              <FaTruck />
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

      {/* fourth section */}
      <div className="flex flex-col gap-6 bg-white rounded-lg p-6">
        <h2 className="text-xl font-bold">OUR MISSION AND VISION</h2>
        <p>
          lNam maximus nunc a augue pulvinar, non euismod mauris tempus. Cras
          non elit vel magna molestie pellentesque in eu dui. Donec laoreet quis
          erat vitae finibus. Vestibulum enim eros, porta eget quam et, euismod
          dictum elit. Nullam eu tempus magna. Fusce malesuada nisi id felis
          placerat porta vel sed augue. Vivamus mollis mauris vitae rhoncus
          egestas. Pellentesque habitant morbi tristique senectus et netus et
          malesuada fames ac turpis egestas.
        </p>

        <img src={ban3} alt="h-[400px]" />

        <h2 className="text-xl font-bold">
          FROM A RETAIL STORE TO THE GLOBAL CHAIN OF STORES
        </h2>
        <p>
          Pellentesque laoreet justo nec ex sodales euismod. Aliquam orci
          tortor, bibendum nec ultricies ac, auctor nec purus. Maecenas in
          consectetur erat.
        </p>
        {/* Replaced gap-2 with gap-x-2 to remove vertical spacing entirely */}
        <ul className="grid md:grid-flow-col grid-rows-9 gap-x-4 md:h-86 text-sm border-b ">
          <li className="bg-white">
            <strong>1997:</strong> A small store located in Brooklyn Town, USA
          </li>
          <li>
            <strong>1998:</strong> It is a long established fact that a reader
            will be distracted by the readable
          </li>
          <li>
            <strong>2000:</strong> Lorem Ipsum is simply dummy text of the
            printing and typesetting industry
          </li>
          <li>
            <strong>2002:</strong> Lorem Ipsum has been the industry's standard
            dummy text ever since the
          </li>
          <li>
            <strong>2004:</strong> Contrary to popular belief, Lorem Ipsum is
            not simply random text
          </li>
          <li>
            <strong>2005:</strong> The point of using Lorem Ipsum is that it has
            a more-or-less normal distribution of letters, as opposed to using
            'Content here
          </li>
          <li>
            <strong>2006:</strong> There are many variations of passages of
            Lorem Ipsum available, but the majority have suffered alteration in
            some form, by injected humour, or randomised words which don't look
            even slightly believable.
          </li>
          <li>
            <strong>2010:</strong> All the Lorem Ipsum generators on the
            Internet tend to repeat predefined
          </li>
          <li>
            <strong>2013:</strong> Lorem Ipsum comes from sections 1.10.32
          </li>

          <li>
            <strong>2014:</strong> There are many variations of passages of
            Lorem Ipsum available, but the majority have suffered alteration in
            some form
          </li>
          <li>
            <strong>2016:</strong> All the Lorem Ipsum generators on the
            Internet tend to repeat predefined chunks as necessary
          </li>
          <li>
            <strong>2020:</strong> Lorem Ipsum comes from sections 1.10.32
          </li>
          <li>
            <strong>2021:</strong> Making this the first true generator on the
            Internet
          </li>
          <li>
            <strong>2022:</strong> Lorem Ipsum which looks reasonable. The
            generated Lorem Ipsum is therefore always free from repetition,
            injected humour
          </li>
          <li>
            <strong>2023:</strong> here are many variations of passages of Lorem
            Ipsum available, but the majority have suffered alteration in some
            form
          </li>
        </ul>

        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold">LEADERSHIPS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 place-items-center">
            {Owner.map((per, index) => (
              <div key={index} className="text-center">
                <img src={per.img} alt="" className="h-[200px]"/>
                <h2 className="text-lg font-semibold">{per.name}</h2>
                <p className="text-sm">{per.pos}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;
