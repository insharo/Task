import React from "react";

const Header: React.FC = () => {
  return (
    <>
      <div className="flex items-center justify-between px-[40px] py-[24px]">
        <div className="space-y-[8px]">
          <span className="text-4xl font-medium">John Smith Profile</span>

          <div className="flex items-center space-x-2 text-sm text-gray-500">
            <span>Dashboard</span>
            <img
              src="/arrow-icon.svg"
              alt="Notification"
              className="w-[12px] h-[12px]"
            />
            <span>HR manage</span>
            <img
              src="/arrow-icon.svg"
              alt="Notification"
              className="w-[12px] h-[12px]"
            />
            <span>Employees</span>
            <img
              src="/arrow-icon.svg"
              alt="Notification"
              className="w-[12px] h-[12px]"
            />
            <span className="text-[#003FAD] font-semibold">
              John Smith Profile
            </span>
          </div>
        </div>

        <div className="flex items-center gap-[30px]">
          <div className="">
            <img
              src="/notification-icon.svg"
              alt="Notification"
              className="w-[45px] h-[45px]"
            />
          </div>

          <div>
            <img
              src="/message-icon.svg"
              alt="Messages"
              className="w-[45px] h-[45px]"
            />
          </div>

          <div>
            <img
              src="/settings-icon.svg"
              alt="Settings"
              className="w-[45px] h-[45px]"
            />
          </div>

          <div className="flex items-center space-x-2">
            <img
              src="/profile-icon.jpg"
              alt="User Avatar"
              className="w-8 h-8 rounded-[13px] object-cover object-top"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
