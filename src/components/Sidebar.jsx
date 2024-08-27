import React, { useState } from "react";
import { Link } from "react-router-dom";
import profileImg from "../assets/profileImg.png";
import { IoMailOutline, IoLocationOutline } from "react-icons/io5";
import { MdOutlinePhoneIphone, MdOutlineDateRange } from "react-icons/md";
import { FaGithub, FaXTwitter, FaLinkedinIn, FaWhatsapp} from "react-icons/fa6";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";


const Sidebar = () => {
  const [isBottomTopVisible, setBottomTopVisible] = useState(false);

  const toggleBottomTop = () => {
    setBottomTopVisible(!isBottomTopVisible);
  };

  return (
    <div className="w-[90vw] md:sticky md:top-14 md:w-[20vw] h-fit md:h-fit bg-[#1e1e1f] flex flex-col items-center justify-start mt-5 pt-[60px] border-[0.5px] border-[#444343] rounded-[20px] z-50">
      {/* Toggle Button for Small Devices
      <div className="md:hidden flex items-center justify-center mt-4">
        <button
          onClick={toggleBottomTop}
          className="p-2 bg-gray-800 rounded-full"
        >
          <FaGoogle className="text-white text-2xl" />
        </button>
      </div> */}

      {/* Top div */}
      <div className="w-[200px] h-[320px] flex flex-col items-center justify-between">
        {/* Self Avatar */}
        <Link to="/">
          <div className="flex items-center justify-center w-[200px] h-[200px] bg-[#3B3B3B] border-0 rounded-[10%]">
            <img
              src={profileImg}
              alt="profile-Img"
              loading="lazy"
              className="w-[150px] h-[150px] rounded-[10%]"
            />
          </div>
        </Link>

        {/* Name */}
        <div>
          <p className="text-white font-extrabold text-2xl">RITESH RAY</p>
        </div>

        {/* Title */}
        <div className="p-2 bg-[#3B3B3B] border-0 rounded-[15px] text-white mb-3">
          <p>MERN Stack Developer</p>
        </div>
      </div>
      {/* Toggle Button for Small Devices */}
      <div className="md:hidden flex items-center justify-center mt-4 mb-4">
        <button
          onClick={toggleBottomTop}
          className="p-2 border-none bg-[#3B3B3B] rounded-full"
        >
          {isBottomTopVisible ? (
            <IoIosArrowUp className="text-[#e4fa3c] text-2xl" />
          ) : (
            <IoIosArrowDown className="text-[#e4fa3c] text-2xl" />
          )}
        </button>
      </div>

      {/* Bottom Top Div */}
      <div
        className={`w-[90%] md:w-[250px] flex flex-col items-center justify-between mt-7 border-t-[0.5px] border-[#807f7f] transition-all duration-500 ease-in-out transform ${isBottomTopVisible ? 'max-h-[1000px] opacity-100' : 'max-h-0 opacity-0'} overflow-hidden md:max-h-none md:opacity-100 md:block`}
      >
        {/* Email Div */}
        <div className="w-[100%] flex flex-row items-center justify-evenly mt-8">
          <div className="w-[50px] h-[50px] bg-[#202022] flex items-center justify-center border-t-[0.5px] border-l-[0.5px] rounded-[10px] border-[#787676]">
            <IoMailOutline className="text-[20px] text-[#e4fa3c]" />
          </div>
          <div className="flex flex-col items-start justify-center">
            <p className="text-[12px] text-[#bcbbbb]">EMAIL</p>
            <p className="overflow-hidden w-[150px]">
              <Link
                to={`mailto:contact.riteshray@gmail.com`}
                className="text-white text-[16px] hover:text-white"
              >
                Contact.RiteshRay@gmail.com
              </Link>
            </p>
          </div>
        </div>
        {/* Phone Div */}
        <div className="w-[100%] flex flex-row items-center justify-evenly mt-8">
          <div className="w-[50px] h-[50px] bg-[#202022] flex items-center justify-center border-t-[0.5px] border-l-[0.5px] rounded-[10px] border-[#787676]">
            <MdOutlinePhoneIphone className="text-[20px] text-[#e4fa3c]" />
          </div>
          <div className="flex flex-col items-start justify-center">
            <p className="text-[12px] text-[#bcbbbb]">PHONE</p>
            <p className="overflow-hidden w-[150px]">
              <Link
                to={`tel:91943000763`}
                className="text-white text-[16px] hover:text-white"
              >
                +91 9430007963
              </Link>
            </p>
          </div>
        </div>
        {/* Birthday Div */}
        <div className="w-[100%] flex flex-row items-center justify-evenly mt-8">
          <div className="w-[50px] h-[50px] bg-[#202022] flex items-center justify-center border-t-[0.5px] border-l-[0.5px] rounded-[10px] border-[#787676]">
            <MdOutlineDateRange className="text-[20px] text-[#e4fa3c]" />
          </div>
          <div className="flex flex-col items-start justify-center">
            <p className="text-[12px] text-[#bcbbbb]">BIRTHDAY</p>
            <p className="overflow-hidden w-[150px] text-white text-[16px] font-semibold">
              March 28, 2002
            </p>
          </div>
        </div>
        {/* Location Div */}
        <div className="w-[100%] flex flex-row items-center justify-evenly mt-8">
          <div className="w-[50px] h-[50px] bg-[#202022] flex items-center justify-center border-t-[0.5px] border-l-[0.5px] rounded-[10px] border-[#787676]">
            <IoLocationOutline className="text-[20px] text-[#e4fa3c]" />
          </div>
          <div className="flex flex-col items-start justify-center">
            <p className="text-[12px] text-[#bcbbbb]">LOCATION</p>
            <p className="overflow-hidden w-[150px] text-white text-[16px] font-semibold">
              Kolkata, INDIA
            </p>
          </div>
        </div>
        {/* Social Links */}
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
