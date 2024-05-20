import React from "react";
import { Link } from "react-router-dom";
import { IoEyeOutline } from "react-icons/io5";
import project1Image from "../assets/studynotion.png";
import project2Image from "../assets/codehelp.png";
import project3Image from "../assets/weather.png";
import project4Image from "../assets/razorpay.png";
// import project5Image from "../assets/videocall.svg";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      imageUrl: project1Image,
      title: "Ed-Tech",
      description: "Web Development",
      projectUrl: "https://github.com/RiteshRay07",
    },
    {
      id: 2,
      imageUrl: project2Image,
      title: "CodeHelp",
      description: "Web Development",
      projectUrl: "https://github.com/RiteshRay07",
    },
    {
      id: 3,
      imageUrl: project3Image,
      title: "Weather APP",
      description: "Web Development",
      projectUrl: "https://github.com/RiteshRay07",
    },
    {
      id: 4,
      imageUrl: project4Image,
      title: "Razorpay",
      description: "Web Development",
      projectUrl: "https://github.com/RiteshRay07",
    },
    {
      id: 5,
      imageUrl: project4Image,
      title: "Razorpay",
      description: "Web Development",
      projectUrl: "https://github.com/RiteshRay07",
    },
    {
      id: 6,
      imageUrl: project4Image,
      title: "Razorpay",
      description: "Web Development",
      projectUrl: "https://github.com/RiteshRay07",
    },
  ];

  return (
    <div className="w-[90vw] md:w-[70vw] mt-5 pt-7 flex flex-col items-center justify-center bg-[#1e1e1f] rounded-[20px] border-[0.5px] border-[#444343]">
      {/* Heading */}
      <div className="w-[90%] h-[90px] flex flex-col items-start justify-center mb-5">
        <p className="text-3xl text-white font-extrabold">Portfolio</p>
        <div className="w-[80px] h-[5px] bg-[#e9f024] mt-2 ml-[3px] rounded-sm"></div>
      </div>

      {/* projects div */}
      <div className="w-[90%] mt-5 mb-5 flex flex-wrap items-center justify-around">
        {/* Project Cards */}
        {projects.map((project) => (
          <Link
            key={project.id}
            to={project.projectUrl}
            target="_blank"
            className="relative w-[30%] h-fit md:w-[28%] pb-14 mb-5 md:mb-0 md:mr-5"
          >
            <div className="w-full h-[200px] relative">
              <img
                src={project.imageUrl}
                alt={project.title}
                loading="lazy"
                className="rounded-[10%] w-[100%] h-[200px] text-white transition-transform duration-300 transform-gpu hover:scale-105"
              />
              {/* Eye icon container */}
              <div className="absolute w-[100%] h-[100%] bg-[#b4b1b1a9] rounded-[10%] inset-0 flex items-center justify-center opacity-0 transition-opacity duration-300 hover:opacity-100">
                {/* Eye icon */}
                <IoEyeOutline className="text-[#e4fa3c] text-[40px] z-10" />
              </div>
            </div>
            <div>
              <p className="text-white text-[16px] my-1">{project.title}</p>
              <p className="text-white text-[12px] my-1">
                {project.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
