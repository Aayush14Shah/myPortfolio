import React, { useContext } from "react";
import { AppContext } from "./AppContext";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

const LastSectionFooter = () => {
  const data = useContext(AppContext);
  const isLight = data.mode;

  // Map navigation items to correct refs from AppContext
  const navItems = [
    { name: "Home", ref: data.index },
    { name: "About", ref: data.about },
    { name: "Projects", ref: data.project },
    { name: "Contact", ref: data.contact },
  ];

  const handleScroll = (ref) => {
    if (ref?.current) {
      console.log(`Scrolling to ${ref.current.id || ref.current.tagName}`);
      data.scrollHandler(ref);
    } else {
      console.warn(`Scroll reference is undefined or invalid: ${JSON.stringify(ref)}`);
    }
  };

  return (
    <div
      className={`w-full py-6 sm:py-6 md:py-6 lg:py-8 xl:py-8 px-4 sm:px-4 md:px-5 lg:px-6 xl:px-8 transition-colors duration-300 ${
        isLight ? "bg-indigo-100" : "bg-gray-900"
      }`}
    >
      <div
        className={`flex flex-row justify-between items-center text-left gap-6 sm:gap-4 md:gap-4 lg:gap-0 sm:flex-col sm:items-center sm:text-center md:flex-col md:items-center md:text-center`}
      >
        {/* Branding */}
        <div
          className={`text-lg sm:text-base md:text-base lg:text-lg xl:text-lg font-semibold ${
            isLight ? "text-indigo-700" : "text-indigo-300"
          }`}
        >
          Aayush Shah | Portfolio
        </div>

        {/* Navigation Links */}
        <div className="flex flex-wrap justify-center gap-4 sm:gap-4 md:gap-4 lg:gap-5 xl:gap-6">
          {navItems.map((item) => (
            <div
              key={item.name}
              onClick={() => handleScroll(item.ref)}
              className={`text-sm sm:text-xs md:text-sm lg:text-sm xl:text-sm font-medium cursor-pointer transition-colors duration-200 ${
                isLight
                  ? "text-gray-700 hover:text-indigo-600"
                  : "text-gray-300 hover:text-indigo-400"
              }`}
            >
              {item.name}
            </div>
          ))}
        </div>

        {/* Social Icons & Email */}
        <div className="flex flex-col sm:flex-col md:flex-col lg:flex-row items-center gap-3 sm:gap-2 md:gap-2 lg:gap-3 xl:gap-3">
          <div className="flex space-x-3 sm:space-x-2 md:space-x-2 lg:space-x-3 xl:space-x-3">
            <a
              href="https://www.instagram.com/aayush.___.14/"
              target="_blank"
              rel="noopener noreferrer"
              className={`border-2 p-1.5 sm:p-1 md:p-1 lg:p-1.5 xl:p-1.5 rounded-full transition-colors duration-200 ${
                isLight
                  ? "text-gray-700 hover:text-indigo-600 border-gray-300"
                  : "text-gray-300 hover:text-indigo-400 border-gray-600"
              }`}
            >
              <InstagramIcon className="w-5 h-5 sm:w-4 sm:h-4 md:w-4 md:h-4 lg:w-5 lg:h-5" />
            </a>
            <a
              href="https://www.linkedin.com/in/aayush14/"
              target="_blank"
              rel="noopener noreferrer"
              className={`border-2 p-1.5 sm:p-1 md:p-1 lg:p-1.5 xl:p-1.5 rounded-full transition-colors duration-200 ${
                isLight
                  ? "text-gray-700 hover:text-indigo-600 border-gray-300"
                  : "text-gray-300 hover:text-indigo-400 border-gray-600"
              }`}
            >
              <LinkedInIcon className="w-5 h-5 sm:w-4 sm:h-4 md:w-4 md:h-4 lg:w-5 lg:h-5" />
            </a>
          </div>
          <p
            onClick={() => handleScroll(data.contact)}
            className={`text-sm sm:text-xs md:text-xs lg:text-sm xl:text-sm font-medium cursor-pointer flex items-center gap-1 transition-colors duration-200 ${
              isLight
                ? "text-gray-700 hover:text-indigo-600"
                : "text-gray-300 hover:text-indigo-400"
              }`}
          >
            <EmailIcon className="w-5 h-5 sm:w-4 sm:h-4 md:w-4 md:h-4 lg:w-5 lg:h-5" /> ljkuaayush@gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default LastSectionFooter;