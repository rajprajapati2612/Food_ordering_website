// 




import React, { useContext, useState } from "react";
import { MdFastfood } from "react-icons/md";
import { IoMdSearch } from "react-icons/io";
import { FiShoppingBag, FiUser, FiLogOut } from "react-icons/fi";
import { dataContext } from "../context/UserContext";
import { AuthContext } from "../pages/auth.context.jsx";
import { food_items } from "../food";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";

const Nav = () => {
  const {
    input,
    setInput,
    setcate,
    setShowCart,
  } = useContext(dataContext);

  const { user, setUser } = useContext(AuthContext);

  const navigate = useNavigate();

  const [showProfile, setShowProfile] = useState(false);
  const [isLoggingOut, setIsLoggingOut] = useState(false);

  const items = useSelector((state) => state.cart);

  // Search
  const handleSearch = (value) => {
    setInput(value);

    const newList = food_items.filter((item) =>
      item.food_name.toLowerCase().includes(value.toLowerCase())
    );

    setcate(newList);
  };

  // Logout
  const handleLogout = async () => {
    try {
      setIsLoggingOut(true);

      const response = await axios.post(
        "http://localhost:8000/user/logout",
        {},
        {
          withCredentials: true,
        }
      );

      if (response.data.success) {
        setUser(null);

        toast.success(
          response.data.message || "Logged out successfully"
        );

        navigate("/login");
      }
    } catch (error) {
      console.log(error);

      toast.error(
        error.response?.data?.message || "Logout failed"
      );
    } finally {
      setIsLoggingOut(false);
    }
  };

  return (
    <nav className="w-full px-4 sm:px-6 lg:px-8 py-4">

      <div className="w-full min-h-[70px] flex items-center justify-between gap-3">

        {/* Logo */}
        <div
          className="w-12 h-12 sm:w-14 sm:h-14 bg-white flex justify-center items-center rounded-xl shadow-md shrink-0"
        >
          <MdFastfood className="w-7 h-7 sm:w-8 sm:h-8 text-green-500" />
        </div>

        {/* Search */}
        <form
          className="flex-1 max-w-xl h-12 sm:h-14 bg-white items-center px-3 sm:px-5 gap-2 sm:gap-3 rounded-xl shadow-md flex"
          onSubmit={(e) => e.preventDefault()}
        >
          <IoMdSearch className="text-green-500 w-5 h-5 sm:w-6 sm:h-6 shrink-0" />

          <input
            type="text"
            placeholder="Search food..."
            className="w-full outline-none h-full text-sm sm:text-base"
            onChange={(e) => handleSearch(e.target.value)}
            value={input}
          />
        </form>

        {/* Right Section */}
        <div className="flex items-center gap-2 sm:gap-4">

          {/* User */}
          <div className="relative">

            <button
              type="button"
              onClick={() => setShowProfile(!showProfile)}
              className="h-12 sm:h-14 px-2 sm:px-4 bg-white rounded-xl shadow-md flex items-center gap-2 hover:bg-green-50 transition"
            >

              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-full bg-green-100 flex items-center justify-center">
                <FiUser className="text-green-600" />
              </div>

              {/* Hide name on very small screens */}
              <span className="hidden sm:block max-w-[120px] truncate text-sm font-semibold text-gray-700">
                {user?.username || "User"}
              </span>

            </button>

            {/* Profile Dropdown */}
            {showProfile && (
              <div className="absolute right-0 top-[calc(100%+8px)] w-52 bg-white rounded-xl shadow-xl border border-gray-100 z-50 overflow-hidden">

                {/* User Info */}
                <div className="px-4 py-3 border-b bg-green-50">

                  <p className="font-semibold text-gray-800 truncate">
                    {user?.username || "User"}
                  </p>

                  <p className="text-xs text-gray-500 truncate mt-1">
                    {user?.email}
                  </p>

                </div>

                {/* Profile */}
                <button
                  type="button"
                  onClick={() => {
                    setShowProfile(false);
                    navigate("/profile");
                  }}
                  className="w-full px-4 py-3 flex items-center gap-3 text-left hover:bg-gray-100 transition"
                >
                  <FiUser className="text-green-500" />
                  <span>Profile</span>
                </button>

                {/* Logout */}
                <button
                  type="button"
                  onClick={handleLogout}
                  disabled={isLoggingOut}
                  className="w-full px-4 py-3 flex items-center gap-3 text-left text-red-500 hover:bg-red-50 transition"
                >
                  <FiLogOut />

                  <span>
                    {isLoggingOut ? "Logging out..." : "Logout"}
                  </span>
                </button>

              </div>
            )}

          </div>

          {/* Cart */}
          <button
            type="button"
            onClick={() => setShowCart(true)}
            className="w-12 h-12 sm:w-14 sm:h-14 bg-white flex justify-center items-center rounded-xl shadow-md relative cursor-pointer hover:bg-green-50 transition"
          >

            {/* Cart Count */}
            {items.length > 0 && (
              <span className="absolute -top-1 -right-1 bg-green-500 text-white text-xs font-bold min-w-5 h-5 px-1 flex justify-center items-center rounded-full">
                {items.length}
              </span>
            )}

            <FiShoppingBag className="w-6 h-6 sm:w-7 sm:h-7 text-green-500" />

          </button>

        </div>

      </div>

    </nav>
  );
};

export default Nav;