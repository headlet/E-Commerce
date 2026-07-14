import { FaGoogle } from "react-icons/fa";
import { Link, useNavigate } from "react-router"; // Use React Router for page transitions
import loginimg from "../../../../assets/login.png";
import logo from "../../../../assets/logo.png";
import { login } from "../../../../api/auth";
import { useState } from "react";
import { Title } from "react-head";

// FIX 1: Capitalized component name to follow React standards
function LogIn() {
  const navigate = useNavigate();

  const [LoginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({});
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setErrors({});

    try {
      const response = await login(LoginForm);

      if (response.data && response.data.access_token) {
        const { access_token, user } = response.data;
        localStorage.setItem("token", access_token);
        localStorage.setItem("user", JSON.stringify(user));
        setIsSuccess(true);
        setMessage(response.data.message || "Logged in successfully!");

        window.location.href = "/profile";
      }
    } catch (error) {
      setIsSuccess(false);

      // FIX 2: Safeguard against empty or unexpected API error formats using || {}
      if (error.response && error.response.status === 422) {
        setErrors(error.response.data.errors || {});
        setMessage("Please resolve the input validation errors listed below.");
      } else {
        // Handle incorrect credentials (401) or other server errors gracefully
        setErrors({});
        setMessage(
          error.response?.data?.message || "Invalid email or password.",
        );
      }
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (errors && errors[name]) {
      setErrors((prevErrors) => ({ ...prevErrors, [name]: null }));
    }
  };

  return (
    <section className="flex flex-col items-center justify-center w-full p-4 gap-4 max-w-7xl mx-auto">
      <Title>Login | SpeedMart</Title>

      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 w-full bg-white rounded-lg p-5 shadow-sm border border-gray-100">
        Home / pages /{" "}
        <span className="text-md font-semibold text-black">Login</span>
      </div>

      {/* Main Container */}
      <div className="flex flex-col lg:flex-row justify-center items-stretch shadow-lg bg-white rounded-xl overflow-hidden w-full border border-gray-100">
        {/* LEFT SIDE - FORM */}
        <div className="w-full lg:w-[50%] flex flex-col justify-center items-center px-4 sm:px-8 md:px-12 py-10">
          <img src={logo} alt="logo" className="h-12 mb-4 object-contain" />

          <h2 className="text-[#1ABA1A] text-3xl font-semibold mb-1">
            Welcome Back
          </h2>
          <p className="text-gray-500 mb-6 text-sm sm:text-base">
            Login To Account
          </p>

          {/* Google Login */}
          <div className="flex items-center gap-2 border px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-50 transition mb-4">
            <p className="text-sm font-medium">Login with Google</p>
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
            {/* Email Field */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">
                Email Address
              </label>
              <input
                type="email"
                name="email"
                value={LoginForm.email}
                onChange={handleChange}
                className={`border p-2.5 rounded-md outline-none focus:border-black transition text-sm ${
                  errors?.email
                    ? "border-red-500 focus:border-red-500"
                    : "border-gray-300"
                }`}
              />
              {/* FIX 3: Safe optional chaining checks */}
              {errors?.email && errors.email[0] && (
                <span className="text-xs text-red-500 mt-1">
                  {errors.email[0]}
                </span>
              )}
            </div>

            {/* Password Field */}
            <div className="flex flex-col gap-1">
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                name="password"
                value={LoginForm.password}
                onChange={handleChange}
                className={`border p-2.5 rounded-md outline-none focus:border-black transition text-sm ${
                  errors?.password
                    ? "border-red-500 focus:border-red-500"
                    : "border-gray-300"
                }`}
              />
              {/* FIX 3: Safe optional chaining checks */}
              {errors?.password && errors.password[0] && (
                <span className="text-xs text-red-500 mt-1">
                  {errors.password[0]}
                </span>
              )}
            </div>

            <button
              type="submit"
              className="bg-black text-white p-2.5 rounded-md hover:bg-white hover:text-black border border-black transition font-medium mt-2"
            >
              Login
            </button>
          </form>

          <p className="mt-6 text-sm text-center text-gray-600">
            Don't have an account?{" "}
            <Link
              to="/signup"
              className="text-blue-600 font-medium hover:underline"
            >
              SignUp
            </Link>
          </p>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="hidden lg:flex justify-center items-center w-[50%] bg-gray-50 p-12">
          <img
            src={loginimg}
            alt="login"
            className="max-w-[80%] h-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
}

export default LogIn;