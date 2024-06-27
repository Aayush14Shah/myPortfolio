import { useState, useEffect, useContext } from "react";
import { AppContext } from "./AppContext";
import GradeIcon from "@mui/icons-material/Grade";
import CancelIcon from "@mui/icons-material/Cancel";

export default function AboutPopUp(props) {
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
        className={`h-[60px] px-5 text-xl w-full font-bold tracking-wide underline underline-offset-8 decoration-4 text-center rounded-lg  ${data.mode ? "bg-indigo-100 text-violet-600 decoration-violet-700" : "bg-[#313552] text-white decoration-white"} `}
        onClick={() => setActive(!active)}
      >
        <span className="my-auto">{props.btnTitle}</span>
      </button>

      <div
        className={`z-[5]  w-screen h-screen fixed inset-0 flex items-center justify-center p-3 ${
          active ? "visible" : "invisible"
        } bg-black/50`}
      >
        <div className={` w-[calc(100%-20px)] h-[calc(100%-50px)]`}>
          {/* Header */}
          <div
            className={`flex justify-between p-2 ${
              data.mode
                ? "bg-gray-100 text-purple-500 "
                : "bg-[#1f2235] text-white"
            } `}
          >
            <h1 className={` mx-2 text-xl font-bold my-auto `}>About Me</h1>
            <button
              className={`mx-2 my-auto rounded-md px-1 py-1  `}
              type="button"
              onClick={() => setActive(!active)}
            >
              <CancelIcon className="my-auto" />
            </button>
          </div>

          {/* Main */}
          <div
            className={`text-wrap text-justify w-full h-full px-5 py-[5%] overflow-y-auto my-auto animate_animated animate__slideInLeft mx-auto ${
              data.mode ? "bg-indigo-100" : "bg-[#313552]"
            } ${
              data.mode ? "text-slate-800" : "text-white"
            } lg:overflow-y-scroll `}
          >
            <div className="my-[2%]  ">
              <img
                className=" w-[250px] h-[350px] rounded-lg "
                src={`${process.env.PUBLIC_URL}/Images/profile2.jpg`}
                alt="My profile"
              />
            </div>
            <div className="my-2 text-md leading-normal tracking-normal text-justify animate__animated animate__zoomIn">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est
              doloremque aperiam nesciunt accusantium sed officiis deserunt
              dolores repellendus sint qui. Porro provident quaerat vero
              expedita eveniet et, rerum accusantium tempore a distinctio unde
              voluptatum officia ea minus veritatis, nulla eligendi consequuntur
              labore. Eaque, consequuntur quo,
            </div>
            <div className="w-[calc(100%-20px)] mx-[3%] space-y-4 my-[8%] ">
              <h1
                className={`text-xl font-semibold text-black ${
                  data.mode ? "text-slate-800" : "text-white"
                } `}
              >
                I Love to do{" "}
              </h1>
              {props.hobbies.map((item) => (
                <div
                  key={item.id}
                  className={`text-lg lg:text-sm font-semibold p-2 border-dotted flex justify-between ${
                    data.mode
                      ? "text-violet-800 border-2 border-violet-600"
                      : "text-yellow-500 border-2 border-amber-500"
                  }`}
                >
                  {item.title}
                  <GradeIcon className="my-auto" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
