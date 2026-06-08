import { useState } from "react";

function Contact() {
  const [formdata, setFormData] = useState({});

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
      <div className="text-sm text-gray-500 w-full bg-white rounded-lg p-5">
        Home / pages /{" "}
        <span className="text-md font-semibold text-black">Contact</span>
      </div>

      <div className="bg-white rounded-lg w-full">
        <h2 className="text-lg font-semibold">READY TO WORK WITH US</h2>
        <p>Contact us for all your questions and opinions</p>
        <div className="w-full grid grid-cols-2">
          <form onSubmit={handleSubmit} className="">
            {/* firstname */} {/* lastname */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="firstname"
                  value={formdata.firstname}
                  onChange={handleChange}
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
          <div>
            
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
