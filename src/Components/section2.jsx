"use client"

import { useContext, useEffect, useState } from "react"
import { AppContext } from "./AppContext"
import GradeIcon from "@mui/icons-material/Grade"
import SignalCellularAltIcon from "@mui/icons-material/SignalCellularAlt"

const Section2 = (props) => {
  const defaultRangeColor = "#4F46E5"
  // Enhanced colors for dark theme
  const darkThemeColor = "#6366F1" // Brighter indigo for dark theme
  const data = useContext(AppContext)

  // Progress bars state
  const [bars, setBars] = useState([
    { value: 0, finalValue: 95, color: defaultRangeColor, tag: "HTML" },
    { value: 0, finalValue: 85, color: defaultRangeColor, tag: "CSS" },
    { value: 0, finalValue: 60, color: defaultRangeColor, tag: "Javascript" },
    { value: 0, finalValue: 60, color: defaultRangeColor, tag: "React" },
  ])

  // Circular progress state
  const [value1, setValue1] = useState(0)
  const [value2, setValue2] = useState(0)
  const [value3, setValue3] = useState(0)
  const [value4, setValue4] = useState(0)

  const circles = [
    { value: value1, color: data.mode ? defaultRangeColor : darkThemeColor, tag: "HTML" },
    { value: value2, color: data.mode ? defaultRangeColor : darkThemeColor, tag: "CSS" },
    { value: value3, color: data.mode ? defaultRangeColor : darkThemeColor, tag: "Javascript" },
    { value: value4, color: data.mode ? defaultRangeColor : darkThemeColor, tag: "React" },
  ]

  // Responsive radius for circular progress - ADJUSTED FOR SMALL SCREENS
  const [radius, setRadius] = useState(30)
  useEffect(() => {
    const updateRadius = () => {
      if (window.innerWidth <= 567) {
        setRadius(20) // sm - increased for better visibility
      } else if (window.innerWidth >= 568 && window.innerWidth <= 823) {
        setRadius(24) // md - increased for better visibility
      } else if (window.innerWidth >= 824 && window.innerWidth <= 1079) {
        setRadius(25) // lg
      } else if (window.innerWidth >= 1080 && window.innerWidth <= 1280) {
        setRadius(28) // xl
      } else {
        setRadius(30) // default
      }
    }
    updateRadius()
    window.addEventListener("resize", updateRadius)
    return () => window.removeEventListener("resize", updateRadius)
  }, [])

  // Animate progress bars
  useEffect(() => {
    const animateBars = setTimeout(() => {
      setBars((prevBars) =>
        prevBars.map((bar) => ({
          ...bar,
          value: Math.min(bar.value + 1, bar.finalValue),
        })),
      )
    }, 10)
    return () => clearTimeout(animateBars)
  }, [bars])

  // Animate circular progress
  useEffect(() => {
    const animateCircles = setTimeout(() => {
      if (value1 !== 90) setValue1(value1 + 1)
      if (value2 !== 85) setValue2(value2 + 1)
      if (value3 !== 60) setValue3(value3 + 1)
      if (value4 !== 60) setValue4(value4 + 1)
    }, 10)
    return () => clearTimeout(animateCircles)
  }, [value1, value2, value3, value4])

  const circumference = 2 * Math.PI * radius
  const calculateOffset = (value) => {
    return circumference - (value / 100) * circumference
  }

  // Skills and hobbies data
  const skills = [
    {
      id: 1,
      title: "Team Collaboration",
      description:
        "Proven ability to work effectively in teams, fostering synergy and achieving project goals through cooperation.",
    },
    {
      id: 2,
      title: "Effective Communication",
      description:
        "Skilled in articulating ideas clearly, ensuring seamless interaction with stakeholders and team members.",
    },
    {
      id: 3,
      title: "Problem Solving",
      description: "Adept at identifying challenges and implementing innovative solutions to drive project success.",
    },
    {
      id: 4,
      title: "UI/UX Design Proficiency",
      description:
        "Experienced in crafting intuitive and visually appealing user interfaces for enhanced user experiences.",
    },
    {
      id: 5,
      title: "Web Development",
      description: "Proficient in building responsive, high-quality web applications using modern technologies.",
    },
  ]

  const hobbies = [
    {
      id: 1,
      title: "Painting",
      description:
        "Passionate about creating art, which enhances my creativity and attention to detail in design work.",
    },
    {
      id: 2,
      title: "Traveling",
      description: "Exploring new places inspires me to bring diverse perspectives into my projects.",
    },
    {
      id: 3,
      title: "Playing Cricket",
      description: "Team sports like cricket have taught me leadership and teamwork skills.",
    },
    {
      id: 4,
      title: "Designing",
      description: "I enjoy experimenting with digital design, which fuels my UI/UX creativity.",
    },
  ]

  return (
    <div
      ref={props.reference}
      className={`w-full min-h-screen sm:p-2 md:p-3 lg:p-4 xl:p-6 p-6 sm:flex sm:flex-col md:flex md:flex-col lg:flex lg:flex-col xl:flex xl:flex-col flex flex-row sm:gap-4 md:gap-6 lg:gap-8 xl:gap-10 gap-8 ${
        data.mode ? "bg-gray-100" : "bg-[#1f2235]"
      }`}
    >
      {/* About Me Section (Left Half for >1280px) */}
      <div
        className={`sm:w-full md:w-full lg:w-full xl:w-full w-1/2 rounded-md sm:p-2 md:p-3 lg:p-4 xl:p-6 p-5 ${
          data.mode ? "bg-indigo-100" : "bg-[#313552]"
        } ${data.mode ? "text-gray-800" : "text-gray-100"} flex flex-col sm:gap-2 md:gap-3 lg:gap-4 xl:gap-6 gap-5`}
      >
        <h1
          className={`sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl text-3xl font-bold ${
            data.mode ? "text-indigo-600" : "text-indigo-400"
          } mb-2`}
        >
          About Me
        </h1>
        <div className="sm:flex-col md:flex-row lg:flex-row xl:flex-row flex-row sm:gap-2 md:gap-4 lg:gap-5 xl:gap-6 gap-6 flex">
          <div className="flex-shrink-0">
            <img
              className="sm:w-32 sm:h-48 md:w-36 md:h-52 lg:w-40 lg:h-56 xl:w-48 xl:h-64 w-44 h-64 rounded-lg object-cover"
              src={`${process.env.PUBLIC_URL}/Images/profile2.jpg`}
              alt="My profile"
            />
          </div>
          <div className="flex-1 flex flex-col sm:gap-2 md:gap-4 lg:gap-5 xl:gap-6 gap-4 justify-between">
            <p className="sm:text-xs md:text-sm lg:text-base xl:text-lg text-base leading-relaxed text-justify">
              I'm a passionate web developer with a knack for creating intuitive, user-friendly applications. With
              expertise in HTML, CSS, Javascript, and React, I thrive on solving complex problems and delivering
              high-quality solutions. My journey in tech began with a curiosity for coding, which evolved into a
              full-fledged career where I've honed my skills through hands-on projects and continuous learning.
            </p>
            <div className="sm:space-y-1 md:space-y-2 lg:space-y-3 xl:space-y-3 space-y-2 flex-grow">
              <h2
                className={`sm:text-sm md:text-base lg:text-lg xl:text-xl text-lg font-semibold ${
                  data.mode ? "text-gray-800" : "text-gray-100"
                }`}
              >
                My Interests
              </h2>
              {/* Linear layout for all screen sizes */}
              <div className="flex flex-col space-y-2 md:grid md:grid-cols-2 md:gap-2 md:space-y-0 lg:grid lg:grid-cols-2 lg:gap-2 lg:space-y-0 xl:grid xl:grid-cols-2 xl:gap-2 xl:space-y-0">
                {hobbies.map((item) => (
                  <div
                    key={item.id}
                    className={`sm:text-xs md:text-sm lg:text-base xl:text-lg text-sm font-medium sm:p-1 md:p-2 lg:p-3 xl:p-3 p-2 rounded-lg flex justify-between items-center ${
                      data.mode
                        ? "text-indigo-700 bg-indigo-50 border border-indigo-200"
                        : "text-yellow-300 bg-gray-800 border border-yellow-500" // Enhanced dark theme colors
                    }`}
                  >
                    <div>
                      <p>{item.title}</p>
                      <p
                        className={`sm:text-[10px] md:text-xs lg:text-sm xl:text-base text-xs ${
                          data.mode ? "text-gray-600" : "text-gray-200" // Improved contrast in dark mode
                        }`}
                      >
                        {item.description}
                      </p>
                    </div>
                    <GradeIcon
                      className={`sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-6 xl:h-6 w-5 h-5 flex-shrink-0 ml-1 ${
                        data.mode ? "text-indigo-600" : "text-yellow-300" // Enhanced icon color in dark mode
                      }`}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Section (Right Half for >1280px) */}
      <div
        className={`sm:w-full md:w-full lg:w-full xl:w-full w-1/2 rounded-md sm:p-2 md:p-3 lg:p-4 xl:p-6 p-5 ${
          data.mode ? "bg-indigo-100" : "bg-[#313552]"
        } ${data.mode ? "text-gray-800" : "text-gray-100"} flex flex-col sm:gap-2 md:gap-3 lg:gap-4 xl:gap-6 gap-5`}
      >
        <h1
          className={`sm:text-xl md:text-2xl lg:text-3xl xl:text-3xl text-3xl font-bold ${
            data.mode ? "text-indigo-600" : "text-indigo-400"
          } mb-2`}
        >
          Why Hire Me?
        </h1>
        <div className="grid grid-cols-1 sm:gap-1 md:gap-2 lg:gap-3 xl:gap-3 gap-2 flex-grow">
          {skills.map((item) => (
            <div
              key={item.id}
              className={`sm:text-xs md:text-sm lg:text-base xl:text-lg text-sm font-medium sm:p-1 md:p-2 lg:p-3 xl:p-3 p-2 rounded-lg flex justify-between items-center ${
                data.mode
                  ? "text-indigo-700 bg-indigo-50 border border-indigo-200"
                  : "text-yellow-300 bg-gray-800 border border-yellow-500" // Enhanced dark theme colors
              }`}
            >
              <div>
                <p>{item.title}</p>
                <p
                  className={`sm:text-[10px] md:text-xs lg:text-sm xl:text-base text-xs ${
                    data.mode ? "text-gray-600" : "text-gray-200" // Improved contrast in dark mode
                  }`}
                >
                  {item.description}
                </p>
              </div>
              <SignalCellularAltIcon
                className={`sm:w-4 sm:h-4 md:w-5 md:h-5 lg:w-6 lg:h-6 xl:w-6 xl:h-6 w-5 h-5 flex-shrink-0 ml-1 ${
                  data.mode ? "text-indigo-600" : "text-yellow-300" // Enhanced icon color in dark mode
                }`}
              />
            </div>
          ))}
        </div>

        {/* Technical Skills with Circular Progress - IMPROVED FOR SMALL SCREENS */}
        <div
          className={`sm:p-3 md:p-4 lg:p-4 xl:p-4 p-4 rounded-lg border-2 mt-auto ${
            data.mode ? "border-indigo-600" : "border-indigo-400" // Enhanced border color in dark mode
          }`}
        >
          <h2
            className={`sm:text-base md:text-lg lg:text-lg xl:text-xl text-lg font-semibold ${
              data.mode ? "text-indigo-600" : "text-indigo-300" // Brighter heading in dark mode
            } sm:mb-3 md:mb-4 lg:mb-4 xl:mb-4 mb-4`}
          >
            Technical Skills
          </h2>

          {/* Optimized layout for small screens - 1 column for sm, 2 columns for md */}
          <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 xl:grid-cols-4 grid-cols-4 sm:gap-6 md:gap-6 lg:gap-4 xl:gap-4 gap-4 justify-items-center">
            {circles.map((circle) => (
              <div key={circle.tag} className="sm:hidden flex flex-col items-center justify-center sm:mb-2 md:mb-2">
                {/* Increased sizes specifically for small screens */}
                <div className={`relative sm:w-24 sm:h-24 md:w-24 md:h-24 lg:w-24 lg:h-24 xl:w-28 xl:h-28 w-28 h-28 ${data.mode ? "lightgray" : "lightgray"}`}>
                  <svg className="w-full h-full" viewBox="0 0 100 100">
                    <circle
                      cx="50"
                      cy="50"
                      r={radius}
                      stroke={data.mode ? "lightgray" : "lightgray"} // Darker background circle in dark mode
                      strokeWidth="8"
                      fill="transparent"
                      strokeLinecap="round"
                    />
                    <circle
                      cx="50"
                      cy="50"
                      r={radius}
                      stroke={circle.color}
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={circumference}
                      strokeDashoffset={calculateOffset(circle.value)}
                      style={{ transition: "stroke-dashoffset 0.5s linear" }}
                      strokeLinecap="round"
                    />
                    {/* Increased text size for small screens */}
                    <text
                      x="50"
                      y="50"
                      textAnchor="middle"
                      dy=".3em"
                      className={`sm:text-[14px] md:text-[14px] lg:text-[14px] xl:text-[16px] text-[16px] font-bold ${
                        data.mode ? "text-gray-800" : "text-gray-100"
                      }`}
                    >
                      {circle.value}%
                    </text>
                  </svg>
                </div>
                {/* Increased tag text size for small screens */}
                <p
                  className={`text-center sm:text-sm md:text-sm lg:text-base xl:text-base text-base mt-2 font-medium ${
                    data.mode ? "text-gray-800" : "text-gray-100"
                  }`}
                >
                  {circle.tag}
                </p>
              </div>
            ))}
            <div className="sm:block hidden flex flex-col gap-4 w-full">
              {bars.map((bar, index) => (
                <div key={index}>
                  <span className="text-sm font-medium">{bar.tag}</span>
                  <div className="w-full bg-gray-300 rounded-full h-2.5 dark:bg-gray-500">
                    <div
                      className="h-2.5 rounded-full"
                      style={{
                        width: `${bar.value}%`,
                        backgroundColor: bar.color,
                        transition: "width 0.3s ease-in-out",
                      }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Section2
