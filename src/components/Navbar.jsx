import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed bottom-0 w-[90vw] h-[60px] md:absolute md:w-[450px] md:h-[80px] flex flex-row items-center justify-evenly gap-2 md:gap-4 text-white font-bold bg-[#282829] border-[0.5px] border-[#444343] rounded-tl-[20px] md:rounded-tl-[0px] rounded-tr-[20px] md:rounded-bl-[20px] md:top-0 md:right-0 md:mt-[3.5%] md:mr-[10%] md:justify-evenly z-[20]">
      <NavLink to={"/"} activeClassName="text-yellow-500" className="text-white">
        <p>About</p>
      </NavLink>
      <NavLink to={"/resume"} activeClassName="text-yellow-500">
        <p>Resume</p>
      </NavLink>
      <NavLink to={"/portfolio"} activeClassName="text-yellow-500">
        <p>Portfolio</p>
      </NavLink>
      <NavLink to={"/contact"} activeClassName="text-yellow-500">
        <p>Contact</p>
      </NavLink>
    </div>
  );
};

export default Navbar;
