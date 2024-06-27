import React, { useContext, useState } from "react";
import { AppContext } from "./AppContext";
import BasicNav from "./Nav/basicNav";
import ToggleMode from "./Nav/toggleMode";

const SmScreenNav = () => {
  const data = useContext(AppContext);
  return (
    <div className={`w-full ${data.mode ? "" : "bg-[#1f2235] py-[5%] h-[100px] "}`}>
      <div
        className={`navbar p-[3%] ${data.mode ? "my-[5%]" : "my-[0%]"} rounded-lg w-[calc(100%-10%)] mx-auto flex flex-row justify-between shadow-lg ${
          data.mode
            ? `bg-indigo-100 shadow-indigo-300/90`
            : "bg-[#1f2235] shadow-slate-600/60"
        } animate-navAppear animate-navContent sm:visible invisible `}
      >
        <BasicNav />
        <ToggleMode />
      </div>
    </div>
  );
};

export default SmScreenNav;
