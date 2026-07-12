import { useState } from "react";
import contact from "../../../assets/contact.png";
import { Title } from "react-head";

function Contact() {
  const [formdata, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phonenumber: "",
    country: "NP",
    subject: "",
    message: "",
    agreeToTerm: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((values) => ({
      ...values,
      [name]: type == "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formdata);
  };

  return (
    <section className="flex flex-col items-center justify-center w-full p-4 gap-5">
      <Title>Contact | SpeedMart</Title>
      <div className="text-sm text-gray-500 w-full bg-white rounded-lg p-5">
        Home / pages /{" "}
        <span className="text-md font-semibold text-black">Contact</span>
      </div>

      <div className="bg-white rounded-lg w-full p-8 flex flex-col gap-2 justify-center  ">
        <h2 className="text-lg font-semibold">READY TO WORK WITH US</h2>
        <p>Contact us for all your questions and opinions</p>
        <div className="w-full grid grid-cols-1 lg:grid-cols-2 place-items-center gap-5">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-full p-6">
            {/* firstname */} {/* lastname */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="firstname"
                  value={formdata.firstname}
                  onChange={handleChange}
                  className="w-full appearance-none px-4 py-2.5 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 text-gray-700"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="lastname"
                  value={formdata.lastname}
                  onChange={handleChange}
                  className="w-full appearance-none px-4 py-2.5 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 text-gray-700"
                />
              </div>
            </div>
            {/* email */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                value={formdata.email}
                name="email"
                onChange={handleChange}
                className="w-full appearance-none px-4 py-2.5 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 text-gray-700"
              />
            </div>
            {/* number */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number<span className="text-red-500">(optional)</span>
              </label>
              <input
                type="tel"
                name="phonenumber"
                value={formdata.phonenumber}
                onChange={handleChange}
                className="w-full appearance-none px-4 py-2.5 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 text-gray-700"
              />
            </div>
            {/* country */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Country / Region<span className="text-red-500">*</span>
              </label>
              <select
                name="country"
                value={formdata.country}
                onChange={handleChange}
                className="w-full appearance-none px-4 py-2.5 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 text-gray-700"
              >
                <option value="NP">Nepal</option>
                <option value="UK">United Kingdom (UK)</option>
                <option value="CA">Canada</option>
                <option value="AU">Australia</option>
              </select>
            </div>
            {/* subject*/}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                name="subject"
                value={formdata.subject}
                onChange={handleChange}
                className="w-full appearance-none px-4 py-2.5 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 text-gray-700"
              />
            </div>
            {/* message */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                name="message"
                value={formdata.message}
                onChange={handleChange}
                rows={4}
                placeholder="Note about your order, e.g. special note for delivery"
                className="w-full appearance-none px-4 py-2.5 border border-gray-300 rounded-md bg-white focus:outline-none focus:ring-1 focus:ring-green-500 focus:border-green-500 text-gray-700"
              ></textarea>
            </div>
            {/* aggre */}
            <div className="flex items-center space-x-2 pt-2">
              <input
                type="checkbox"
                name="agreeToTerm"
                checked={formdata.agreeToTerm}
                onChange={handleChange}
                className="h-4 w-4 rounded border-gray-300 text-green-600 focus:ring-green-500 accent-green-600"
              />
              <label
                htmlFor="terms"
                className="text-xs sm:text-sm text-gray-800 select-none"
              >
                I want to receive news and updates once in a while. By
                submitting, I’m agreed to the{" "}
                <a
                  href="#"
                  className="text-green-600 hover:underline font-medium"
                >
                  Terms & Conditions
                </a>
              </label>
            </div>
            {/* submit */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-auto bg-[#13b41d] hover:bg-green-600 text-white font-semibold text-xs tracking-wider uppercase py-3.5 px-6 rounded-md transition duration-200 shadow-sm"
              >
                SEND MESSAGE
              </button>
            </div>
          </form>

          {/* right section */}
          <div className=" flex flex-col justify-center space-y-6 w-[80%]">
            {/* Info Box */}
            <div className="bg-[#f0f2f9] rounded-lg p-8 sm:p-10 space-y-8">
              {/* HQ Info */}
              <div>
                <h4 className="text-[11px] font-bold tracking-widest text-gray-400 uppercase mb-3">
                  UNITED STATES (HEAD QUATER)
                </h4>
                <p className="text-sm text-gray-800 font-medium mb-1.5">
                  152 Thatcher Road St, Mahattan, 10463, US
                </p>
                <p className="text-sm text-gray-800 font-medium mb-2">
                  (+025) 3886 25 16
                </p>
                <a
                  href="mailto:hello@swattechmart.com"
                  className="text-sm text-green-600 hover:underline font-medium block"
                >
                  hello@swattechmart.com
                </a>
              </div>

              {/* Branch Info */}
              <div>
                <h4 className="text-[11px] font-bold tracking-widest text-gray-400 uppercase mb-3">
                  UNITED KINGDOM (BRANCH)
                </h4>
                <p className="text-sm text-gray-800 font-medium mb-1.5">
                  12 Buckingham Rd, Thornthwaite, HG3 4TY, UK
                </p>
                <p className="text-sm text-gray-800 font-medium mb-2">
                  (+718) 895-5350
                </p>
                <a
                  href="mailto:contact@swattechmart.co.uk"
                  className="text-sm text-green-600 hover:underline font-medium block"
                >
                  contact@swattechmart.co.uk
                </a>
              </div>

              {/* Social Icons (Using SVG paths instead of FontAwesome classes) */}
              <div className="flex items-center space-x-3 pt-2">
                {[
                  "twitter",
                  "facebook",
                  "instagram",
                  "youtube",
                  "pinterest",
                ].map((platform) => (
                  <a
                    key={platform}
                    href="#"
                    className="w-8 h-8 rounded-full bg-white flex items-center justify-center text-gray-600 hover:bg-gray-100 transition shadow-sm text-xs font-semibold capitalize"
                  >
                    {platform[0]}
                  </a>
                ))}
              </div>
            </div>

            {/* Bottom Image Block */}
            <div className="w-full h-64 sm:h-80 lg:flex-1 min-h-[260px] rounded-lg overflow-hidden relative shadow-sm">
              <img
                src={contact}
                alt="Working on laptop"
                className="w-full h-full object-cover grayscale brightness-75"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="w-full h-[416px] bg-white rounded-lg p-8 flex flex-col gap-4">
        <h2 className="text-lg font-semibold">FIND US ON GOOGLE MAPSS</h2>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d43284.48541647968!2d85.406599!3d27.6731828!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2snp!4v1780919171591!5m2!1sen!2snp"
          className="w-full h-full"
        ></iframe>
      </div>
    </section>
  );
}

export default Contact;
