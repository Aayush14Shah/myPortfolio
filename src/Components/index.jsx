import React from "react";
import { TypewriterEffect } from "./TypewriterEffect";
// import { ArrowUpRight } from 'lucide-react';
import { AppContext } from "./AppContext";
import { useContext } from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const Index = (props) => {
  const data = useContext(AppContext);
  const { mode } = useContext(AppContext);
  return (
    <div
  className={`min-h-screen w-full ${mode ? "bg-gray-50" : "bg-gray-900"}`}
>
  <div className={`container mx-auto px-0 py-20 sm:px-6 sm:py-14 md:px-0 md:py-12 lg:px-4 lg:py-24 xl:px-8 xl:py-12`}>
    <div className={`flex flex-row sm:flex-col lg:flex-row items-center justify-between gap-10 lg:gap-12 xl:gap-16  ${ mode ? "bg-indigo-50" : "bg-none" } p-12 sm:p-8 md:p-6 lg:p-8 xl:p-10 rounded-md`}>
      {/* Text Content */}
      <div className="flex-1 space-y-6 max-w-2xl lg:max-w-3xl">
        <div className="space-y-3">
          <p
            className={`text-lg sm:text-lg md:text-xl lg:text-xl ${
              mode ? "text-gray-600" : "text-gray-400"
            }`}
          >
            Hello, my name is
          </p>
          <div className="space-y-2">
            <h1
              className={`text-4xl sm:text-4xl md:text-3xl lg:text-5xl xl:text-5xl font-bold ${
                mode ? "text-gray-900" : "text-white"
              }`}
            >
              Aayush Shah.
            </h1>
            <h2
              className={`text-3xl sm:text-3xl md:text-2xl lg:text-4xl xl:text-4xl font-bold ${
                mode ? "text-indigo-600" : "text-indigo-400"
              }`}
            >
              I build things for the web
            </h2>
          </div>
        </div>

        <div className="space-y-3">
          <p
            className={`text-lg sm:text-lg md:text-xl lg:text-xl ${
              mode ? "text-gray-600" : "text-gray-400"
            }`}
          >
            I'm a
          </p>
          <div
            className={`text-3xl sm:text-3xl md:text-3xl lg:text-4xl xl:text-4xl font-bold ${
              mode ? "text-indigo-600" : "text-indigo-400"
            }`}
          >
            <TypewriterEffect />
          </div>
        </div>

        <button
          id="talk"
          type="button"
          onClick={() => data.scrollHandler(data.contact)}
          className={`group flex items-center gap-2 px-4 py-2 sm:px-5 sm:py-3 lg:px-6 lg:py-3 xl:px-5 xl:py-3 text-base sm:text-lg lg:text-xl xl:text-lg font-semibold text-white bg-indigo-600 rounded-lg hover:bg-indigo-700 transition-colors duration-200 ${
            !mode && "bg-indigo-500 hover:bg-indigo-600"
          }`}
        >
          Let's talk
          <ArrowOutwardIcon className="w-4 h-4 sm:w-5 sm:h-5 lg:w-6 lg:h-6 xl:w-7 xl:h-7 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
        </button>
      </div>

      {/* Profile Image */}
      <div className="relative flex-shrink-0 flex items-center justify-center">
        <div
          className={`w-56 h-56 sm:w-64 sm:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 rounded-full overflow-hidden ring-4 ring-indigo-600 ring-offset-4 ${
            mode ? "ring-offset-gray-50" : "ring-offset-gray-900"
          }`}
        >
          <img
            src={`${process.env.PUBLIC_URL}/Images/profile.jpg`}
            alt="My profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  </div>
</div>


  );
};
export default Index;
