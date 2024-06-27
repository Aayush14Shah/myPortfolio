import React, { Fragment, useContext, useState, lazy, Suspense } from "react";
import { AppContext } from "./AppContext";
// import SmScreenNav from "./smScreenNav";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";
import CancelIcon from "@mui/icons-material/Cancel";
import Loading from "./richComponents/loading";

const SmScreenNav = lazy(() => import("./smScreenNav"));

const Navbar = (props) => {
  const data = useContext(AppContext);
  const [drawer, setDrawer] = useState(false);

  const handleDrawer = () => {
    setDrawer(!drawer);
    console.log("I am drawer ", drawer);
  };

  return (
    <Fragment>
      <nav
        className={`navbar w-full h-[60px] flex flex-row justify-between ${
          data.mode ? `bg-indigo-100` : "bg-[#1f2235]"
        }  `}
        // fixed top-0 left-0 z-50
      >
        <div className="flex my-auto justify-between">
          <h1
            className={`text-2xl mx-8 sm:mx-6 md:mx-6 py-2 font-semibold ${
              data.mode ? "text-black" : "text-white"
            }  `}
          >
            Portfolio
          </h1>
          <div className="flex sm:flex-col mx-8 md:mx-4 sm:mx-0 space-x-[45px] md:space-x-[20px] my-[1%] sm:invisible visible ">
            <div
              className={`font-semibold text-md underline cursor-pointer decoration-4 underline-offset-8 text-capitalize ${
                data.mode
                  ? "text-indigo-800  decoration-violet-700 hover:text-violet-700 hover:decoration-indigo-600 transition transform ease-in-out delay-100 hover:scale-125"
                  : "text-yellow-300  decoration-amber-500 hover:text-yellow-500 hover:decoration-amber-300 transition transform ease-in-out delay-100 hover:scale-125 "
              } `}
              onClick={() => data.scrollHandler(data.index)}
            >
              Home
            </div>
            <div
              className={`font-semibold text-md underline cursor-pointer decoration-4 underline-offset-8 text-capitalize ${
                data.mode
                  ? "text-indigo-800  decoration-violet-700 hover:text-violet-700 hover:decoration-indigo-600 transition transform ease-in-out delay-100 hover:scale-125 "
                  : "text-yellow-300  decoration-amber-500 hover:text-yellow-500 hover:decoration-amber-300 transition transform ease-in-out delay-100 hover:scale-125 "
              } `}
              onClick={() => data.scrollHandler(data.about)}
            >
              About
            </div>
            <div
              className={`font-semibold text-md underline cursor-pointer decoration-4 underline-offset-8 text-capitalize ${
                data.mode
                  ? "text-indigo-800  decoration-violet-700 hover:text-violet-700 hover:decoration-indigo-600 transition transform ease-in-out delay-100 hover:scale-125 "
                  : "text-yellow-300  decoration-amber-500 hover:text-yellow-500 hover:decoration-amber-300 transition transform ease-in-out delay-100 hover:scale-125 "
              } `}
              onClick={() => data.scrollHandler(data.project)}
            >
              Projects
            </div>
            <div
              className={`font-semibold text-md underline cursor-pointer decoration-4 underline-offset-8 text-capitalize ${
                data.mode
                  ? "text-indigo-800  decoration-violet-700 hover:text-violet-700 hover:decoration-indigo-600 transition transform ease-in-out delay-100 hover:scale-125 "
                  : "text-yellow-300  decoration-amber-500 hover:text-yellow-500 hover:decoration-amber-300 transition transform ease-in-out delay-100 hover:scale-125 "
              } `}
              onClick={() => data.scrollHandler(data.contact)}
            >
              Contact
            </div>
          </div>
        </div>
        <div className="w-10 h-10 mx-5  my-auto rounded-full hover:bg-indigo-500 invisible sm:visible absolute right-0 top-2 ">
          {/* {mobileScreen ? ( */}
          <Tooltip
            arrow
            placement="bottom"
            title={data.mode ? "Dark Mode" : "Light Mode"}
          >
            <IconButton onClick={handleDrawer}>
              {drawer ? (
                <CancelIcon
                  className={`${
                    data.mode ? "text-indigo-800" : "text-amber-500"
                  }`}
                />
              ) : (
                <MenuIcon
                  className={`${
                    data.mode ? "text-indigo-800" : "text-amber-500"
                  }`}
                />
              )}
            </IconButton>
          </Tooltip>
        </div>
        {/* ) : ( */}
        <div className="w-10 h-10 mx-5 my-auto rounded-full hover:bg-indigo-500 sm:invisible visible">
          <Tooltip
            arrow
            placement="bottom"
            title={data.mode ? "Dark Mode" : "Light Mode"}
          >
            <IconButton onClick={data.handleSwitch} className={``}>
              {data.mode ? (
                <DarkModeIcon className="hover:text-white" />
              ) : (
                <LightModeIcon className="text-white" />
              )}
            </IconButton>
          </Tooltip>
        </div>

        {/* )} */}
      </nav>
      {drawer && (
        <Suspense>
          <SmScreenNav />
        </Suspense>
      )}
      {/* <SmScreenNav /> */}
    </Fragment>
  );
};

export default Navbar;
