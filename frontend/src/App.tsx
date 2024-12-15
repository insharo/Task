import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Profile from "./pages/Profile";
import FinancialInformation from "./pages/FinancialInformation";
import Header from "./components/Header";
import UserProfileCard from "./components/UserProfileCard";

const App: React.FC = () => {
  return (
    <Router>
      <div className="flex">
        {/* Sidebar */}
        <Sidebar />
        {/* Main Content */}
        <div className="flex-1 bg-gray-100">
          <Header />
          <div className="flex justify-start items-start gap-[24px] p-[24px]">
            <UserProfileCard />
            <div className="w-full">
              <Routes>
                <Route path="/personal-info" element={<Profile />} />
                <Route
                  path="/financial-info"
                  element={<FinancialInformation />}
                />
              </Routes>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
};

export default App;
