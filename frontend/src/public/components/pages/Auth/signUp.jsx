import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router";
import loginimg from "../../../../assets/login.png";
import logo from "../../../../assets/logo.png";

function signUp() {
  return (
    <section className="flex flex-col items-center justify-center w-full p-4 gap-4">
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
          <form className="flex flex-col w-full sm:w-[80%] md:w-[60%] gap-4">
            <div className="w-fit flex gap-2">
              <div className="flex flex-col">
                <label>First Name</label>
                <input
                  type="text"
                  className="border p-1 rounded-md outline-none"
                />
              </div>

              <div className="flex flex-col">
                <label>Last Name</label>
                <input
                  type="text"
                  className="border p-1 rounded-md outline-none"
                />
              </div>
            </div>

            <div className="w-fit flex gap-2">
              <div className="flex flex-col">
                <label>Username</label>
                <input
                  type="text"
                  className="border p-1 rounded-md outline-none"
                />
              </div>

              <div className="flex flex-col">
                <label>Phone Number</label>
                <input
                  type="tel"
                  className="border p-1 rounded-md outline-none"
                />
              </div>
            </div>

            <div className="flex flex-col">
              <label>Email Address</label>
              <input
                type="email"
                className="border p-2 rounded-md outline-none"
              />
            </div>

            <div className="flex flex-col">
              <label>Gender</label>
              <select id="gender" name="gender"  className="border p-2 rounded-md outline-none">
                <option value="" disabled selected>
                  Select gender
                </option>
                <option value="male">Male</option>
                <option value="female">Female</option>
                <option value="other">Other</option>
              </select>
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
