import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className=" absolute w-[450px] h-[80px] flex flex-row items-center justify-evenly gap-2 md:gap-4 text-white font-bold bg-[#282829] border-[0.5px]  border-[#444343] rounded-tr-[20px] rounded-bl-[20px] mt-[20px] ml-[766px]">
      <NavLink to={"/"} activeClassName="text-yellow-500" className={ `text-white`}>
        <p className="">About</p>
      </NavLink>
      <NavLink to={"/resume"} activeClassName="text-yellow-500">
        <p className="">Resume</p>
      </NavLink>
      <NavLink to={"/portfolio"} activeClassName="text-yellow-500">
        <p className="">Portfolio</p>
      </NavLink>
      <NavLink to={"/contact"} activeClassName="text-yellow-500">
        <p className="">Contact</p>
      </NavLink>
    </div>
  );
};

export default Navbar;
