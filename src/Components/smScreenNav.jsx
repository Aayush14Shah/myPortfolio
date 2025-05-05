"use client"

import { useContext } from "react"
import { AppContext } from "./AppContext"
import IconButton from "@mui/material/IconButton"
import Tooltip from "@mui/material/Tooltip"
import DarkModeIcon from "@mui/icons-material/DarkMode"
import LightModeIcon from "@mui/icons-material/LightMode"

const SmScreenNav = ({ closeDrawer }) => {
  const data = useContext(AppContext)

  const handleNavClick = (scrollTarget) => {
    data.scrollHandler(scrollTarget)
    closeDrawer && closeDrawer()
  }

  return (
    <div className={`w-full ${data.mode ? "" : "bg-[#1f2235]"} py-[3%]`}>
      <div
        className={`p-[4%] rounded-md w-[calc(100%-8%)] mx-auto ${
          data.mode ? `bg-indigo-100 shadow-md shadow-indigo-300/90` : "bg-[#313552] shadow-md shadow-slate-600/60"
        } animate-navAppear`}
      >
        {/* Navigation Grid - Better structure for small screens */}
        <div className="grid grid-cols-2 gap-4 mb-4">
          <div
            className={`font-semibold text-lg underline cursor-pointer decoration-4 underline-offset-8 text-capitalize ${
              data.mode
                ? "text-indigo-800 decoration-violet-700 hover:text-violet-700 hover:decoration-indigo-600"
                : "text-yellow-300 decoration-amber-500 hover:text-yellow-500 hover:decoration-amber-300"
            }`}
            onClick={() => handleNavClick(data.index)}
          >
            Home
          </div>
          <div
            className={`font-semibold text-lg underline cursor-pointer decoration-4 underline-offset-8 text-capitalize ${
              data.mode
                ? "text-indigo-800 decoration-violet-700 hover:text-violet-700 hover:decoration-indigo-600"
                : "text-yellow-300 decoration-amber-500 hover:text-yellow-500 hover:decoration-amber-300"
            }`}
            onClick={() => handleNavClick(data.about)}
          >
            About
          </div>
          <div
            className={`font-semibold text-lg underline cursor-pointer decoration-4 underline-offset-8 text-capitalize ${
              data.mode
                ? "text-indigo-800 decoration-violet-700 hover:text-violet-700 hover:decoration-indigo-600"
                : "text-yellow-300 decoration-amber-500 hover:text-yellow-500 hover:decoration-amber-300"
            }`}
            onClick={() => handleNavClick(data.project)}
          >
            Projects
          </div>
          <div
            className={`font-semibold text-lg underline cursor-pointer decoration-4 underline-offset-8 text-capitalize ${
              data.mode
                ? "text-indigo-800 decoration-violet-700 hover:text-violet-700 hover:decoration-indigo-600"
                : "text-yellow-300 decoration-amber-500 hover:text-yellow-500 hover:decoration-amber-300"
            }`}
            onClick={() => handleNavClick(data.contact)}
          >
            Contact
          </div>
        </div>

        {/* Theme Toggle */}
        <div className="flex justify-end">
          <Tooltip arrow placement="bottom" title={data.mode ? "Dark Mode" : "Light Mode"}>
            <IconButton onClick={data.handleSwitch} className="mr-2">
              {data.mode ? (
                <DarkModeIcon className="text-indigo-800 hover:text-indigo-600" />
              ) : (
                <LightModeIcon className="text-yellow-300 hover:text-yellow-500" />
              )}
            </IconButton>
          </Tooltip>
        </div>
      </div>
    </div>
  )
}

export default SmScreenNav
