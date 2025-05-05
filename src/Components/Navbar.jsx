"use client"

import { Fragment, useContext, useState, lazy, Suspense } from "react"
import { AppContext } from "./AppContext"
import IconButton from "@mui/material/IconButton"
import Tooltip from "@mui/material/Tooltip"
import DarkModeIcon from "@mui/icons-material/DarkMode"
import LightModeIcon from "@mui/icons-material/LightMode"
import MenuIcon from "@mui/icons-material/Menu"
import CancelIcon from "@mui/icons-material/Cancel"
import Loading from "./richComponents/loading"

const SmScreenNav = lazy(() => import("./smScreenNav"))

const Navbar = (props) => {
  const data = useContext(AppContext)
  const [drawer, setDrawer] = useState(false)

  const handleDrawer = () => {
    setDrawer(!drawer)
  }

  return (
    <Fragment>
      <nav
        className={`navbar w-full h-[60px] flex flex-row justify-between ${
          data.mode ? `bg-indigo-100` : "bg-[#1f2235] border-b border-gray-50"
        }`}
      >
        <div className="flex my-auto justify-between">
          {/* Logo - Default styling for all screens with specific adjustments */}
          <h1
            className={`text-2xl mx-8 py-2 font-semibold ${
              data.mode ? "text-black" : "text-white"
            } sm:mx-4 md:mx-6 lg:mx-8`}
          >
            Portfolio
          </h1>

          {/* Desktop Navigation - Default styling for desktop, hidden on small screens */}
          <div className="flex mx-8 space-x-[45px] my-[1%] sm:hidden md:flex md:space-x-[20px] md:mx-4 lg:space-x-[35px] lg:mx-6 xl:space-x-[45px] xl:mx-8">
            <div
              className={`font-semibold text-md underline cursor-pointer decoration-4 underline-offset-8 text-capitalize ${
                data.mode
                  ? "text-indigo-800 decoration-violet-700 hover:text-violet-700 hover:decoration-indigo-600 transition transform ease-in-out delay-100 hover:scale-110"
                  : "text-yellow-300 decoration-amber-500 hover:text-yellow-500 hover:decoration-amber-300 transition transform ease-in-out delay-100 hover:scale-110"
              }`}
              onClick={() => data.scrollHandler(data.index)}
            >
              Home
            </div>
            <div
              className={`font-semibold text-md underline cursor-pointer decoration-4 underline-offset-8 text-capitalize ${
                data.mode
                  ? "text-indigo-800 decoration-violet-700 hover:text-violet-700 hover:decoration-indigo-600 transition transform ease-in-out delay-100 hover:scale-110"
                  : "text-yellow-300 decoration-amber-500 hover:text-yellow-500 hover:decoration-amber-300 transition transform ease-in-out delay-100 hover:scale-110"
              }`}
              onClick={() => data.scrollHandler(data.about)}
            >
              About
            </div>
            <div
              className={`font-semibold text-md underline cursor-pointer decoration-4 underline-offset-8 text-capitalize ${
                data.mode
                  ? "text-indigo-800 decoration-violet-700 hover:text-violet-700 hover:decoration-indigo-600 transition transform ease-in-out delay-100 hover:scale-110"
                  : "text-yellow-300 decoration-amber-500 hover:text-yellow-500 hover:decoration-amber-300 transition transform ease-in-out delay-100 hover:scale-110"
              }`}
              onClick={() => data.scrollHandler(data.project)}
            >
              Projects
            </div>
            <div
              className={`font-semibold text-md underline cursor-pointer decoration-4 underline-offset-8 text-capitalize ${
                data.mode
                  ? "text-indigo-800 decoration-violet-700 hover:text-violet-700 hover:decoration-indigo-600 transition transform ease-in-out delay-100 hover:scale-110"
                  : "text-yellow-300 decoration-amber-500 hover:text-yellow-500 hover:decoration-amber-300 transition transform ease-in-out delay-100 hover:scale-110"
              }`}
              onClick={() => data.scrollHandler(data.contact)}
            >
              Contact
            </div>
          </div>
        </div>

        {/* Mobile Menu Button - Only visible on small screens */}
        <div className="hidden sm:block sm:absolute sm:right-0 sm:top-2">
          <Tooltip arrow placement="bottom" title={drawer ? "Close Menu" : "Open Menu"}>
            <IconButton onClick={handleDrawer} className="mr-2">
              {drawer ? (
                <CancelIcon className={`${data.mode ? "text-indigo-800" : "text-amber-500"}`} />
              ) : (
                <MenuIcon className={`${data.mode ? "text-indigo-800" : "text-amber-500"}`} />
              )}
            </IconButton>
          </Tooltip>
        </div>

        {/* Theme Toggle - Default for desktop, hidden on small screens */}
        <div className="w-10 h-10 mx-5 my-auto rounded-full hover:bg-indigo-500 sm:hidden">
          <Tooltip arrow placement="bottom" title={data.mode ? "Dark Mode" : "Light Mode"}>
            <IconButton onClick={data.handleSwitch}>
              {data.mode ? (
                <DarkModeIcon className="hover:text-indigo-800" />
              ) : (
                <LightModeIcon className="text-white hover:text-yellow-300" />
              )}
            </IconButton>
          </Tooltip>
        </div>
      </nav>

      {/* Mobile Navigation Drawer */}
      {drawer && (
        <Suspense fallback={<Loading />}>
          <SmScreenNav closeDrawer={() => setDrawer(false)} />
        </Suspense>
      )}
    </Fragment>
  )
}

export default Navbar
