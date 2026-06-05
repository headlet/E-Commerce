import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router";
import loginimg from "../../../../assets/login.png";
import logo from "../../../../assets/logo.png";

function signUp() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-gray-50 w-full">
      <div className=" flex justify-center shadow-lg bg-white rounded-xl overflow-hidden">
        <img
          src={loginimg}
          alt="login"
          className="w-[60%] h-auto hidden md:flex"
        />

        {/* LEFT SIDE - FORM */}
        <div className="w-full lg:w-[40%] flex flex-col justify-center items-center p-8">
          <img src={logo} alt="logo" className="h-12 mb-4" />

          <h2 className="text-2xl font-semibold mb-6">SignUp To Account</h2>

          {/* Google Login */}
          <div className="flex items-center gap-2 border px-4 py-2 rounded-lg cursor-pointer hover:bg-gray-100 mb-4">
            <p>SignUp with Google</p>
            <FaGoogle size={20} className="text-amber-500" />
          </div>

          <p className="mb-4 text-gray-500">Or</p>

          {/* FORM */}
          <form className="flex flex-col w-full gap-4">
            <div className="flex flex-col">
              <label>Email Address</label>
              <input
                type="email"
                className="border p-2 rounded-md outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label>Full Name</label>
              <input
                type="text"
                className="border p-2 rounded-md outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label>Password</label>
              <input
                type="password"
                className="border p-2 rounded-md outline-none"
              />
            </div>

            <button
              type="submit"
              className="bg-black text-white p-2 rounded-md hover:bg-white hover:text-black border transition"
            >
              Create An Account
            </button>
          </form>

          <p className="mt-4 text-sm">
           Already have an accout? 
            <Link to="/login" className="text-blue-500 hover:underline">
              Login
            </Link>
          </p>
        </div>
      </div>
    </section>
  );
}

export default signUp;
