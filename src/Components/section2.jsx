import React, { useContext, useEffect, useState, lazy, Suspense } from "react";
import { AppContext } from "./AppContext";
import GradeIcon from "@mui/icons-material/Grade";
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt";

const AboutPopUp = lazy(() => import("./aboutPopUp"));

const Section2 = (props) => {
  const defaultRangeColor = "#4F46E5";
  const [bars, setBars] = useState([
    { value: 0, finalValue: 95, color: defaultRangeColor, tag: "HTML" },
    { value: 0, finalValue: 85, color: defaultRangeColor, tag: "CSS" },
    { value: 0, finalValue: 60, color: defaultRangeColor, tag: "Javascript" },
    { value: 0, finalValue: 60, color: defaultRangeColor, tag: "React" },
  ]);

  useEffect(() => {
    const animateBars = setTimeout(() => {
      setBars((prevBars) =>
        prevBars.map((bar) => ({
          ...bar,
          value: Math.min(bar.value + 1, bar.finalValue),
        }))
      );
    }, 10);
    return () => clearTimeout(animateBars);
  }, [bars]);

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
  const [radius, setRadius] = useState(30);

  useEffect(() => {
    const updateScreenSettings = () => {
      if (
        (window.innerWidth >= lgMinScreenWidth &&
          window.innerWidth <= lgMaxScreenWidth) ||
        (window.innerWidth >= mdMinScreenWidth &&
          window.innerWidth <= mdMaxScreenWidth)
      ) {
        setRadius(25);
      } else if (
        window.innerWidth >= smMinScreenWidth &&
        window.innerWidth <= smMaxScreenWidth
      ) {
        setRadius(20);
        setMobileScreen(true);
      } else if (
        window.innerWidth >= xlMinScreenWidth &&
        window.innerWidth <= xlMaxScreenWidth
      ) {
        setRadius(28);
      } else {
        setRadius(30);
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

  useEffect(() => {
    const animateCircles = setTimeout(() => {
      if (value1 !== 90) setValue1(value1 + 1);
      if (value2 !== 85) setValue2(value2 + 1);
      if (value3 !== 60) setValue3(value3 + 1);
      if (value4 !== 60) setValue4(value4 + 1);
    }, 10);
    return () => clearTimeout(animateCircles);
  }, [value1, value2, value3, value4]);

  const circles = [
    { value: value1, color: defaultRangeColor, tag: "HTML" },
    { value: value2, color: defaultRangeColor, tag: "CSS" },
    { value: value3, color: defaultRangeColor, tag: "Javascript" },
    { value: value4, color: defaultRangeColor, tag: "React" },
  ];

  const calculateOffset = (value) => {
    return circumference - (value / 100) * circumference;
  };

  const skills = [
    { id: 1, title: "Team Collaboration", description: "Proven ability to work effectively in teams, fostering synergy and achieving project goals through cooperation." },
    { id: 2, title: "Effective Communication", description: "Skilled in articulating ideas clearly, ensuring seamless interaction with stakeholders and team members." },
    { id: 3, title: "Problem Solving", description: "Adept at identifying challenges and implementing innovative solutions to drive project success." },
    { id: 4, title: "UI/UX Design Proficiency", description: "Experienced in crafting intuitive and visually appealing user interfaces for enhanced user experiences." },
    { id: 5, title: "Web Development", description: "Proficient in building responsive, high-quality web applications using modern technologies." },
  ];

  const hobbies = [
    { id: 1, title: "Painting", description: "Passionate about creating art, which enhances my creativity and attention to detail in design work." },
    { id: 2, title: "Traveling", description: "Exploring new places inspires me to bring diverse perspectives into my projects." },
    { id: 3, title: "Playing Cricket", description: "Team sports like cricket have taught me leadership and teamwork skills." },
    { id: 4, title: "Designing", description: "I enjoy experimenting with digital design, which fuels my UI/UX creativity." },
  ];

  return (
    <div
      ref={props.reference}
      className={`w-full h-screen p-5 lg:p-3 md:p-3 sm:p-2 grid grid-rows-3 grid-flow-col lg:grid-flow-row md:grid-flow-row sm:grid-flow-row gap-4 sm:gap-2 justify-around ${
        data.mode ? "bg-gray-100" : "bg-[#1f2235]"
      }`}
    >
      {/* Mobile About PopUp */}
      <div className="sm:w-full h-auto mx-auto my-auto row-span-1 col-span-2 sm:block hidden">
        {mobileScreen && (
          <Suspense fallback="Loading...">
            <AboutPopUp btnTitle="About Me" hobbies={hobbies} />
          </Suspense>
        )}
      </div>

      {/* About Me Section */}
      <div
        className={`sm:hidden block rounded-md w-full h-full p-5 lg:p-4 md:p-3 sm:p-2 row-span-3 lg:row-span-2 md:row-span-2 sm:row-span-1 sm:col-span-2 mx-auto ${
          data.mode ? "bg-indigo-100" : "bg-[#313552]"
        } ${data.mode ? "text-gray-800" : "text-gray-100"} flex flex-col gap-4`}
      >
        <h1
          className={`text-4xl md:text-3xl sm:text-2xl font-bold ${
            data.mode ? "text-indigo-600" : "text-indigo-400"
          } mb-3`}
        >
          About Me
        </h1>
        <div className="flex flex-col gap-4 flex-1">
          <div className="flex md:flex-col gap-4">
            <div className="flex-shrink-0">
              <img
                className="w-[200px] h-[280px] xl:w-[180px] xl:h-[260px] lg:w-[160px] lg:h-[240px] md:w-[160px] md:h-[220px] rounded-lg object-cover"
                src={`${process.env.PUBLIC_URL}/Images/profile2.jpg`}
                alt="My profile"
              />
            </div>
            <div className="flex-1 space-y-2">
              <h2
                className={`text-xl font-semibold ${
                  data.mode ? "text-gray-800" : "text-gray-100"
                }`}
              >
                My Interests
              </h2>
              {hobbies.map((item) => (
                <div
                  key={item.id}
                  className={`text-[14px] lg:text-sm font-medium p-2 rounded-lg flex justify-between items-center ${
                    data.mode
                      ? "text-indigo-700 bg-indigo-50 border border-indigo-200"
                      : "text-yellow-400 bg-gray-700 border border-yellow-500"
                  }`}
                >
                  <div>
                    <p>{item.title}</p>
                    <p className={`text-sm ${data.mode ? "text-gray-600" : "text-gray-300"}`}>{item.description}</p>
                  </div>
                  <GradeIcon className="my-auto" />
                </div>
              ))}
            </div>
          </div>
          <div className="mt-1 flex-1">
            <p className="text-[14px] sm:text-sm leading-relaxed text-justify">
              I’m a passionate web developer with a knack for creating intuitive, user-friendly applications. With expertise in HTML, CSS, Javascript, and React, I thrive on solving complex problems and delivering high-quality solutions. My journey in tech began with a curiosity for coding, which evolved into a full-fledged career where I’ve honed my skills through hands-on projects and continuous learning.
            </p>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div
        className={`rounded-md w-[800px] xl:w-[520px] lg:w-[320px] md:w-[300px] sm:w-full h-full p-5 lg:p-4 md:p-3 sm:p-2 my-auto col-span-2 lg:col-span-1 md:col-span-1 sm:col-span-2 row-span-3 sm:row-span-2 lg:row-span-2 md:row-span-2 mx-auto ${
          data.mode ? "bg-indigo-100" : "bg-[#313552]"
        } ${data.mode ? "text-gray-800" : "text-gray-100"} flex flex-col gap-3`}
      >
        <div className="w-full flex-1">
          <h1
            className={`text-4xl md:text-3xl sm:text-2xl font-bold ${
              data.mode ? "text-indigo-600" : "text-indigo-400"
            } mb-3`}
          >
            Why Hire Me?
          </h1>
          <div className="space-y-0.5">
            {skills.map((item) => (
              <div key={item.id} className="my-0">
                <div
                  className={`text-base lg:text-sm font-medium p-2 rounded-lg flex justify-between items-center ${
                    data.mode
                      ? "text-indigo-700 bg-indigo-50 border border-indigo-200"
                      : "text-yellow-400 bg-gray-700 border border-yellow-500"
                  }`}
                >
                  <div>
                    <p>{item.title}</p>
                    <p className={`text-sm ${data.mode ? "text-gray-600" : "text-gray-300"}`}>{item.description}</p>
                  </div>
                  <SignalCellularAltIcon className="my-auto" />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Technical Skills with Circular Progress */}
        <div className="w-full h-[300px] p-1 rounded-lg border-2 border-indigo-600">
          <h2 className={`mx-[2%] text-xl font-semibold ${data.mode ? "text-indigo-600" : "text-indigo-400"} mb-1`}>Technical Skills</h2>
          <div className="mt-[2%] grid grid-cols-4 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-2 gap-1 justify-items-center">
            {circles.map((circle) => (
              <div
                key={circle.tag}
                className={`flex flex-col items-center justify-center xl:w-[60px] xl:h-[80px] lg:w-[50px] lg:h-[70px] md:w-[50px] md:h-[70px] sm:w-[40px] sm:h-[60px]`}
              >
                <div className="relative w-[85px] h-[85px] xl:w-[50px] xl:h-[50px] lg:w-[40px] lg:h-[40px] sm:w-[30px] sm:h-[30px]">
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      stroke={data.mode ? "lightgray" : "darkgray"}
                      strokeWidth="10"
                      fill="transparent"
                      strokeLinecap="round"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r="45"
                      stroke={circle.color}
                      strokeWidth="10"
                      fill="none"
                      strokeDasharray={2 * Math.PI * 40}
                      strokeDashoffset={calculateOffset(circle.value) * (40 / radius)}
                      style={{
                        transition: "stroke-dashoffset 0.5s linear",
                      }}
                      strokeLinecap="round"
                    />
                    <text
                      x="50"
                      y="50"
                      textAnchor="middle"
                      dy=".3em"
                      className={`text-[20px] lg:text-[10px] sm:text-[8px] font-bold ${
                        data.mode ? "text-gray-800" : "text-gray-100"
                      }`}
                    >
                      {circle.value}%
                    </text>
                  </svg>
                </div>
                <p className="text-center text-xs lg:text-[10px] sm:text-[8px] mt-1">{circle.tag}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;