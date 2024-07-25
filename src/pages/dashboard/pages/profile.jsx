import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Pencil } from 'lucide-react';
import {  b, smile, } from '../../../assets';


const ProfilePage = () => {
  const navigate = useNavigate();


  
  return (
    <div className="h-full bg-gray-100 flex flex-col items-center">
      <div className="w-full bg-white shadow-md">
        <div className="relative ">
          <img src={b} alt="Profile background" className="w-full h-64 object-cover" />
          <div className="absolute top-4 right-4">
            <Pencil className="w-6 h-6 cursor-pointer text-white" onClick={() => navigate("/dashboard/profile/edit")} />
          </div>
          <div className="absolute top-44 left-8 flex items-center">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-4 border-white">
              <img src={smile} alt="profile" className="w-full h-full object-cover" />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity cursor-pointer" onClick={() => navigate("/dashboard/profile/edit")}>
                <Pencil className="w-6 h-6 text-white" />
              </div>
            </div>
          </div>
          <div className="absolute top-72 left-44">
            <h1 className="text-4xl font-bold">Your Name</h1>
            <p className="mt-2 text-lg">Front-end Developer</p>
            <p className="mt-1 text-sm text-gray-600">Accra, Greater Accra Region, Ghana · </p>
            <p className="mt-1 text-sm text-gray-600">University of Ghana</p>
            <div className="flex gap-4 mt-2 text-lg">
              
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg" onClick={() => navigate("/dashboard/profile/add")}>Add profile section</button>
              <button className="bg-gray-300 px-4 py-2 rounded-lg" onClick={() => navigate("/dashboard/profile/edit")}>Resume</button>
              <button className="bg-gray-300 px-4 py-2 rounded-lg" onClick={() => navigate("/dashboard/profile/https://www.facebook.com")}>More</button>
            </div>
            <div className="mt-4 bg-gray-200 p-4 rounded-lg">
              <p className="font-semibold">About</p>
              <Pencil className="w-4 h-4 cursor-pointer text-gray-600 ml-2" onClick={() => navigate("/dashboard/profile/edit")} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
