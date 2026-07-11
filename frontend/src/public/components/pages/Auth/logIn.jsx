import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router";
import loginimg from "../../../../assets/login.png";
import logo from "../../../../assets/logo.png";
import {login} from "../../../../api/auth"
import {useState} from 'react'

function logIn() {
  const [LoginForm, setLoginForm] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(LoginForm);
    try {
      const response = await login(LoginForm);

      console.log(response.data);
    } catch (error) {
      console.log(error.response.data);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setLoginForm((e) => ({
      ...e,
      [name]: value,
    }));
  };
  return (
    <section className="flex flex-col items-center justify-center w-full p-4 gap-5">
      <div className="text-sm text-gray-500 w-full bg-white rounded-lg p-5">
        Home / pages /{" "}
        <span className="text-md font-semibold text-black">Login</span>
      </div>

      <div className="flex flex-col md:flex-row justify-center items-center shadow-lg bg-white rounded-xl overflow-hidden w-full">
        {/* LEFT SIDE */}
        <div className="w-full md:w-[50%] flex flex-col justify-center items-center px-6 md:px-12 py-10">
          <img src={logo} alt="logo" className="h-12 mb-4" />

          <h2 className="text-[#1ABA1A] text-3xl font-semibold">
            Welcome Back
          </h2>

          <p className="text-lg mb-6">Login To Account</p>

          <div className="flex items-center gap-2 border px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-100 mb-4">
            <p>Login with Google</p>
            <FaGoogle size={20} className="text-amber-500" />
          </div>

          <p className="mb-4 text-gray-500">Or</p>

          <form className="flex flex-col w-full sm:w-[80%] md:w-[60%] gap-4" onSubmit={handleSubmit}>
            <div className="flex flex-col">
              <label>Email Address</label>
              <input
                type="email"
                name="email"
                value={LoginForm.email}
                onChange={handleChange}
                className="border p-2 rounded-md outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label>Password</label>
              <input
                type="password"
                name="password"
                value={LoginForm.password}
                onChange={handleChange}
                className="border p-2 rounded-md outline-none"
              />
            </div>

            <button
              type="submit"
              className="bg-black text-white p-2 rounded-md hover:bg-white hover:text-black border transition"
            >
              Login
            </button>
          </form>

          <p className="mt-4 text-sm text-center">
            Don't have an account?{" "}
            <Link to="/signup" className="text-blue-500 hover:underline">
              SignUp
            </Link>
          </p>
        </div>

        {/* RIGHT SIDE IMAGE */}
        <div className="hidden md:flex justify-center items-center w-[50%]">
          <img src={loginimg} alt="login" className="w-[60%]" />
        </div>
      </div>
    </section>
  );
}

export default logIn;
