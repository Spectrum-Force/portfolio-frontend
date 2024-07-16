import { LogOut } from "lucide-react";
import { synergy } from "../assets";
import K from "../constants";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <div className="h-full w-[300px] bg-primary shadow-2xl flex flex-col px-8 py-12 ">
            <div className=" w-[150px] ml-10 mb-5">
                <img src={synergy} alt="logo" />
            </div>
            <div className="flex flex-col gap-y-5 mt-5">
                {
                    K.NAVLINKS.map(({ icon, text, link }, index) => (
                        <Link
                            to={link}
                            key={index}
                            className="flex gap-x-4 items-center hover:bg-secondary hover:text-primary hover:rounded-md">
                            <span className="bg-slate-500 text-white p-2 rounded-full">
                                {icon}
                            </span>
                            <span>{text}</span>
                        </Link>
                    )
                    )
                }
            </div>
            <button className="focus:outline-none">
                <div className="flex items-center mt-5 gap-7">
                    <LogOut className="bg-slate-500 rounded-full w-10 text-white " />
                    <span className="hover:bg-secondary hover:text-primary hover:rounded-md p-2">Logout</span>
                </div>
            </button>

        </div>
    )
};

export default Sidebar