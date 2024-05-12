import React from "react";
import { FaLaptopCode } from "react-icons/fa";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { IoCreateOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";

const About = () => {
  return (
    <div className="w-[90vw] md:w-[70vw] h-fit mt-5 pt-7 flex flex-col items-center justify-center bg-[#1e1e1f] rounded-[20px] border-[0.5px] border-[#787676]">
      {/* Heading */}
      <div className=" w-[90%] h-[90px] flex flex-col items-start justify-center mb-5">
        <p className=" text-3xl text-white font-extrabold">About</p>
        <div className=" w-[80px] h-[5px] bg-[#e9f024] mt-2 ml-[3px] rounded-sm"></div>
      </div>

      {/* ----------- */}
      {/* About descv */}
      <div className=" w-[90%] h-fit mt-6 mb-6">
        <p className="flex items-start justify-center pl-0 text-start mb-4">
          I am a Budge Budge Institute of Technology student affiliated with
          Maulana Abul Kalam Azad University of Technology, Kolkata. I enjoy
          learning new stuff to add to my skills. I like to reach out to people
          with the same interests and hobbies.
        </p>
        <p className="flex items-start justify-center pl-0 text-start">
          I am a positive, enthusiastic and competent Web Developer and UI/UX
          Designer who, over the years, has built up a diverse range of skills,
          qualities and attributes that guarantee I will perform highly in this
          role. I have extensive experience working both alone and as part of a
          team on often time-sensitive.
        </p>
      </div>

      {/* ------- */}
      {/* What am i Doing */}
      <div className="w-[90%] h-fit mt-6 mb-6">
        <p className="text-2xl p-5 text-white font-extrabold flex items-start">
          What I&apos;m Doing
        </p>
        {/* ------Div top 1---------- */}
        <div className="w-[100%] h-fit flex flex-row items-center justify-between mt-5 pt-5">
          <div className="w-[48%] h-[180px] bg-[#2b2b32] flex flex-row items-center justify-center border-[0.5px] border-t-[0.5px] border-l-[0.5px] rounded-[15px] border-[#787676]">
            {/* icon */}
            <div className="flex items-center justify-center w-[100px] h-[100px]">
              {/* icon code here */}
              <FaLaptopCode className="text-[40px] text-[#e9f024]" />
            </div>
            {/* label And values */}
            <div className=" flex flex-col items-start justify-between">
              <p className=" text-[20px] text-white font-extrabold">
                Web Development
              </p>
              <p className=" text-[16px] text-white text-start">
                High-quality development of sites at the professional level.
              </p>
            </div>
          </div>
          {/* ---------- */}
          <div className="w-[48%] h-[180px]  bg-[#2b2b32] flex flex-row items-center justify-center border-[0.5px] border-t-[0.5px] border-l-[0.5px] rounded-[15px] border-[#787676]">
            {/* icon */}
            <div className="flex items-center justify-center w-[100px] h-[100px]">
              {/* icon code here */}

              <MdOutlinePhoneAndroid className="text-[40px] text-[#e9f024]" />
            </div>
            {/* label And values */}
            <div className=" flex flex-col items-start justify-between">
              <p className=" text-[20px] text-white font-extrabold">
                Mobile Apps
              </p>
              <p className=" text-[16px] text-white text-start">
                Professional development of applications for iOS and Android.
              </p>
            </div>
          </div>
        </div>

        {/* ---------Div mid 1 ---------*/}
        <div className="w-[100%] h-fit flex flex-row items-center justify-between mt-5 pt-5">
          <div className="w-[48%] h-[180px] bg-[#2b2b32] flex flex-row items-center justify-center border-[0.5px] border-t-[0.5px] border-l-[0.5px] rounded-[15px] border-[#787676]">
            {/* icon */}
            <div className="flex items-center justify-center w-[100px] h-[100px]">
              {/* icon code here */}
              <IoCreateOutline className="text-[40px] text-[#e9f024]" />
            </div>
            {/* label And values */}
            <div className=" flex flex-col items-start justify-between">
              <p className=" text-[20px] text-white font-extrabold">
                Web Design
              </p>
              <p className=" text-[16px] text-white text-start">
                The most modern and high-quality design made at a professional
                level.
              </p>
            </div>
          </div>
          {/* ---------- */}
          <div className="w-[48%] h-[180px] bg-[#2b2b32] flex flex-row items-center justify-center border-[0.5px] border-t-[0.5px] border-l-[0.5px] rounded-[15px] border-[#787676]">
            {/* icon */}
            <div className="flex items-center justify-center w-[100px] h-[100px]">
              {/* icon code here */}

              <IoSearch className="text-[40px] text-[#e9f024]" />
            </div>
            {/* label And values */}
            <div className=" flex flex-col items-start justify-between">
              <p className=" text-[20px] text-white font-extrabold">SEO</p>
              <p className=" text-[16px] text-white text-start">
                Provide the best SEO who help to rank website.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
