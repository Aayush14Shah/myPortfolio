import React, { useContext, lazy, Suspense } from "react";
import { AppContext } from "./AppContext";
import Loading from "./richComponents/loading";
// import Carousel from "./richComponents/carousel";

const Carousel = lazy(() => import("./richComponents/carousel"));

const Section3 = (props) => {
  const data = useContext(AppContext);

  return (
    // Main
    <div
      ref={props.reference}
      className={`w-full h-screen border-2 border-violet-700 p-[3%] ${
        data.mode ? "bg-white" : "bg-[#1f2235]"
      } `}
    >
      {/* Project main div */}
      <div
        className={` h-full w-full p-5 rounded-md mx-auto space-y-8 ${
          data.mode ? "bg-indigo-100" : "bg-[#313552] "
        }`}
      >
        {/* Header of div */}
        <div className={`flex justify-between space-x-[10px]`}>
          <h1
            className={`text-3xl lg:text-2xl md:text-xl sm:text-xl font-semibold my-auto w-[200px] text-center ${
              data.mode ? "text-indigo-600" : "text-fuchsia-300 "
            } `}
          >
            My Projects
          </h1>
          <div
            className={`h-[8px] bg-gradient-to-r from-violet-500 to-indigo-300  rounded-sm w-full my-auto `}
          ></div>
        </div>
        {/* Content of div */}

        <Suspense fallback={<Loading />}>
          <Carousel />
        </Suspense>
      </div>
    </div>
  );
};

export default Section3;
