import React, { useContext } from "react";
import { AppContext } from "../AppContext";

const BasicNav = () => {
  const data = useContext(AppContext);
  return (
    <div className="my-auto ">
      <div className="flex mx-3 sm:space-x-[16px]  ">
        <p
          className={`font-semibold text-sm underline cursor-pointer decoration-4 underline-offset-8 text-capitalize ${
            data.mode
              ? "text-indigo-800  decoration-violet-700 "
              : "text-yellow-300  decoration-amber-500  "
          } `}
          onClick={() => data.scrollHandler(data.index)}
        >
          Home
        </p>
        <p
          className={`font-semibold text-sm underline cursor-pointer decoration-4 underline-offset-8 text-capitalize ${
            data.mode
              ? "text-indigo-800  decoration-violet-700 "
              : "text-yellow-300  decoration-amber-500  "
          } `}
          onClick={() => data.scrollHandler(data.about)}
        >
          About
        </p>
        <p
          className={`font-semibold text-sm underline cursor-pointer decoration-4 underline-offset-8 text-capitalize ${
            data.mode
              ? "text-indigo-800  decoration-violet-700 "
              : "text-yellow-300  decoration-amber-500  "
          } `}
          onClick={() => data.scrollHandler(data.project)}
        >
          Projects
        </p>
        <p
          className={`font-semibold text-sm underline cursor-pointer decoration-4 underline-offset-8 text-capitalize ${
            data.mode
              ? "text-indigo-800  decoration-violet-700 "
              : "text-yellow-300  decoration-amber-500  "
          } `}
          onClick={() => data.scrollHandler(data.contact)}
        >
          Contact
        </p>
      </div>
    </div>
  );
};

export default BasicNav;
