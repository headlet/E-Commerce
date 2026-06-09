import { NavLink } from "react-router";
import avatar from "../../../assets/avatars.jpg";
import { useState } from "react";

function Profile() {
  const [formdata, setFormData] = useState({});

  const handleChange = (e) => {
    const {name, type, value} = e.target;
    setFormData((values) => ({...values, [name] : value}));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formdata);
  };

  return (
    <section className="flex flex-col items-center justify-center w-full p-4 gap-5">
      <div className="text-sm text-gray-500 w-full bg-white rounded-lg p-5">
        Home / pages /{" "}
        <span className="text-md font-semibold text-black">Profile</span>
      </div>

      <div className="bg-white rounded-lg p-6 w-full flex justify-evenly gap-4">
        <div className="flex flex-col gap-4 justify-center bg-gray-200 p-6 rounded-lg w-[18%]">
          <img
            src={avatar}
            alt=""
            className="rounded-full bg-gray-600 h-[200px]"
          />
          <h2 className="text-xl font-semibold">Ajay Bhayadyo</h2>
          <p className="text-sm text-gray-600">bhayadyo@gmail.com</p>
          <NavLink
            to="/profile"
            className={({ isActive }) =>
              `p-3  ${isActive ? "bg-[#1ABA1A] text-white" : "bg-gray-100 text-black hover:bg-green-100"}`
            }
          >
            Account Info
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `p-3 ${isActive ? "bg-[#1ABA1A] text-white" : "bg-gray-100 text-black hover:bg-green-100"}`
            }
          >
            {" "}
            My order
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `p-3 ${isActive ? "bg-[#1ABA1A] text-white" : "bg-gray-100 text-black hover:bg-green-100"}`
            }
          >
            {" "}
            My address
          </NavLink>
          <NavLink
            to="/"
            className={({ isActive }) =>
              `p-3 ${isActive ? "bg-[#1ABA1A] text-white" : "bg-gray-100 text-black hover:bg-green-100"}`
            }
          >
            {" "}
            Change Password
          </NavLink>
        </div>

        {/* Form */}
        <div className="w-[80%] p-8 flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">Account Info</h2>
          <form
            onSubmit={handleSubmit}
            className="flex flex-col gap-4 w-full p-6"
          >
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
        
            {/* submit */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-auto bg-[#13b41d] hover:bg-green-600 text-white font-semibold text-xs tracking-wider uppercase py-3.5 px-6 rounded-md transition duration-200 shadow-sm"
              >
                SAVE
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Profile;
