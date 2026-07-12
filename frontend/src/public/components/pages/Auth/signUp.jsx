import { FaGoogle } from "react-icons/fa";
import { Link, Navigate } from "react-router";
import loginimg from "../../../../assets/login.png";
import logo from "../../../../assets/logo.png";
import { register } from "../../../../api/auth";
import { useState } from "react";
import { Title } from "react-head";

function signUp() {
  const [form, setForm] = useState({
    first_name: "",
    last_name: "",
    username: "",
    dob: "",
    phone: "",
    gender: "",
    role_id: 1,
    email: "",
    password: "",
    password_confirmation: "",
    status: "active",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(form);
    try {
      const response = await register(form);

      console.log(response.data);

      if (response.data && response.data.access_token) {
        const { access_token, user } = response.data;
        localStorage.setItem("token", access_token);
        localStorage.setItem("user", JSON.stringify(user));
        window.location.href = "/profile";
      }
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((e) => ({
      ...e,
      [name]: value,
    }));
  };

  return (
    <section className="flex flex-col items-center justify-center w-full p-4 gap-4">
      <Title>SignUp | SpeedMart</Title>
      <div className="text-sm text-gray-500 w-full bg-white rounded-lg p-5">
        Home / pages /{" "}
        <span className="text-md font-semibold text-black">SignUp</span>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center shadow-lg bg-white rounded-xl overflow-hidden w-full">
        {/* LEFT SIDE - FORM */}
        <div className="w-full md:w-[50%] flex flex-col justify-center items-center px-6 md:px-12 py-10">
          <img src={logo} alt="logo" className="h-12 mb-4" />

          <h2 className="text-2xl font-semibold mb-6">SignUp To Account</h2>

          {/* Google Signup */}
          <div className="flex items-center gap-2 border px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-100 mb-4">
            <p>SignUp with Google</p>
            <FaGoogle size={20} className="text-amber-500" />
          </div>

          <p className="mb-4 text-gray-500">Or</p>

          {/* FORM */}
          <form
            className="flex flex-col w-full sm:w-[80%] md:w-[60%] gap-4"
            onSubmit={handleSubmit}
          >
            <div className="w-fit flex md:flex-row flex-col gap-2">
              <div className="flex flex-col">
                <label>First Name</label>
                <input
                  type="text"
                  name="first_name"
                  value={form.first_name}
                  onChange={handleChange}
                  className="border p-1 rounded-md outline-none"
                />
              </div>

              <div className="flex flex-col">
                <label>Last Name</label>
                <input
                  type="text"
                  name="last_name"
                  value={form.last_name}
                  onChange={handleChange}
                  className="border p-1 rounded-md outline-none"
                />
              </div>
            </div>

            <div className="w-fit flex gap-2">
              <div className="flex flex-col">
                <label>Username</label>
                <input
                  type="text"
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                  className="border p-1 rounded-md outline-none"
                />
              </div>

              <div className="flex flex-col">
                <label>Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className="border p-1 rounded-md outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className="border p-2 rounded-md outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label>dob</label>
              <input
                type="date"
                name="dob"
                value={form.dob}
                onChange={handleChange}
                className="border p-2 rounded-md outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label>Gender</label>
              <select
                id="gender"
                name="gender"
                value={form.gender}
                onChange={handleChange}
                className="border p-2 rounded-md outline-none"
              >
                <option value="" disabled selected>
                  Select gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div className="w-fit flex md:flex-row flex-col gap-2">
              <div className="flex flex-col">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  className="border p-2 rounded-md outline-none"
                />
              </div>

              <div className="flex flex-col">
                <label>Confirm Password</label>
                <input
                  type="password"
                  name="password_confirmation"
                  value={form.password_confirmation}
                  onChange={handleChange}
                  className="border p-2 rounded-md outline-none"
                />
              </div>
            </div>

            <button
              type="submit"
              className="bg-black text-white p-2 rounded-md hover:bg-white hover:text-black border transition"
            >
              Create An Account
            </button>
          </form>

          <p className="mt-4 text-sm text-center">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="hidden md:flex justify-center items-center w-[50%]">
          <img src={loginimg} alt="signup" className="w-[60%]" />
        </div>
      </div>
    </section>
  );
}

export default signUp;
