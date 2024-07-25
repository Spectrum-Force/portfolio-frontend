import { logoo, } from "../assets";
import K from "../constants";
import {  NavLink, useNavigate } from "react-router-dom";
import { apiLogout } from "../services/auth";
import { toast } from "react-toastify";
import { LogOut } from "lucide-react";

const Sidebar = () => {
const navigate = useNavigate();

const logout = async () => {
  try {
  await  apiLogout();
    toast.success("Logged out successfully");
    navigate("/login");
  } catch (error) {
    toast.error("An error occurred");
  }
}

  return (
    <div className="h-full w-[300px] bg-gradient-to-b from-blue-500 to-blue-900 shadow-2xl flex flex-col px-8 py-12 text-white">
      
      <div className="w-[80px] ml-10 mb-5 text-2xl font-bold">
      
        <img src={logoo} alt="logo" /> Spectrum Portfolio
       
      </div>
      <div className="flex flex-col gap-y-5 mt-5">
        {K.NAVLINKS.map(({ icon, text, link }, index) => (
          <NavLink
            to={link}
            key={index}
            className={({ isActive }) =>
              `flex gap-x-4 items-center hover:bg-blue-600 hover:rounded-md p-2 ${
                isActive ? " text-white" : ""
              }`
            }
            end
          >
            <span className="p-2 rounded-full">
              {icon}
            </span>
            <span>{text}</span>
          </NavLink>
        ))}
      </div>
      <button
        className="flex gap-x-4 items-center hover:bg-blue-600 hover:rounded-md p-2"
        onClick={logout}
      >
        <span className=" text-white p-2 rounded-full">
          <LogOut />
        </span>
        <span>Logout</span>
      </button>
    </div>
  );
};

export default Sidebar;
