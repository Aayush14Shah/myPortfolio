import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../AppContext";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import LightModeIcon from "@mui/icons-material/LightMode";
import MenuIcon from "@mui/icons-material/Menu";

const ToggleMode = (props) => {
  const data = useContext(AppContext);

  return (
    <div className="my-auto ">
      <div className="w-10 h-10 mx-auto my-auto rounded-full hover:bg-indigo-500 ">
        <Tooltip
          arrow
          placement="bottom"
          title={data.mode ? "Dark Mode" : "Light Mode"}
        >
          <IconButton onClick={data.handleSwitch}>
            {data.mode ? (
              <DarkModeIcon className="hover:text-white" />
            ) : (
              <LightModeIcon className="text-white" />
            )}
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
};

export default ToggleMode;
