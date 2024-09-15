import React, { useContext, useEffect, useState, lazy, Suspense } from "react";
// import 'animate.css'
import { AppContext } from "./AppContext";
import GradeIcon from "@mui/icons-material/Grade";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";
// import AboutPopUp from "./aboutPopUp";
// import gsap from "gsap";

const AboutPopUp = lazy(() => import("./aboutPopUp"));

const Section2 = (props) => {
  const defaultRangeColor = "#313552";
  const [bars, setBars] = useState([
    { value: 95, color: defaultRangeColor, tag: "HTML" },
    { value: 85, color: defaultRangeColor, tag: "CSS" },
    { value: 60, color: defaultRangeColor, tag: "Javascript" },
    { value: 60, color: defaultRangeColor, tag: "React" },
  ]);

  useEffect(() => {
    const animateBars = setTimeout(() => {
      setBars((prevBars) =>
        prevBars.map((bar) => ({
          ...bar,
          value: Math.min(bar.value + 1, bar.finalValue), // For animated progress
        }))
      );
    }, 10);
    return () => clearTimeout(animateBars);
  }, [bars]);

  // Define the final percentages if you want animation
  useEffect(() => {
    setBars([
      { value: 0, finalValue: 95, color: defaultRangeColor, tag: "HTML" },
      { value: 0, finalValue: 85, color: defaultRangeColor, tag: "CSS" },
      { value: 0, finalValue: 60, color: defaultRangeColor, tag: "Javascript" },
      { value: 0, finalValue: 60, color: defaultRangeColor, tag: "React" },
    ]);
  }, []);

  const data = useContext(AppContext);

  const xlMinScreenWidth = 1080;
  const xlMaxScreenWidth = 1280;

  const lgMinScreenWidth = 824;
  const lgMaxScreenWidth = 1079;

  const mdMinScreenWidth = 568;
  const mdMaxScreenWidth = 823;

  const smMinScreenWidth = 300;
  const smMaxScreenWidth = 567;
  const [mobileScreen, setMobileScreen] = useState(false);
  // const profileStart = 1079;
  // const profileEnd = 1;

  const [radius, setRadius] = useState(40);
  useEffect(() => {
    const updateScreenSettings = () => {
      if (
        (window.innerWidth >= lgMinScreenWidth &&
          window.innerWidth <= lgMaxScreenWidth) ||
        (window.innerWidth >= mdMinScreenWidth &&
          window.innerWidth <= mdMaxScreenWidth)
      ) {
        setRadius(30);
        // setMobileScreen(false);
      } else if (
        window.innerWidth >= smMinScreenWidth &&
        window.innerWidth <= smMaxScreenWidth
      ) {
        setRadius(23);
        setMobileScreen(true);
      } else if (
        window.innerWidth >= xlMinScreenWidth &&
        window.innerWidth <= xlMaxScreenWidth
      ) {
        setRadius(28);
        // setMobileScreen(false);
      } else {
        setRadius(40);
        // setMobileScreen(false);
      }
    };

    updateScreenSettings();
    window.addEventListener("resize", updateScreenSettings);
    return () => window.removeEventListener("resize", updateScreenSettings);
  }, []);

  const circumference = 2 * Math.PI * radius;
  const [value1, setValue1] = useState(0);
  const [value2, setValue2] = useState(0);
  const [value3, setValue3] = useState(0);
  const [value4, setValue4] = useState(0);
  setTimeout(() => {
    if (value1 !== 90) {
      setValue1(value1 + 1);
    }
    if (value2 !== 85) {
      setValue2(value2 + 1);
    }
    if (value3 !== 60) {
      setValue3(value3 + 1);
    }
    if (value4 !== 60) {
      setValue4(value4 + 1);
    }
  }, 10);
  const circles = [
    { value: value1, color: "blue", tag: "HTML" },
    { value: value2, color: "green", tag: "CSS" },
    { value: value3, color: "red", tag: "Javascript" },
    { value: value4, color: "purple", tag: "React" },
  ];

  const calculateOffset = (value) => {
    return circumference - (value / 100) * circumference;
  };

  const skills = [
    {
      id: 1,
      title: "Team Work",
    },
    {
      id: 2,
      title: "Communication Skills",
    },
    {
      id: 3,
      title: "Problem Solving",
    },
    {
      id: 4,
      title: "Good thinking to design UI",
    },
    {
      id: 5,
      title: "Development",
    },
  ];
  const hobbies = [
    {
      id: 1,
      title: "Painting",
    },
    {
      id: 2,
      title: "Traveling",
    },
    {
      id: 3,
      title: "Playing cricket",
    },
    {
      id: 4,
      title: "Designing",
    },
  ];

  return (
    <div
      ref={props.reference}
      className={`w-full h-screen p-5 lg:p-2 md:p-2 grid grid-rows-3 grid-flow-col lg:grid-flow-row md:grid-flow-row sm:grid-flow-row gap-[20px] sm:space-y-4 justify-around  ${
        data.mode ? "bg-gray-100" : "bg-[#1f2235]"
      } `}
    >
      {/* {mobileScreen ? ( */}
      <div className="sm:w-full h-auto mx-auto my-auto row-span-1 col-span-2 sm:block hidden ">
        {mobileScreen && (
          <Suspense fallback="Loading...">
            <AboutPopUp btnTitle="About Me" hobbies={hobbies} />
          </Suspense>
        )}
      </div>
      {/* ) : ( */}
      <div
        className={`sm:hidden block rounded-md w-full xl:w-full lg:w-full md:w-full sm:w-full h-full p-5 lg:p-5 md:p-[15px] sm:p-3 md:overflow-y-auto sm:overflow-y-auto my-auto row-span-3 lg:row-span-2 md:row-span-2 
        sm:row-span-1 sm:col-span-2 mx-auto lg:mx-[5px] md:mx-[0px] sm:mx-[0px] ${
          data.mode ? "bg-indigo-100" : "bg-[#313552]"
        } ${data.mode ? "text-slate-800" : "text-white"} lg:overflow-y-scroll `}
      >
        <h1
          id="text"
          className=" text-3xl md:text-2xl sm:text-2xl font-semibold font-stone-400 text-indigo-900  "
        >
          {/* bg-gradient-to-r from-pink-500 to-violet-500 bg-clip-text text-transparent */}
          About me
        </h1>
        <div className="my-[2%] flex md:flex-col justify-between  ">
          <img
            className=" block w-[250px] h-[350px] xl:w-[200px] xl:h-[300px] lg:w-[180px] lg:h-[265px] md:w-[180px] md:h-[250px] rounded-md "
            src={`${process.env.PUBLIC_URL}/Images/profile2.jpg`}
            alt="My profile"
          />
          <div className="w-[calc(100%-5%)] lg:w-full xl:w-full md:w-full mx-[3%] md:mx-[1%] space-y-2  ">
            <h1
              className={`text-xl font-semibold text-black ${
                data.mode ? "text-slate-800" : "text-white"
              } `}
            >
              I Love to do
            </h1>
            {hobbies.map((item) => (
              <div
                id="hobby"
                key={item.id}
                className={`text-lg lg:text-sm font-semibold p-2 border flex justify-between  ${
                  data.mode
                    ? "text-violet-800 border-2 border-violet-600"
                    : "text-yellow-500 border-2 border-amber-500"
                }`}
              >
                {item.title}
                <GradeIcon className="my-auto" />
              </div>
            ))}
          </div>
        </div>
        <p className="my-2 text-[16px] sm:text-sm font-blue-500 leading-8 xl:leading-normal sm:leading-2 xl:tracking-normal tracking-wide sm:tracking-medium text-justify sm:line-clamp-2 md:line-clamp-8">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
          doloremque aperiam nesciunt accusantium sed officiis deserunt dolores
          repellendus sint qui. Porro provident quaerat vero expedita eveniet
          et, rerum accusantium tempore a distinctio unde voluptatum officia ea
          minus veritatis, nulla eligendi consequuntur labore. Eaque,
          consequuntur quo,
        </p>
      </div>
      {/* )} */}
      <div
        className={`rounded-md text-justify w-[800px] xl:w-[520px] lg:w-[320px] md:w-[300px] sm:w-[calc(100%-10px)] h-full  p-5 lg:p-5 md:p-[15px] sm:p-3 md:overflow-y-auto sm:overflow-y-auto my-auto col-span-2 lg:col-span-1 md:col-span-1 sm:col-span-2 row-span-3 sm:row-span-2 lg:row-span-2 md:row-span-2 mx-auto lg:mx-[5px] -sm:mx-auto ${
          data.mode ? "bg-indigo-100" : "bg-[#313552]"
        } ${data.mode ? "text-slate-800" : "text-white"} flex gap-[20px] `}
      >
        <div className="w-full ">
          <h1 className="text-indigo-900 text-3xl md:text-2xl sm:text-2xl font-semibold font-stone-400">
            Why would you hire me?
          </h1>
          {skills.map((item) => (
            <div
              key={item.id}
              className={`my-4 lg:my-2.5 md:my-2.5 text-lg sm:text-sm text-justify  flex flex-col`}
            >
              <div
                className={`text-lg font-semibold p-2 xl:p-1 border-dashed flex justify-between lg:text-md md:text-md sm:w-full ${
                  data.mode
                    ? "text-violet-800 border-2 border-violet-600"
                    : "text-yellow-500 border-2 border-amber-500"
                }`}
              >
                {item.title}
                <SignalCellularAltIcon className="my-auto ml-[8%]" />
              </div>
            </div>
          ))}
        </div>
        {/* Programming skills */}
        <div className="content w-full p-5 rounded-lg border-2 border-indigo-900">
          <h1 className="text-2xl font-semibold text-indigo-00">Skills</h1>
          <div
            className={`w-full sm:w-[calc(100%-10px)] sm:mx-auto rounded-md  ${
              data.mode ? "bg-indigo-100" : "bg-[#313552]"
            } ${data.mode ? "text-slate-800" : "text-black"}`}
          >
            {bars.map((bar) => (
              <div key={bar.tag} className="my-2">
                <div className="flex my-1 justify-between">
                  <span className="font-semibold">{bar.tag}</span>
                  <span className="font-semibold">{bar.value}%</span>
                </div>
                <div className="w-full bg-white h-3 rounded-lg overflow-hidden">
                  <div
                    className="h-full"
                    style={{
                      width: `${bar.value}%`,
                      backgroundColor: bar.color,
                      transition: "width 1s ease",
                    }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Programming skills */}
      {/* <div
        className={`w-full sm:w-[calc(100%-10px)] sm:mx-auto rounded-md row-span-1 lg:row-span-1 col-span-2 sm:row-span-1 sm:col-span-2  grid grid-cols-4 ${
          data.mode ? "bg-indigo-100" : "bg-[#313552]"
        } ${data.mode ? "text-slate-800" : "text-black"}  `}
      >
        <div
          className={`sm:text-sm text-lg col-span-2 grid grid-cols-2 md:mt-4 sm:mt-4 ${
            data.mode ? "text-violet-800" : "text-white"
          }`}
        >
          <p className={` text-center font-semibold col-span-1   `}>HTML</p>
          <p className={`text-center font-semibold col-span-1 `}>CSS</p>
        </div>
        <div
          className={`sm:text-sm text-lg md:mt-4 col-span-2 sm:mt-4 grid grid-cols-2 ${
            data.mode ? "text-violet-800" : "text-white"
          } `}
        >
          <p className={`text-center font-semibold col-span-1 `}>JavaScript</p>
          <p className={`text-center font-semibold  col-span-1 `}>React</p>
        </div>
        {circles.map((circle) => (
          <div
            key={circle.tag}
            className={`col-span-1 sm:col-span-1 rounded-full w-[130px] xl:w-[100px] lg:w-[100px] md:w-[100px] lg:h-[100px] xl:h-[100px] md:h-[100px] sm:w-[70px] h-[130px] sm:h-[70px] mx-auto xl:space-x-3 lg:my-0 md:my-0 my-2 lg:px-[5px] md:p-[5px] sm:p-[6px] flex items-center ${
              data.mode ? "bg-indigo-200" : "bg-[#1f2235]"
            }`}
          >
            <div className="mx-auto flex items-center justify-center w-[90px] xl:w-[65px] xl:h-[65px] h-[90px] lg:w-[80px] lg:h-[80px] md:w-[80px] md:h-[80px] sm:w-[60px] sm:h-[60px]">
              <svg>
                <circle
                  cx="50%"
                  cy="50%"
                  r={radius}
                  stroke={data.mode ? "lightgray" : "darkgray"}
                  strokeWidth="8"
                  fill={data.mode ? "white" : "#d97706"}
                />
                <circle
                  cx="50%"
                  cy="50%"
                  r={radius}
                  stroke={data.mode ? "#313552" : "#facc15"}
                  strokeWidth="8"
                  fill="none"
                  strokeDasharray={circumference}
                  strokeDashoffset={calculateOffset(circle.value)}
                  style={{
                    transition: `stroke-dashoffset 0.5s linear animate-spin`,
                  }}
                />
              </svg>
              <span
                className={`absolute text-center xl:text-lg text-xl md:text-lg sm:text-sm font-bold ${
                  data.mode ? "text-black" : "text-white"
                }`}
              >
                {circle.value}%
              </span>
            </div>
          </div>
        ))}
      </div> */}
    </div>
  );
};

export default Section2;
