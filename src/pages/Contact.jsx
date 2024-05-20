import React from "react";
import ContactDetails from "../components/ContactDetails";

const Contact = () => {
  return (
    <div className="w-[90vw] md:w-[70vw] h-fit mt-5 pt-7 flex flex-col items-center justify-between bg-[#1e1e1f] rounded-[20px] border-[0.5px] border-[#444343]">
      {/* Heading */}
      <div className=" w-[90%] h-[90px] flex flex-col items-start justify-center mb-5 text-white text-3xl font-extrabold">
        <p className=" text-3xl text-white font-extrabold">Contact</p>
        <div className=" w-[80px] h-[5px] bg-[#e9f024] mt-2 ml-[3px] rounded-sm"></div>
      </div>

      {/* Map  */}
      <div className="w-[90%] h-[60vh] border-[0.5px] mb-6 rounded-[15px] border-[#787676]">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3687.2138276087526!2d88.16991033626681!3d22.45859758964469!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f830fc6fffffff%3A0x880d852ade5959b!2sBudge%20Budge%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1715147567499!5m2!1sen!2sin"
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          className="w-[100%] h-[60vh] border-[0.5px] mb-6 rounded-[15px] border-[#787676] overflow-hidden"
        ></iframe>
      </div>

      <ContactDetails />
    </div>
  );
};

export default Contact;
