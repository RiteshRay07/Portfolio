import React from "react";
import { Link } from "react-router-dom";
import profileImg from "../assets/profileImg.png";
import { IoMailOutline } from "react-icons/io5";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { MdOutlineDateRange } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FaGithub } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { FaLinkedinIn } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";

const Sidebar = () => {
  return (
    <div className=" sticky top-14 w-[25vw] h-fit bg-[#1e1e1f] flex flex-col items-center justify-start mt-5 pt-[60px] border-[0.5px] border-[#444343] rounded-[20px]">
      {/* Top div */}
      <div className=" w-[200px] h-[320px] flex flex-col items-center justify-between">
        {/* Self Avtar  */}
        <Link to="/">
          <div className=" flex flex-row items-center justify-center w-[200px] h-[200px] bg-[#3B3B3B] border-0 rounded-[10%]">
            <img
              src={profileImg}
              alt="profile-Img"
              loading="lazy"
              className="w-[150px] h-[150px] rounded-[10%]"
            />
          </div>
        </Link>

        {/* Name  */}

        <div>
          <p className=" text-white font-extrabold text-3xl">RITESH RAY</p>
        </div>

        {/* Title */}
        <div className=" p-2 bg-[#3B3B3B] border-0 rounded-[15px]">
          <p>MERN Stack Developer</p>
        </div>
      </div>
      {/* ===================================== */}
      {/* Bottom Top Div */}
      <div className=" w-[250px] h-[500px] flex flex-col items-center justify-between mt-7 border-t-[0.5px] border-[#807f7f]">
        {/* ================== */}
        {/* Email Div */}
        <div className=" w-[100%] h-[100px] p-2 mt-8 flex flex-row items-center justify-evenly">
          {/* icon */}
          <div className="w-[50px] h-[50px] bg-[#202022] flex items-center justify-center border-t-[0.5px] border-l-[0.5px] rounded-[10px] border-[#787676]">
            <IoMailOutline className="text-[20px] text-[#e4fa3c]" />
          </div>
          {/* Label and values*/}
          <div className=" flex flex-col items-start justify-center">
            <p className=" text-[12px] text-[#bcbbbb]">EMAIL</p>
            <p className=" overflow-hidden w-[150px]">
              <Link
                to={`mailto:contact.riteshray@gmail.com`}
                className=" text-white overflow-hidden text-[16px] hover:text-white"
              >
                Contact.RiteshRay@gmail.com
              </Link>
            </p>
          </div>
        </div>
        {/* ================= */}
        {/* Phone Div */}
        <div className=" w-[100%] h-[100px] p-2 mt-8 flex flex-row items-center justify-evenly">
          {/* icon */}
          <div className="w-[50px] h-[50px] bg-[#202022] flex items-center justify-center border-t-[0.5px] border-l-[0.5px] rounded-[10px] border-[#787676]">
            <MdOutlinePhoneIphone className="text-[20px] text-[#e4fa3c]" />
          </div>
          {/* Label and values*/}
          <div className=" flex flex-col items-start justify-center">
            <p className=" text-[12px] text-[#bcbbbb]">PHONE</p>
            <p className=" overflow-hidden w-[150px]">
              <Link
                to={`tel:91943000763`}
                className=" text-white overflow-hidden  text-[16px] hover:text-white ml-[-20px]"
              >
                +91 9430007963
              </Link>
            </p>
          </div>
        </div>
        {/* ====================== */}
        {/* BirthDay Div */}
        <div className=" w-[100%] h-[100px] p-2 mt-8 flex flex-row items-center justify-evenly">
          {/* icon */}
          <div className="w-[50px] h-[50px] bg-[#202022] flex items-center justify-center border-t-[0.5px] border-l-[0.5px] rounded-[10px] border-[#787676]">
            <MdOutlineDateRange className="text-[20px] text-[#e4fa3c]" />
          </div>
          {/* Label and values*/}
          <div className=" flex flex-col items-start justify-center">
            <p className=" text-[12px] text-[#bcbbbb]">BIRTHDAY</p>
            <p className=" overflow-hidden w-[150px] text-[16px] font-semibold ml-[-13px]">
              March 28, 2002
            </p>
          </div>
        </div>
        {/* ======================== */}
        {/* Location Div */}
        <div className=" w-[100%] h-[100px] p-2 mt-8 flex flex-row items-center justify-evenly">
          {/* icon */}
          <div className="w-[50px] h-[50px] bg-[#202022] flex items-center justify-center border-t-[0.5px] border-l-[0.5px] rounded-[10px] border-[#787676]">
            <IoLocationOutline className="text-[20px] text-[#e4fa3c]" />
          </div>
          {/* Label and values*/}
          <div className=" flex flex-col items-start justify-center">
            <p className=" text-[12px] text-[#bcbbbb]">LOCATION</p>
            <p className=" overflow-hidden w-[150px] text-[16px] font-semibold ml-[-20px]">
              Kolkata, INDIA
            </p>
          </div>
        </div>
        {/* ================ */}
        {/* Bottom - Bottom  Div */}
        <div className="flex flex-row w-[90%] items-center justify-center gap-4 mb-8 mt-8">
          <Link
            to={`https://github.com/RiteshRay07`}
            className="text-white text-[20px] hover:text-white"
            target="_blank"
          >
            <FaGithub />
          </Link>
          <Link
            to={`https://twitter.com/RiteshRay_07`}
            className="text-white text-[20px] hover:text-white"
            target="_blank"
          >
            <FaXTwitter />
          </Link>
          <Link
            to={`https://www.linkedin.com/in/riteshray/`}
            className="text-white text-[20px] hover:text-white"
            target="_blank"
          >
            <FaLinkedinIn />
          </Link>
          <Link
            to={`https://wa.me/message/OGE5RPMW3DONF1`}
            className="text-white text-[20px] hover:text-white"
            target="_blank"
          >
            <FaWhatsapp />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
