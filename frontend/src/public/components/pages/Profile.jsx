import { NavLink } from "react-router";
import avatar from "../../../assets/avatars.jpg";

function Profile() {
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
          <form action="" className="flex flex-col gap-4 ">
            <div className="flex w-full">
              <div>
                <label>
                  First Name <span>*</span>
                </label>
                <input type="text" name="firstname" />
              </div>
              <div>
                <label>
                  Last Name <span>*</span>
                </label>
                <input type="text" name="lastname" />
              </div>
            </div>

            <div>
              <label>
                Email Address <span>*</span>
              </label>
              <input type="email" name="email" />
            </div>

            <div>
              <label>
                Phone Number <span>(Optional)</span>
              </label>
              <input type="tel" name="phone" />
            </div>

            <button type="submit" className="w-fit bg-[#1ABA1A] p-3 text-white rounded-lg">SAVE</button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Profile;
