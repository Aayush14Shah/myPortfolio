import React, { useContext, useRef, useState } from "react";
import { AppContext } from "./AppContext";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";


const Section5 = () => {
  const data = useContext(AppContext);
  const gsapFly = useRef();
  const gsapCar = useRef();

  const [flyX, setFlyX] = useState();
  const [flyY, setFlyY] = useState();

  const [carX, setCarX] = useState();
  const handleFly = () => {
    const random_x = gsap.utils.random(-50, 50, 10);
    const random_y = gsap.utils.random(-50, 50, 10);
    console.log("random number generated ", random_x, random_y);
    setFlyX(random_x);
    setFlyY(random_y);
    console.log("I am moving", flyX, flyY);
  };
  useGSAP(() => {
    gsap.to(gsapFly.current, {
      x: flyX,
      y: flyY,
      duration: 0.5,
      delay: 0.2,
      ease: "back.out",
    });
  }, [flyX, flyY]);

  const handleCar = () => {
    setCarX(400);
  };
  useGSAP(() => {
    gsap.to(gsapCar.current, {
      xPercent: carX,
      duration: 3,
      delay: 0.2,
      ease: "power4.in",
    });
  }, [carX]);
  return (
    <div
      className={`w-full h-screen p-[3%] sm:p-[5%] xl:p-[3%] ${
        data.mode ? "bg-white" : "bg-[#1f2235]"
      } `}
    >
      <div
        className={`w-full h-full mx-auto rounded-lg ${
          data.mode ? "bg-indigo-100" : "bg-[#313552]"
        } `}
      >
        <div className="flex justify-between py-[1.5%] px-[5%] sm:space-y-2 sm:flex-col ">
          <h1
            className={`font-semibold text-3xl sm:text-2xl md:text-2xl ${
              data.mode
                ? "bg-gradient-to-r from-indigo-700 to-indigo-500 bg-clip-text "
                : "bg-gradient-to-r from-amber-600 to-yellow-300 bg-clip-text "
            } text-transparent `}
          >
            Fun Activity
          </h1>
          <p
            className={`my-auto text-xl sm:text-sm md:text-sm font-semibold ${
              data.mode
                ? "bg-gradient-to-r from-indigo-700 to-indigo-500 bg-clip-text "
                : "bg-gradient-to-r from-amber-600 to-yellow-300 bg-clip-text "
            } text-transparent `}
          >
            Thank You for scrolling till here.
          </p>
        </div>
        <div
          className={`w-[calc(100%-10%)] h-[calc(100%-20%)] grid grid-rows-2 grid-cols-2 mx-auto gap-6 sm:flex flex-col ${
            data.mode ? "bg-indigo-100" : "bg-[#313552]"
          } sm:overflow-hidden `}
        >
          <div className=" w-full h-full bg-white rounded-lg p-5">
            <button
              className="animate border-2 border-indigo-300 px-5 py-1 bg-indigo-100 hover:bg-indigo-200 text-lg font-semibold text-slate-800 rounded-md"
              onClick={handleFly}
            >
              Fly
            </button>
            <img
              alt="Fly"
              src={`${process.env.PUBLIC_URL}/Images/Fly.jpeg`}
              className="w-[60px] my-auto mx-auto h-[60px] rounded-full cursor-pointer "
              ref={gsapFly}
            />
          </div>
          <div className="w-full h-full bg-white rounded-lg p-5">
            <button
              className="animate border-2 border-indigo-300 px-5 py-1 bg-indigo-100 hover:bg-indigo-200 text-lg font-semibold text-slate-800 rounded-md"
              onClick={handleCar}
            >
              Let's win the race
            </button>
            <button
              className="mx-4 animate border-2 border-indigo-300 px-5 py-1 bg-indigo-100 hover:bg-indigo-200 text-lg font-semibold text-slate-800 rounded-md"
              onClick={() => setCarX(0)}
            >
              Start race
            </button>
            <img
              alt="Fly"
              src={`${process.env.PUBLIC_URL}/Images/car.jpeg`}
              className="mt-[10%] w-[150px]"
              ref={gsapCar}
            />
            <div className="road w-full border-b-2 border-slate-800 border-dashed"></div>
          </div>
          <div className="text-center w-full h-full bg-white rounded-lg p-5">
            3
          </div>
          <div className="text-center w-full h-full bg-white rounded-lg p-5">
            4
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section5;
