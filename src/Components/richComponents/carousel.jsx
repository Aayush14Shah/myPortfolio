import React, { useContext, useState } from "react";
import { AppContext } from "../AppContext";
import imageSliderContent from "../API/imageSliderContent";

const Carousel = () => {
  const data = useContext(AppContext);
  const [current, setCurrent] = useState(0);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentVideo, setCurrentVideo] = useState("");

  const handleNext = () => {
    const isLastSlide = current === imageSliderContent.length - 1;
    const newIndex = isLastSlide ? 0 : current + 1;
    setCurrent(newIndex);
  };

  const handleBack = () => {
    const isFirstSlide = current === 0;
    const newIndex = isFirstSlide ? imageSliderContent.length - 1 : current - 1;
    setCurrent(newIndex);
  };

  const openModal = (videoSrc) => {
    setCurrentVideo(videoSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setCurrentVideo("");
  };

  return (
    <>
      <div
        className={`rounded-md w-[calc(100%-20%)] xl:w-[calc(100%-10%)] lg:w-[calc(100%-10%)] md:w-[calc(100%-2%)] sm:w-[calc(100%-0%)] mx-auto h-[calc(100%-30%)] sm:h-[calc(100%-30%)] flex justify-between ${
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
                  <div className="flex justify-center items-center p-4">
                    <img
                      className="h-[280px] w-[350px] md:w-[320px] sm:w-[250px] sm:h-[200px] object-cover rounded-lg border-2 border-white"
                      alt="Project"
                      src={item.image}
                    />
                  </div>
                  <div className={`h-[300px] p-5 space-y-4 md:space-y-3 md:text-sm sm:space-y-2 sm:text-sm flex flex-col justify-center`}>
                    <h1
                      className={`${
                        data.mode ? "text-slate-600" : "text-white "
                      } font-bold text-xl sm:text-lg`}
                    >
                      {item.title}
                    </h1>
                    <p
                      className={` leading-normal text-justify ${
                        data.mode ? "text-slate-600" : "text-white "
                      } sm:leading-relaxed text-base sm:text-sm`}
                    >
                      {item.content}
                    </p>
                    <div className="flex space-x-4">
                      <button
                        type="button"
                        className={`font-semibold px-5 py-2 text-lg rounded-lg ${
                          data.mode
                            ? "border-2 border-indigo-800 hover:text-white hover:bg-violet-800 "
                            : "text-white border-2 border-[#1f2235] hover:bg-[#1f2235] "
                        } `}
                        onClick={() => openModal(item.video)}
                      >
                        Preview Video
                      </button>
                      <a
                        href={item.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`font-semibold px-5 py-2 text-lg rounded-lg ${
                          data.mode
                            ? "border-2 border-indigo-800 hover:text-white hover:bg-violet-800 "
                            : "text-white border-2 border-[#1f2235] hover:bg-[#1f2235] "
                        } inline-block w-fit`}
                      >
                        GitHub Repo
                      </a>
                    </div>
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
        >
          ❮ Back
        </button>
        <button
          type="button"
          className={`font-semibold border-2 border-gray-300 px-5 py-2 text-lg rounded-lg ${
            data.mode
              ? "border-2 border-indigo-800 hover:text-white hover:bg-violet-600 "
              : "text-white border-2 border-[#1f2235] hover:bg-[#1f2235] "
          } `}
          onClick={handleNext}
        >
          Next ❯
        </button>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-80 z-50">
          <div className="relative bg-white rounded-lg p-6 max-w-4xl w-[90%] sm:w-[95%]">
            <button
              className="absolute top-[-40px] right-0 text-4xl font-bold text-white hover:text-gray-300 p-2"
              onClick={closeModal}
            >
              ×
            </button>
            <video
              className="w-full h-auto rounded-lg"
              autoPlay
              loop
              muted
              src={currentVideo}
              controls
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Carousel;