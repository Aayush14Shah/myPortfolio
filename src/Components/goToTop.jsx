import React, { useContext } from "react";
import { AppContext } from "./AppContext";
import KeyboardDoubleArrowUpIcon from "@mui/icons-material/KeyboardDoubleArrowUp"; // Import the icon

const GoToTop = (props) => {
  const data = useContext(AppContext);
  return (
    <div
      ref={props.reference}
      className={`fixed right-5 bottom-5 w-[60px] h-[60px] rounded-full flex items-center justify-center ${
        props.show ? "visible" : "invisible"
      }`}
    >
      <div
        className={`w-[50px] h-[50px] animate-pulse  rounded-full border-2 cursor-pointer flex items-center justify-center ${
          data.mode
            ? "bg-violet-300  border-violet-200 hover:bg-violet-400"
            : "bg-orange-400  border-orange-300 hover:bg-orange-500"
        } `}
        onClick={() => props.scrollToTop(data.onTop)}
      >
        <KeyboardDoubleArrowUpIcon
          className={`${data.mode ? "text-violet-800" : "text-white-900"}`}
        />
      </div>
    </div>
  );
};

export default GoToTop;
