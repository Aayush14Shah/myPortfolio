import React, { useContext, useEffect, useRef } from "react";
import Typewriter from "typewriter-effect";
import { AppContext } from "./AppContext";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ArrowOutwardIcon from "@mui/icons-material/ArrowOutward";

const Index = (props) => {
  const data = useContext(AppContext);

  useEffect(() => {
    console.log("This is index file", props.reference);
  }, [props.reference]);

  const box1 = useRef();
  const container = useRef();
  var tl = gsap.timeline();
  useGSAP(() => {
    tl.from(container.current, {
      x: -500,
      opacity: 0,
      duration: 2,
      delay: 0.2,
      scrollTrigger: {
        scroller: "body",
        markers: true,
      },
    });
  });

  return (
    <div
      className={`h-screen w-full  `}
      ref={props.reference}
      data-aos="fade-left"
    >
      <div
        className={`  ${
          data.mode ? "bg-white" : "bg-[#1f2235]"
        } p-10 lg:p-5 md:p-5 sm:p-5  w-full h-full   `}
      >
        {/* Section 1*/}
        <div
          ref={container}
          className={` bg-[url('/public/images/indexBg.avif')] bg-cover bg-center rounded-md h-[500px] lg:h-[500px] md:h-[500px] max-w-[calc(100%-10%)] min-w-[1000px] lg:min-w-[700px] md:max-w-[800px] md:min-w-[500px]
          sm:max-w-[calc(100%-6%)] sm:min-w-full sm:h-full p-[2%] flex flex-row  ${
            data.mode ? "bg-indigo-100" : "bg-[#313552]"
          }  ${
            data.mode ? "text-slate-800" : "text-white"
          } justify-between lg:justify-around  mt-[40px] sm:my-auto mx-auto overflow-hidden `}
        >
          {/* Short description */}
          <div
            ref={box1}
            className={` p-3 lg:p-8 md:p-5 sm:p-2 rounded-md leading-8`}
          >
            <div>
              <p
                className={`trackiing-wide text-xl sm:text-lg text-stone-800 `}
              >
                Hello, my name is
              </p>
              <p
                className={`text-left text-5xl lg:text-4xl md:text-4xl sm:text-3xl font-semibold tracking-8 my-2 text-indigo-800 `}
              >
                Aayush Shah.
                <p className={`mt-4`}>I build things for the web</p>
              </p>
              <span
                className={`text-xl sm:text-lg text-stone-800 `}
              >
                I'am a
                <h1
                  className={`text-5xl lg:text-4xl md:text-4xl sm:text-3xl font-bold text-indigo-800`}
                >
                  <Typewriter
                    options={{
                      strings: ["Frontend Developer"],
                      autoStart: true,
                      loop: true,
                    }}
                  />
                </h1>
              </span>

              <button
                id="talk"
                type="button"
                onClick={() => data.scrollHandler(data.contact)}
                className={` text-[16px] text-stone-800 transition transform ease-linear duration-150 hover:scale-110 px-[20px] sm:px-[6px] absolute bottom-10 sm:my-3 py-1 rounded-lg font-semibold border-2 border-indigo-800 hover:text-white hover:bg-violet-800 `}
              >
                Let's talk <ArrowOutwardIcon />
              </button>
            </div>
            {/* <div className=" md:invisible lg:invisible visible ">
              <img
                className="w-[200px] lg:w-auto md:w-[200px] sm:w-[80px] h-[300px] lg:h-auto md:h-[200px] sm:h-[calc(100%-30px)] sm:my-auto object-cover   "
                src={`${process.env.PUBLIC_URL}/Images/hello.gif`}
                alt="Hello_image"
              />
            </div> */}
          </div>
          {/* Profile Photo */}

          <div className="relative Image rounded-full md:mx-[10px] my-auto md:absolute md:bottom-5 md:right-2 sm:absolute sm:bottom-6 sm:right-8 ">
            <img
              className={` shadow-indigo-600/80 shadow-2xl w-[300px] lg:max-w-[250px] lg:min-w-[200px] md:max-w-[200px] sm:max-w-[130px] h-[300px] lg:max-h-[250px] lg:min-h-[200px] md:max-h-[200px] sm:max-h-[130px] object-cover rounded-full `}
              src={`${process.env.PUBLIC_URL}/Images/profile.jpg`}
              alt="My profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;
