import React from "react";

import { FaCircle } from "react-icons/fa";

const Timeline = () => {
  return (
    <div className=" gap-5">
      <div className=" relative w-[80%] md:w-[45%] min-h-[120px] p-2 flex items-center justify-center bg-[#282829] m-5 left-0 border-t-[0.5px] border-l-[0.5px] rounded-[10px]">
        <FaCircle className=" absolute w-[40px] text-[30px] text-[#f0ff46] left-[-40px] md:left-[100%] top-[36px] z-10 rounded-[50%]" />
        <div className=" text-box flex flex-col items-center justify-between">
          <h2 className=" font-bold text-white">Budge Budge Institute of Technology</h2>
          <p className=" text-[#f0ff46] text-[14px]">2021 - 2025</p>
          <p className=" text-[14px] text-white">
            Bachelor In Technology (Information Technology)
          </p>
          {/* <span className=" h-0 w-0 absolute top-[37px] z-10 border-t-[15px] border-b-[15px] border-l-[15px] border-l-[#434242] right-[-15px] border-transparent"></span> */}
        </div>
      </div>
      {/* ------------ */}
      <div className=" relative w-[80%] md:w-[45%] min-h-[120px] p-2 flex items-center justify-center bg-[#282829] m-5 left-0 md:left-[50%] border-t-[0.5px] border-l-[0.5px] rounded-[10px]">
        <FaCircle className=" absolute w-[40px] text-[30px] text-[#f0ff46] left-[-40px] top-[36px] z-10 rounded-[50%]" />
        <div className=" text-box flex flex-col items-center justify-between">
          <h2 className=" font-bold text-white">P.N. College Parsa, Saran</h2>
          <p className=" text-[#f0ff46] text-[14px]">2017 - 2019</p>
          <p className=" text-[14px] text-white">Physics, Chemistry, Maths</p>
          {/* <span className=" h-0 w-0 absolute top-[37px] z-10 border-t-[15px] border-b-[15px] border-l-[15px] border-l-[#434242] right-[-15px] border-transparent"></span> */}
        </div>
      </div>
      {/* ----After */}
      <div className=" w-[5px] h-[100%] bg-[#282829] absolute top-0 md:left-[50%] ml-[-3px] border-[0.1px] border-[#aeb655] rounded-[2px]"></div>
      {/* -------- */}
      <div className=" relative w-[80%] md:w-[45%] min-h-[120px] p-2 flex items-center justify-center bg-[#282829] m-5 left-0 border-t-[0.5px] border-l-[0.5px] rounded-[10px] ">
        <FaCircle className=" absolute w-[40px] text-[30px] text-[#f0ff46] left-[-40px] md:left-[100%] top-[36px] z-10 rounded-[50%]" />
        <div className=" text-box flex flex-col items-center justify-between">
          <h2 className=" font-bold text-white">High School Parsa, Saran</h2>
          <p className=" text-[#f0ff46] text-[14px]">2015 - 2017</p>
          {/* <p className=" text-[14px]">Bachelor In Technology (Information Technology)</p> */}
          {/* <span className=" h-0 w-0 absolute top-[37px] z-10 border-t-[15px] border-b-[15px] border-l-[15px] border-l-[#434242] right-[-15px] border-transparent"></span> */}
        </div>
      </div>
    </div>
  );
};

export default Timeline;
