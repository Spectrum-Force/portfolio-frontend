import { logoo, } from "../assets";
import K from "../constants";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div className="h-full w-[300px] bg-gradient-to-b from-blue-500 to-blue-900 shadow-2xl flex flex-col px-8 py-12 text-white">
      
      <div className="w-[80px] ml-10 mb-5 text-2xl font-bold">
      
        <img src={logoo} alt="logo" /> Spectrum Portfolio
       
      </div>
      <div className="flex flex-col gap-y-5 mt-5">
        {K.NAVLINKS.map(({ icon, text, link }, index) => (
          <Link
            to={link}
            key={index}
            className="flex gap-x-4 items-center hover:bg-blue-600 hover:rounded-md p-2"
          >
            <span className="p-2 rounded-full">
              {icon}
            </span>
            <span>{text}</span>
          </Link>
        ))}
      </div>
      <button className="focus:outline-none mt-auto">
        {/* Uncomment and customize this section if you have a logout button or additional footer items */}
        {/* <div className="flex items-center mt-5 gap-7">
          <LogOut className="bg-slate-500 rounded-full w-10 text-white" />
          <span className="hover:bg-blue-600 hover:rounded-md p-2">Logout</span>
        </div> */}
      </button>
    </div>
  );
};

export default Sidebar;
