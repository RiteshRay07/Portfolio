import React from "react";
import * as Icon1 from "react-icons/bi";
import * as Icon3 from "react-icons/hi2";
import * as Icon2 from "react-icons/io5";

const contactDetails = [
  {
    icon: "HiChatBubbleLeftRight",
    heading: "Chat on us",
    description: "I am here to help.",
    details: "Contact.Riteshray@gmail.com",
  },
  {
    icon: "BiWorld",
    heading: "Visit us",
    description: "Come and say hello at our office HQ.",
    details:
      "Budge Budge Institute of Technology, Nishchintapur, West Bengal 700137",
  },
  {
    icon: "IoCall",
    heading: "Call us",
    description: "Mon - Fri From 8am to 5pm",
    details: "+91 9430007963",
  },
];

const ContactDetails = () => {
  return (
    <div className="flex flex-col w-[90%] gap-6 rounded-xl bg-[#282829] mt-5 mb-10 p-4 lg:p-6">
      {contactDetails.map((element, index) => {
        let Icon =
          Icon1[element.icon] || Icon2[element.icon] || Icon3[element.icon];
        return (
          <div
            className="flex flex-col gap-[2px] p-3 text-sm text-white"
            key={index}
          >
            <div className="flex flex-row items-center gap-3">
              <Icon size={25} />
              <h1 className="text-lg font-semibold text-white">
                {element?.heading}
              </h1>
            </div>
            <p className="font-medium">{element?.description}</p>
            <p className="font-semibold text-[#e9f024]">{element?.details}</p>
          </div>
        );
      })}
    </div>
  );
};

export default ContactDetails;
