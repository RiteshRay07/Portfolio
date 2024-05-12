import React from "react";
import Timeline from "../components/Timeline";
import Myskills from "../components/Myskills";

const Resume = () => {
  return (
    <div className="w-[90vw] md:w-[70vw] h-fit pb-10 mt-5 pt-7 flex flex-col items-center justify-center bg-[#1e1e1f] rounded-[20px] border-[0.5px] border-[#787676]">
      {/* Heading */}
      <div className=" w-[90%] h-[90px] flex flex-col items-start justify-center mb-5">
        <p className=" text-3xl text-white font-extrabold z-10">Resume</p>
        <div className=" w-[80px] h-[5px] bg-[#e9f024] mt-2 ml-[3px] rounded-sm"></div>
      </div>
      {/* ------------- */}
      {/* Timeline */}
      <p className=" text-xl text-white font-extrabold z-10 mb-8 mt-5">
        Education
      </p>
      <div className="w-[90%] relative mx-[100px] my-auto">
        <Timeline />
      </div>
      {/*   ---------Skill--------- */}
      <div className="w-[90%] h-fit mt-10 mb-10">
        <p className=" text-2xl text-white font-extrabold z-10 mb-8 mt-5 text-start">
          My Skills
        </p>

        <Myskills />
      </div>
    </div>
  );
};

export default Resume;
