import React, { useContext, useState } from "react";
import { AppContext } from "../AppContext";
import certificateData from "../API/certificate";

const CertificateCarousel = () => {
  const data = useContext(AppContext);
  const [current, setCurrent] = useState(0);

  const handleNext = () => {
    const isLastSlide = current === certificateData.length - 1;
    const newIndex = isLastSlide ? 0 : current + 1;
    setCurrent(newIndex);
  };

  const handleBack = () => {
    const isFirstSlide = current === 0;
    const newIndex = isFirstSlide ? certificateData.length - 1 : current - 1;
    setCurrent(newIndex);
  };

  return (
    <>
      <div
        className={`rounded-md w-full xl:w-[calc(100%-10%)] lg:w-[calc(100%-10%)] md:w-[calc(100%-2%)] sm:w-[calc(100%-0%)] mx-auto h-[calc(100%-20%)] sm:h-[calc(100%-30%)] flex justify-between ${
          data.mode ? "bg-white" : "bg-[#1f2235]"
        } `}
      >
        {certificateData.map((item) => {
          return (
            current === item.id && (
              <div
                className="mx-auto my-auto overflow-hidden animate-navContent w-full"
                key={item.id}
              >
                <div
                  className={`w-full lg:w-[calc(100%-10%)] md:w-[calc(100%-10%)] sm:w-[calc(100%-15%)] md:mx-auto lg:mx-auto h-[300px] md:h-[320px] sm:h-[300px] sm:mx-auto rounded-lg grid grid-cols-2 sm:flex sm:flex-col sm:my-auto ${
                    data.mode
                      ? "bg-indigo-100"
                      : "border-2 border-[#313552] bg-[#313552]"
                  } sm:overflow-y-auto `}
                >
                  <div className="flex justify-center items-center p-4 sm:p-2">
                    <img
                      className="h-[280px] w-[350px] md:w-[320px] sm:w-[250px] sm:h-[200px] object-cover rounded-lg border-2 border-white"
                      alt={item.title}
                      src={item.image}
                    />
                  </div>
                  <div
                    className={`h-[300px] p-6 md:p-4 sm:p-3 space-y-4 md:space-y-3 sm:space-y-2 flex flex-col justify-start sm:overflow-y-auto`} // Adjusted padding and justified content to start
                  >
                    <h1
                      className={`${
                        data.mode ? "text-slate-600" : "text-white"
                      } font-bold text-xl md:text-lg sm:text-base line-clamp-2`} // Added line-clamp to prevent overflow
                    >
                      {item.title}
                    </h1>
                    <p
                      className={`leading-normal text-justify ${
                        data.mode ? "text-slate-600" : "text-white"
                      } sm:leading-relaxed text-base md:text-sm sm:text-xs overflow-y-auto`} // Adjusted font sizes and added overflow
                    >
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            )
          );
        })}
      </div>
      <div
        className={`flex justify-between w-full xl:w-[calc(100%-10%)] lg:w-[calc(100%-10%)] md:w-[calc(100%-2%)] sm:w-[calc(100%-2%)] mx-auto mt-4`} // Added mt-4 for spacing
      >
        <button
          type="button"
          className={`font-semibold border-2 border-gray-300 px-5 py-2 text-lg rounded-lg ${
            data.mode
              ? "border-2 border-indigo-800 hover:text-white hover:bg-violet-600"
              : "text-white border-2 border-[#1f2235] hover:bg-[#1f2235]"
          } `}
          onClick={handleBack}
        >
          ❮ Back
        </button>
        <button
          type="button"
          className={`font-semibold border-2 border-gray-300 px-5 py-2 text-lg rounded-lg ${
            data.mode
              ? "border-2 border-indigo-800 hover:text-white hover:bg-violet-600"
              : "text-white border-2 border-[#1f2235] hover:bg-[#1f2235]"
          } `}
          onClick={handleNext}
        >
          Next ❯
        </button>
      </div>
    </>
  );
};

export default CertificateCarousel;