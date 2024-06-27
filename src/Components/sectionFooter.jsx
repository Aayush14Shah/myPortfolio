import React, { useContext } from "react";
import { AppContext } from "./AppContext";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from "@mui/icons-material/Email";

const LastSectionFooter = () => {
  const data = useContext(AppContext);
  return (
    <div
      className={`w-full h-[60px] sm:h-full py-[0.5%] sm:py-[2%] px-[4%] md:px-[2%] ${
        data.mode ? "bg-slate-800" : "bg-[#313552]"
      }  `}
    >
      <div
        className={`text-md text-indigo-100 sm:space-y-2 sm:text-center flex sm:flex-col md:text-sm md:my-[1.5%] lg:my-[1%] xl:my-[0.5%] justify-between  `}
      >
        <p className="tracking-wide my-auto ">&copy; by aayush. All rights reserved</p>
        <div className="tracking-wide flex space-x-2 sm:mx-auto">
          <a href="https://www.instagram.com/aayush.___.14/" className="  hover:text-indigo-300 border-2 border-gray-500 p-2 rounded-full cursor-pointer ">
            <InstagramIcon />
          </a>
          <a href="https://www.linkedin.com/in/aayush14/" 
          target="blank"
          className="hover:text-indigo-300 border-2 border-gray-500 p-2 rounded-full cursor-pointer">
            <LinkedInIcon />
          </a>
        </div>
        <p
          className="tracking-wide cursor-pointer my-auto hover:text-indigo-300"
          onClick={() => data.scrollHandler(data.contact)}
        >
          <EmailIcon /> ljkuaayush@gmail.com
        </p>
      </div>
    </div>
  );
};

export default LastSectionFooter;
