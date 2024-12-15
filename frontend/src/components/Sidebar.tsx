import React from "react";
import { Link } from "react-router-dom";

const Sidebar: React.FC = () => {
  return (
    <div className="h-screen px-[15px] py-[20px] bg-white text-black flex flex-col justify-center items-center">
      <div className="p-4 flex items-center justify-center">
        <Link to="/">
          <img src="/logo.png" alt="Logo Icon" className="w-[45px] h-[45px]" />
        </Link>
      </div>

      <nav className="flex-1 mt-7">
        <ul className="flex flex-col gap-[24px]">
          <li>
            <Link to="/dashboard">
              <img
                src="/dashboard.svg"
                alt="Dashboard Icon"
                className="w-[48px] h-[48px] hover:scale-110 transition-transform"
              />
            </Link>
          </li>
          <li>
            <Link to="/employees">
              <img
                src="/research.svg"
                alt="Employees Icon"
                className="w-[48px] h-[40px] hover:scale-110 transition-transform"
              />
            </Link>
          </li>
          <li>
            <Link to="/reports">
              <img
                src="/credit-report.svg"
                alt="Reports Icon"
                className="w-[48px] h-[40px] hover:scale-110 transition-transform"
              />
            </Link>
          </li>
          <li>
            <Link to="/teams">
              <img
                src="/teams.svg"
                alt="Teams Icon"
                className="w-[48px] h-[40px] hover:scale-110 transition-transform"
              />
            </Link>
          </li>
          <li>
            <Link to="/storage">
              <img
                src="/box.svg"
                alt="Storage Icon"
                className="w-[48px] h-[40px] hover:scale-110 transition-transform"
              />
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
