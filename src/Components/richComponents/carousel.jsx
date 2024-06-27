import React, { useContext, useState } from "react";
import { AppContext } from "../AppContext";
import imageSliderContent from "../API/imageSliderContent";


const Carousel = () => {
  const data = useContext(AppContext);
  const [current, setCurrent] = useState(0);
  console.log(
    "this is id",
    imageSliderContent[0].id,
    "This is image",
    imageSliderContent[0].image,
    "This is title",
    imageSliderContent[0].title,
    "This is it's content",
    imageSliderContent[0].content
  );
  const handleNext = () => {
    const isLastSlide = current === imageSliderContent.length - 1;
    const newIndex = isLastSlide ? 0 : current + 1;
    setCurrent(newIndex);
    console.log(current);
  };
  const handleBack = () => {
    const isFirstSlide = current === 0;
    const newIndex = isFirstSlide ? imageSliderContent.length - 1 : current - 1;
    setCurrent(newIndex);
    console.log(current);
  };

  return (
    <>
      <div
        className={`rounded-md w-[calc(100%-20%)] xl:w-[calc(100%-10%)] lg:w-[calc(100%-10%)] md:w-[calc(100%-2%)] sm:w-[calc(100%-0%)] mx-auto h-[calc(100%-30%)] sm:h-[calc(100%-30%)]  flex justify-between ${
          data.mode ? "bg-white" : "bg-[#1f2235]"
        } `}
      >
        {imageSliderContent.map((item) => {
          return (
            current === item.id && (
              <div
                className="mx-auto my-auto overflow-hidden animate-navContent "
                key={item.id}
              >
                <div
                  className={`w-[800px] lg:w-[calc(100%-10%)] md:w-[calc(100%-10%)] sm:w-[calc(100%-15%)] md:mx-auto lg:mx-auto h-[300px] md:h-[320px] sm:h-[300px] sm:mx-auto rounded-lg grid grid-cols-2 sm:flex sm:flex-col sm:my-auto ${
                    data.mode
                      ? " bg-indigo-100 "
                      : "border-2 border-[#313552] bg-[#313552] "
                  } sm:overflow-y-auto `}
                >
                  <img
                    className="h-[320px] w-[320px] md:w-[350px] sm:w-[200px] sm:h-[200px] object-fit rounded-tl-lg rounded-bl-lg sm:mx-auto sm:mt-[5%] sm:rounded-lg sm:border-2 sm:border-white"
                    alt="Project"
                    src={item.image}
                  />
                  <div className={`h-[300px] p-5 space-y-8 md:space-y-6 md:text-sm sm:space-y-4 sm:text-sm `}>
                    <h1
                      className={`${
                        data.mode ? "text-slate-600" : "text-white "
                      } font-bold `}
                    >
                      {item.title}
                    </h1>
                    <p
                      className={`leading-normal text-justify ${
                        data.mode ? "text-slate-600" : "text-white "
                      } sm:leading-relaxed `}
                    >
                      {item.content}
                    </p>
                    <button
                      type="button"
                      className={`font-semibold px-5 py-2 text-lg rounded-lg ${
                        data.mode
                          ? "border-2 border-indigo-800 hover:text-white hover:bg-violet-800 "
                          : "text-white border-2 border-[#1f2235] hover:bg-[#1f2235] "
                      } `}
                    >
                      Preview Project
                    </button>
                  </div>
                </div>
              </div>
            )
          );
        })}
      </div>
      <div className="flex justify-between w-[calc(100%-20%)] mx-auto xl:w-[calc(100%-10%)] lg:w-[calc(100%-10%)] md:w-[calc(100%-2%)] sm:w-[calc(100%-2%)]">
        <button
          type="button"
          className={`font-semibold border-2 border-gray-300 px-5 py-2 text-lg rounded-lg ${
            data.mode
              ? "border-2 border-indigo-800 hover:text-white hover:bg-violet-600 "
              : "text-white border-2 border-[#1f2235] hover:bg-[#1f2235] "
          } `}
          onClick={handleBack}
          // disabled={current === 0}
        >
          &#10094; Back
        </button>
        <button
          type="button"
          className={`font-semibold border-2 border-gray-300 px-5 py-2 text-lg rounded-lg ${
            data.mode
              ? "border-2 border-indigo-800 hover:text-white hover:bg-violet-600 "
              : "text-white border-2 border-[#1f2235] hover:bg-[#1f2235] "
          } `}
          onClick={handleNext}
          // disabled={current === imageSliderContent.length}
        >
          Next &#10095;
        </button>
      </div>
    </>
  );
};

export default Carousel;
