import { NavLink } from "react-router";
import avatar from "../../../assets/avatars.jpg";
import { useState, useEffect } from "react";
import { Title } from "react-head";
import api from "../../../api/axios";
import { useAuth } from "../../../api/authContext.jsx";
import { useNavigate } from "react-router";

function Profile() {
  const { user, setUser, logoutUser } = useAuth();
  const navigate = useNavigate();

  const handleSignOut = async () => {
    console.log('running');
    // 1. Trigger the unified logout function from context
    await logoutUser();

    // 2. Safely bounce user back to login screen once state is cleared
    navigate("/login");
  };

  const [formData, setFormData] = useState({
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
  
  // State to capture validation error arrays returned from Laravel
  const [errors, setErrors] = useState({});

  useEffect(() => {
    if (user) {
      setFormData({
        first_name: user.first_name || "",
        last_name: user.last_name || "",
        email: user.email || "",
        username: user.username || "",
        dob: user.dob || "",
        phone: user.phone || "",
        gender: user.gender || "",
        password: "",
        password_confirmation: "",
        status: user.status || "active",
      });
    }
  }, [user]);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    
    // Clear the individual field error message as the user updates the text
    if (errors[e.target.name]) {
      setErrors({ ...errors, [e.target.name]: null });
    }
  };

  const handleUpdate = async (e) => {
    e.preventDefault();
    setMessage("");
    setErrors({}); // Clear old validations on every new submission attempt

    try {
      // Fix: Use template literals backticks to evaluate the user id variable properly
      const response = await api.put(`/user/${user.id}`, formData);

      // Update our central auth provider context tracking state wrapper
      setUser(response.data.user);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      setIsSuccess(true);
      setMessage("Profile updated successfully!");
    } catch (error) {
      setIsSuccess(false);
      
      if (error.response && error.response.status === 422) {
        // Validation failed on Laravel side -> set the field-specific error dictionary
        setErrors(error.response.data.errors);
        setMessage("Please resolve the input validation errors listed below.");
      } else {
        // Fallback for general exceptions or network issues
        setMessage(error.response?.data?.message || "Failed to update profile.");
      }
    }
  };

  return (
    <section className="flex flex-col items-center justify-center w-full p-4 gap-5">
      <Title>Profile | SpeedMart</Title>

      <div className="text-sm text-gray-500 w-full bg-white rounded-lg p-5">
        Home / pages /{" "}
        <span className="text-md font-semibold text-black">Profile</span>
      </div>

      <div className="bg-white rounded-lg p-6 w-full flex flex-col lg:flex-row justify-evenly gap-4">
        {/* Left Card: Summary Sidebar View */}
        <div className="flex flex-col gap-4 justify-center items-center bg-gray-200 p-6 rounded-lg lg:w-[22%] w-full">
          <img
            src={avatar}
            alt="Profile Avatar"
            className="rounded-full bg-gray-600 lg:h-[150px] lg:w-[150px] w-[120px] h-[120px] object-cover"
          />
          <h2 className="text-xl font-semibold text-center">
            {user ? `${user.first_name} ${user.last_name}` : "Loading..."}
          </h2>
          <p className="text-sm text-gray-600 truncate max-w-full">
            {user?.email || "No Email Provided"}
          </p>

          <div className="flex flex-col gap-2 w-full mt-4">
            <NavLink
              to="/profile"
              className={({ isActive }) =>
                `p-3 rounded-md text-center text-sm font-medium transition ${
                  isActive
                    ? "bg-[#1ABA1A] text-white"
                    : "bg-gray-100 text-black hover:bg-green-100"
                }`
              }
            >
              Account Info
            </NavLink>
            <NavLink
              to="/orders"
              className={({ isActive }) =>
                `p-3 rounded-md text-center text-sm font-medium transition ${
                  isActive
                    ? "bg-[#1ABA1A] text-white"
                    : "bg-gray-100 text-black hover:bg-green-100"
                }`
              }
            >
              My order
            </NavLink>
            <NavLink
              to="/address"
              className={({ isActive }) =>
                `p-3 rounded-md text-center text-sm font-medium transition ${
                  isActive
                    ? "bg-[#1ABA1A] text-white"
                    : "bg-gray-100 text-black hover:bg-green-100"
                }`
              }
            >
              My address
            </NavLink>
          </div>
        </div>

        {/* Right Card: Editable Form Inputs */}
        <div className="lg:w-[75%] w-full p-4 lg:p-8 flex flex-col gap-4">
          <h2 className="text-2xl font-semibold">Account Info</h2>

          {/* Status feedback block banner notifications */}
          {message && (
            <div
              className={`p-4 rounded-md text-sm font-medium ${
                isSuccess
                  ? "bg-green-50 text-green-800 border border-green-200"
                  : "bg-red-50 text-red-800 border border-red-200"
              }`}
            >
              {message}
            </div>
          )}
          <button
            onClick={handleSignOut}
            className="w-full bg-red-600 hover:bg-red-700 text-white font-medium text-sm py-2 px-4 rounded transition duration-200"
          >
            Log Out
          </button>
          <form onSubmit={handleUpdate} className="flex flex-col gap-4 w-full">
            {/* First Name & Last Name Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  First Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleChange}
                  
                  className={`w-full appearance-none px-4 py-2.5 border rounded-md bg-white focus:outline-none focus:ring-1 text-gray-700 ${
                    errors.first_name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-green-500'
                  }`}
                />
                {errors.first_name && <p className="text-xs text-red-500 mt-1 font-medium">{errors.first_name[0]}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Last Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleChange}
                  
                  className={`w-full appearance-none px-4 py-2.5 border rounded-md bg-white focus:outline-none focus:ring-1 text-gray-700 ${
                    errors.last_name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-green-500'
                  }`}
                />
                {errors.last_name && <p className="text-xs text-red-500 mt-1 font-medium">{errors.last_name[0]}</p>}
              </div>
            </div>

            {/* Username Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Username <span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                name="username"
                value={formData.username}
                onChange={handleChange}
                
                className={`w-full appearance-none px-4 py-2.5 border rounded-md bg-white focus:outline-none focus:ring-1 text-gray-700 ${
                  errors.username ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-green-500'
                }`}
              />
              {errors.username && <p className="text-xs text-red-500 mt-1 font-medium">{errors.username[0]}</p>}
            </div>

            {/* Email Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Email <span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                
                className={`w-full appearance-none px-4 py-2.5 border rounded-md bg-white focus:outline-none focus:ring-1 text-gray-700 ${
                  errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-green-500'
                }`}
              />
              {errors.email && <p className="text-xs text-red-500 mt-1 font-medium">{errors.email[0]}</p>}
            </div>

            {/* Phone Field */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Phone Number <span className="text-gray-400">(optional)</span>
              </label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className={`w-full appearance-none px-4 py-2.5 border rounded-md bg-white focus:outline-none focus:ring-1 text-gray-700 ${
                  errors.phone ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-green-500'
                }`}
              />
              {errors.phone && <p className="text-xs text-red-500 mt-1 font-medium">{errors.phone[0]}</p>}
            </div>

            {/* DOB & Gender Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Date of Birth
                </label>
                <input
                  type="date"
                  name="dob"
                  value={formData.dob}
                  onChange={handleChange}
                  className={`w-full appearance-none px-4 py-2.5 border rounded-md bg-white focus:outline-none focus:ring-1 text-gray-700 ${
                    errors.dob ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-green-500'
                  }`}
                />
                {errors.dob && <p className="text-xs text-red-500 mt-1 font-medium">{errors.dob[0]}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  Gender
                </label>
                <select
                  name="gender"
                  value={formData.gender}
                  onChange={handleChange}
                  className={`w-full px-4 py-2.5 border rounded-md bg-white focus:outline-none focus:ring-1 text-gray-700 ${
                    errors.gender ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-green-500'
                  }`}
                >
                  <option value="">Select Gender</option>
                  <option value="male">Male</option>
                  <option value="female">Female</option>
                  <option value="other">Other</option>
                </select>
                {errors.gender && <p className="text-xs text-red-500 mt-1 font-medium">{errors.gender[0]}</p>}
              </div>
            </div>

            {/* Save Button */}
            <div className="pt-4">
              <button
                type="submit"
                className="w-auto bg-[#13b41d] hover:bg-green-600 text-white font-semibold text-xs tracking-wider uppercase py-3.5 px-6 rounded-md transition duration-200 shadow-sm"
              >
                SAVE CHANGES
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Profile;