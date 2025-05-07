import React, { useContext, useState } from "react";
import { AppContext } from "../AppContext";
import certificateData from "../API/certificate";

const CertificateCarousel = ({ isSmallScreen }) => {
  const data = useContext(AppContext);
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    setCurrent((prev) => (prev === certificateData.length - 1 ? 0 : prev + 1));
  };

  const handleBack = () => {
    setCurrent((prev) => (prev === 0 ? certificateData.length - 1 : prev - 1));
  };

  const currentCertificate = certificateData.find((item) => item.id === current);

  return (
    <div className="w-full flex flex-col flex-1">
      <div
        className={`rounded-md w-full mx-auto flex-1 ${
          data.mode ? "bg-white" : "bg-[#1f2235]"
        } transition-all duration-300 overflow-hidden sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[450px] h-[500px]`}
      >
        {currentCertificate ? (
          <div className="h-full w-full flex flex-col sm:p-1 md:p-2 lg:p-3 xl:p-3 p-3">
            <div
              className={`w-full h-full flex ${
                isSmallScreen ? "flex-col" : "flex-row"
              } sm:gap-2 md:gap-3 lg:gap-4 xl:gap-4 gap-4`}
            >
              <div
                className={`${
                  isSmallScreen ? "w-full h-32" : "w-1/2 h-full"
                } flex items-center justify-center sm:p-1 md:p-2 lg:p-3 xl:p-3 p-3 overflow-hidden`}
              >
                <img
                  className={`max-w-full max-h-full object-contain rounded-lg ${
                    data.mode ? "border-2 border-gray-200" : "border-2 border-[#313552]"
                  }`}
                  alt={currentCertificate.title}
                  src={currentCertificate.image}
                />
              </div>
              <div
                className={`${
                  isSmallScreen ? "w-full h-32" : "w-1/2 h-full"
                } sm:p-1 md:p-2 lg:p-3 xl:p-3 p-3 flex flex-col overflow-y-auto`}
              >
                <h1
                  className={`${
                    data.mode ? "text-slate-600" : "text-white"
                  } font-bold sm:text-sm md:text-base lg:text-lg xl:text-lg text-lg sm:mb-1 md:mb-2 lg:mb-2 xl:mb-2 mb-2`}
                >
                  {currentCertificate.title}
                </h1>
                <p
                  className={`${
                    data.mode ? "text-slate-600" : "text-white"
                  } sm:text-xs md:text-sm lg:text-sm xl:text-sm text-sm leading-relaxed`}
                >
                  {currentCertificate.description}
                </p>
              </div>
            </div>
          </div>
        ) : (
          <div className="w-full h-full flex justify-center items-center">
            <p className={data.mode ? "text-slate-600" : "text-white"}>No certificate found.</p>
          </div>
        )}
      </div>
      <div className="w-full flex justify-between sm:mt-1 md:mt-2 lg:mt-2 xl:mt-2 mt-2 sm:px-1 md:px-2 lg:px-3 xl:px-3 px-3">
        <button
          onClick={handleBack}
          className={`sm:px-2 md:px-3 lg:px-3 xl:px-3 px-3 sm:py-0.5 md:py-1 lg:py-1 xl:py-1 py-1 sm:text-sm md:text-sm lg:text-base xl:text-base text-base rounded-md transition-colors duration-200 border-2 font-semibold border-gray-800  ${
            data.mode
              ? "bg-white hover:bg-indigo-100 text-indigo-700"
              : "bg-[#313552] text-amber-300 hover:bg-[#262841]"
          }`}
        >
          ❮ Back
        </button>
        <button
          onClick={handleNext}
          className={`sm:px-2 md:px-3 lg:px-3 xl:px-3 px-3 sm:py-0.5 md:py-1 lg:py-1 xl:py-1 py-1 sm:text-sm md:text-sm lg:text-base xl:text-base text-base rounded-md transition-colors duration-200 border-2 font-semibold border-gray-800 ${
            data.mode
              ? "bg-white hover:bg-indigo-100 text-indigo-700"
              : "bg-[#313552] text-amber-300 hover:bg-[#262841]"
          }`}
        >
          Next ❯
        </button>
      </div>
    </div>
  );
};

export default CertificateCarousel;