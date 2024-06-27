import React, { useState, useEffect, useContext } from "react";
import { AppContext } from "./AppContext";
import CancelIcon from "@mui/icons-material/Cancel";
import images from "./API/certificate";


export default function CertificatePopUp(props) {
  const data = useContext(AppContext);
  const [active, setActive] = useState(false);
  console.log(active);

  useEffect(() => {
    if (active) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  
  return (
    <div className="relative">
      <button
        className={`h-[60px] px-5 text-xl w-full font-bold tracking-wide underline underline-offset-8 decoration-4 text-center rounded-lg  ${
          data.mode
            ? "bg-indigo-100 text-violet-600 decoration-violet-700"
            : "bg-[#313552] text-white decoration-white"
        } `}
        onClick={() => setActive(!active)}
      >
        <span className="my-auto">{props.btnTitle}</span>
      </button>

      <div
        className={`z-[5]  w-screen h-screen fixed inset-0 flex justify-center items-center p-3 ${
          active ? "visible" : "invisible"
        } bg-black/50`}
      >
        <div className={` w-[calc(100%-20px)] h-[calc(100%-50px)] ${data.mode ? "bg-indigo-100" : "bg-[#313552] "}`}>
          {/* Header */}
          <div
            className={`flex justify-between p-2  ${
              data.mode
                ? "bg-gray-100 text-purple-500 "
                : "bg-[#1f2235] text-white"
            } `}
          >
            <p
              className={`space-y-4 md:space-y-0 md:space-x-2 flex flex-col md:flex-row sm:flex-row sm:space-y-0 sm:space-x-2 ${
                data.mode ? "" : "text-white"
              }`}
            >
              <span className={` text-4xl md:text-3xl sm:text-2xl font-semibold `}>
                My
              </span>
              <span
                className={`text-4xl md:text-3xl sm:text-2xl font-semibold`}
              >
                Certificates
              </span>
            </p>
            <button
              className={`mx-2 my-auto rounded-md px-1 py-1  `}
              type="button"
              onClick={() => setActive(!active)}
            >
              <CancelIcon className="my-auto" />
            </button>
          </div>

          {/* Main */}
          
        </div>
      </div>
    </div>
  );
}
