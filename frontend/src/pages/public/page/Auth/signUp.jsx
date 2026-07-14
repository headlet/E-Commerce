import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router";
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

  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(true);
  const [errors, setErrors] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setErrors({});

    try {
      const response = await register(form);

      if (response.data && response.data.access_token) {
        const { access_token, user } = response.data;
        localStorage.setItem("token", access_token);
        localStorage.setItem("user", JSON.stringify(user));
        setIsSuccess(true);
        setMessage(response.data.message);
        window.location.href = "/profile";
      }
    } catch (error) {
      setIsSuccess(false);

      if (error.response && error.response.status === 422) {
        setErrors(error.response.data.errors);
        setMessage("Please resolve the input validation errors listed below.");
      } else {
        setMessage(error.response?.data?.message || "Failed to Register");
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors[name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: null }));
    }
  };

  return (
    <section className="flex flex-col items-center justify-center w-full p-4 gap-4 max-w-7xl mx-auto">
      <Title>SignUp | SpeedMart</Title>
      
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 w-full bg-white rounded-lg p-5 shadow-sm border border-gray-100">
        Home / pages /{" "}
        <span className="text-md font-semibold text-black">SignUp</span>
      </div>

      {/* Main Container */}
      <div className="flex flex-col lg:flex-row justify-center items-stretch shadow-lg bg-white rounded-xl overflow-hidden w-full border border-gray-100">
        
        {/* LEFT SIDE - FORM */}
        <div className="w-full lg:w-[50%] flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 py-10">
          <img src={logo} alt="logo" className="h-12 mb-4 object-contain" />

          <h2 className="text-2xl font-semibold mb-6">SignUp To Account</h2>

          {/* Google Signup */}
          <div className="flex items-center gap-2 border px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-50 transition mb-4">
            <p className="text-sm font-medium">SignUp with Google</p>
            <FaGoogle size={18} className="text-amber-500" />
          </div>

          <p className="mb-4 text-gray-400 text-sm font-medium">Or</p>

          {/* Alert Message Banner */}
          {message && (
            <div
              className={`w-full max-w-md mb-6 p-4 rounded-md text-sm font-medium ${
                isSuccess
                  ? "bg-green-50 text-green-800 border border-green-200"
                  : "bg-red-50 text-red-800 border border-red-200"
              }`}
            >
              {message}
            </div>
          )}

          {/* FORM */}
          <form
            className="flex flex-col w-full max-w-md gap-4"
            onSubmit={handleSubmit}
          >
            {/* First & Last Name */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">First Name</label>
                <input
                  type="text"
                  name="first_name"
                  value={form.first_name}
                  onChange={handleChange}
                  className={`border p-2 rounded-md outline-none focus:border-black transition text-sm ${
                    errors.first_name ? "border-red-500 focus:border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.first_name && (
                  <span className="text-xs text-red-500 mt-1">{errors.first_name[0]}</span>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">Last Name</label>
                <input
                  type="text"
                  name="last_name"
                  value={form.last_name}
                  onChange={handleChange}
                  className={`border p-2 rounded-md outline-none focus:border-black transition text-sm ${
                    errors.last_name ? "border-red-500 focus:border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.last_name && (
                  <span className="text-xs text-red-500 mt-1">{errors.last_name[0]}</span>
                )}
              </div>
            </div>

            {/* Username & Phone */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">Username</label>
                <input
                  type="text"
                  name="username"
                  value={form.username}
                  onChange={handleChange}
                  className={`border p-2 rounded-md outline-none focus:border-black transition text-sm ${
                    errors.username ? "border-red-500 focus:border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.username && (
                  <span className="text-xs text-red-500 mt-1">{errors.username[0]}</span>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">Phone Number</label>
                <input
                  type="tel"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className={`border p-2 rounded-md outline-none focus:border-black transition text-sm ${
                    errors.phone ? "border-red-500 focus:border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.phone && (
                  <span className="text-xs text-red-500 mt-1">{errors.phone[0]}</span>
                )}
              </div>
            </div>

            {/* Email Address */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Email Address</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                className={`border p-2 rounded-md outline-none focus:border-black transition text-sm ${
                  errors.email ? "border-red-500 focus:border-red-500" : "border-gray-300"
                }`}
              />
              {errors.email && (
                <span className="text-xs text-red-500 mt-1">{errors.email[0]}</span>
              )}
            </div>

            {/* DOB */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Date of Birth</label>
              <input
                type="date"
                name="dob"
                value={form.dob}
                onChange={handleChange}
                className={`border p-2 rounded-md outline-none focus:border-black transition text-sm ${
                  errors.dob ? "border-red-500 focus:border-red-500" : "border-gray-300"
                }`}
              />
              {errors.dob && (
                <span className="text-xs text-red-500 mt-1">{errors.dob[0]}</span>
              )}
            </div>

            {/* Gender */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">Gender</label>
              <select
                id="gender"
                name="gender"
                value={form.gender}
                onChange={handleChange}
                className={`border p-2 rounded-md outline-none focus:border-black bg-white transition text-sm ${
                  errors.gender ? "border-red-500 focus:border-red-500" : "border-gray-300"
                }`}
              >
                <option value="" disabled>
                  Select gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
              {errors.gender && (
                <span className="text-xs text-red-500 mt-1">{errors.gender[0]}</span>
              )}
            </div>

            {/* Passwords */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">Password</label>
                <input
                  type="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  className={`border p-2 rounded-md outline-none focus:border-black transition text-sm ${
                    errors.password ? "border-red-500 focus:border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.password && (
                  <span className="text-xs text-red-500 mt-1">{errors.password[0]}</span>
                )}
              </div>

              <div className="flex flex-col gap-1">
                <label className="text-sm font-medium text-gray-700">Confirm Password</label>
                <input
                  type="password"
                  name="password_confirmation"
                  value={form.password_confirmation}
                  onChange={handleChange}
                  className={`border p-2 rounded-md outline-none focus:border-black transition text-sm ${
                    errors.password_confirmation ? "border-red-500 focus:border-red-500" : "border-gray-300"
                  }`}
                />
                {errors.password_confirmation && (
                  <span className="text-xs text-red-500 mt-1">{errors.password_confirmation[0]}</span>
                )}
              </div>
            </div>

            <button
              type="submit"
              className="bg-black text-white p-2.5 rounded-md hover:bg-white hover:text-black border border-black transition font-medium mt-2"
            >
              Create An Account
            </button>
          </form>

          <p className="mt-6 text-sm text-center text-gray-600">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-600 font-medium hover:underline">
              Login
            </Link>
          </p>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="hidden lg:flex justify-center items-center w-[50%] bg-gray-50 p-12">
          <img src={loginimg} alt="signup" className="max-w-[80%] h-auto object-contain" />
        </div>
      </div>
    </section>
  );
}

export default signUp;