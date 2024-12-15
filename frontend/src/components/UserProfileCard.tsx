import React from "react";
import { Link, useLocation } from "react-router-dom";

const UserProfileCard: React.FC = () => {
  const location = useLocation();

  return (
    <div className="bg-white rounded-3xl p-[24px] w-[400px]">
      <div className="flex flex-col items-start p-[10px]">
        <div className="relative">
          <img
            src="/profile-icon.jpg" // Replace with your profile image path
            alt="User Avatar"
            className="w-[120px] h-[120px] rounded-[36px] object-cover object-top"
          />
          <button className="absolute -bottom-1 -right-1 rounded-full hover:shadow">
            <img
              src="/camera.svg" // Replace with your camera icon path
              alt="Camera Icon"
              className="w-[40px] h-[40px]"
            />
          </button>
        </div>
        {/* User Info */}
        <h2 className="mt-4 text-lg font-semibold text-gray-800">John Smith</h2>
        <p className="text-sm text-gray-500">Senior Product Manager</p>
      </div>
      <div className="my-4 border-t border-gray-200"></div>

      <div className="mt-6 p-[10px]">
        <ul className="space-y-2">
          <li>
            <Link
              to="/personal-info"
              className={`block w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition ${
                location.pathname === "/personal-info"
                  ? "text-blue-600 bg-[#F4F8FE]"
                  : "text-gray-800 hover:bg-gray-100"
              }`}
            >
              Personal Information
            </Link>
          </li>
          <li>
            <Link
              to="/financial-info"
              className={`block w-full text-left px-4 py-3 text-sm font-medium rounded-lg transition ${
                location.pathname === "/financial-info"
                  ? "text-blue-600 bg-[#F4F8FE]"
                  : "text-gray-800 hover:bg-gray-100"
              }`}
            >
              Financial Information
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default UserProfileCard;
