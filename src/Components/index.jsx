import React from "react";
import { TypewriterEffect } from "./TypewriterEffect";
import { AppContext } from "./AppContext";
import { useContext } from "react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const Index = (props) => {
  const data = useContext(AppContext);
  const { mode } = useContext(AppContext);

  return (
    <div
      className={`min-h-screen w-full flex items-center justify-center pt-[60px] ${
        mode ? "bg-gray-50" : "bg-gray-800"
      }`}
      ref={props.reference}
    >
      <div className={`container mx-auto px-10 py-10 
        sm:px-6 sm:py-10 
        md:px-6 md:py-12 
        lg:px-8 lg:py-16 
        xl:px-10 xl:py-20 
        max-w-[1600px]`}
      >
        <div
          className={`flex flex-row 
            sm:flex-col 
            ms:flex-col 
            md:flex-row 
            lg:flex-row 
            xl:flex-row 
            items-center justify-between gap-10 
            ${mode ? "bg-indigo-50" : "bg-transparent"} 
            p-10 sm:p-8 md:p-10 lg:p-12 xl:p-16 
            rounded-xl`}
        >
          {/* Text Content */}
          <div
            className="flex-1 space-y-6 
              sm:space-y-5 
              ms:space-y-5 
              md:space-y-6 
              lg:space-y-7 
              xl:space-y-8 
              max-w-full"
          >
            <div className="space-y-3 sm:space-y-3 ms:space-y-3">
              <p
                className={`text-xl ${mode ? "text-gray-600" : "text-gray-300"}`}
              >
                Hello, my name is
              </p>
              <div className="space-y-2">
                <h1
                  className={`text-5xl font-bold ${
                    mode ? "text-gray-900" : "text-white"
                  }`}
                >
                  Aayush Shah.
                </h1>
                <h2
                  className={`text-4xl font-bold ${
                    mode ? "text-indigo-600" : "text-indigo-400"
                  }`}
                >
                  I build things for the web
                </h2>
              </div>
            </div>

            <div className="space-y-3 sm:space-y-3 ms:space-y-3">
              <p
                className={`text-xl ${mode ? "text-gray-600" : "text-gray-300"}`}
              >
                I'm a
              </p>
              <div
                className={`text-4xl font-bold ${
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
              className={`group flex items-center gap-2 px-8 py-4 text-xl font-semibold text-white 
                rounded-lg transition-colors duration-200 
                ${
                  mode
                    ? "bg-indigo-600 hover:bg-indigo-700"
                    : "bg-indigo-500 hover:bg-indigo-600"
                }`}
            >
              Let's talk
              <ArrowOutwardIcon className="w-6 h-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-200" />
            </button>
          </div>

          {/* Profile Image */}
          <div
            className="relative flex-shrink-0 flex items-center justify-center mt-0 
              sm:mt-8 ms:mt-8 md:mt-0"
          >
            <div
              className={`w-72 h-72 
                sm:w-56 sm:h-56 
                ms:w-56 ms:h-56 
                md:w-64 md:h-64 
                lg:w-72 lg:h-72 
                xl:w-96 xl:h-96 
                rounded-full overflow-hidden 
                ring-4 ring-indigo-600 ring-offset-4 
                ${mode ? "ring-offset-gray-50" : "ring-offset-gray-800"}`}
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
