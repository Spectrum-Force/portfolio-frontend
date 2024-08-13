import React from "react";
import { TypeAnimation } from "react-type-animation";
import PortfolioButton from "./PortfolioButton";
import CvButton from "./CvButton";
const Home = ({name}) => {
  return (
    <div
      className="pt-40 bg-[#555555] text-[#FFFFFF] ml-10 flex flex-col gap-y-10 relative"
      id="home  md:px-16"
    >
     
      <div className="pl-6">
        <h1>Introduction</h1>
      </div>

      <div className="text-[#FFFFFF] text-[40px] pt-8 md:text-6xl flex flex-row justify-between px-5  ">
        <div>
        <h4>
          {" "}
          I am {name}, a <br />
          {/* Accra Based{" "} */}
          <TypeAnimation
            sequence={[
              "Frontend Developer",
              1000,
              "Programmer",
              1000,
              "Tech Enthusiast",
              1000,
            ]}
            wrapper="span"
            speed={50}
            style={{ display: "inline-block" }}
            repeat={Infinity}
          />
        </h4>
        </div>
        <div className="h-[200px] w-[300px]  absolute top-14 right-16">
          <img src={`https://savefiles.org/secure/uploads/15951?shareable_link=328`} alt="" className="rounded-md transition ease-in-out delay-150  hover:-translate-y-1 hover:scale-110  duration-300"/>
        </div>
      </div>
      
      <div className="flex flex-row gap-20">
        <div className="pl-3 pt-6">
          <PortfolioButton />
        </div>
        <div className="pt-2 ">
          <CvButton />
        </div>
      </div>
    </div>
  );
};

export default Home;
