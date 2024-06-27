import React, { useContext, useEffect, useRef } from "react";
import Typewriter from "typewriter-effect";
import { AppContext } from "./AppContext";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';

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
        className={`${
          data.mode ? "bg-white" : "bg-[#1f2235]"
        } p-10 lg:p-5 md:p-5 sm:p-5  w-full h-full   `}
      >
        {/* Section 1*/}
        <div
          ref={container}
          className={` rounded-md h-[500px] lg:h-[450px] md:h-[430px] max-w-[1200px] min-w-[1000px]  lg:max-w-[1000px] lg:min-w-[700px] md:max-w-[800px] md:min-w-[500px]
          sm:max-w-[400px] sm:min-w-[300px] sm:h-[400px] px-[4%] py-[4%] lg:p-[3%] md:py-[6%] sm:p-[4%] flex flex-row sm:flex-col  ${
            data.mode ? "bg-indigo-100" : "bg-[#313552]"
          }  ${
            data.mode ? "text-slate-800" : "text-white"
          } justify-between lg:justify-around  mt-[40px] sm:mt-[50px] mx-auto `}
        >
          {/* Short description */}
          <div
            ref={box1}
            className={` text-left  ${
              data.mode ? "  bg-indigo-200 sm:bg-indigo-200" : "bg-[#1f2235] "
            } mx-[30px] lg:mx-[5px] md:mx-[10px] sm:mx-[8px] p-10 lg:p-8 md:p-5 sm:p-2 rounded-md w-[600px] lg:w-[400px] md:w-[300px] sm:w-auto leading-8 sm:order-last sm:my-[0px] flex flex-row justify-around lg:justify-between flex-wrap overflow-hidden `}
          >
            <div>
              <h1
                className={`text-xl sm:text-sm ${
                  data.mode ? "text-stone-900" : "text-yellow-300"
                } `}
              >
                Hello, my name is
              </h1>
              <p
                className={`text-left text-3xl sm:text-xl font-semibold tracking-8 my-2 ${
                  data.mode ? "text-violet-800" : "text-amber-300"
                } `}
              >
                Aayush Shah,
              </p>
              <span
                className={`text-lg sm:text-sm ${
                  data.mode ? "text-stone-900" : "text-yellow-300"
                } `}
              >
                I'am a 
                <h1
                  className={`text-3xl sm:text-2xl font-bold ${
                    data.mode ? "text-violet-800" : "text-yellow-300"
                  }`}
                >
                  <Typewriter
                    options={{
                      strings: ["Developer", "Designer", "Artist"],
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
                  className={` text-lg transition transform ease-linear duration-150 hover:scale-110 px-[30px] sm:px-[10px] my-10 sm:my-3 py-2 rounded-lg font-semibold ${
                    data.mode
                      ? "border-2 border-indigo-800 hover:text-white hover:bg-violet-800 "
                      : "border-2 border-[#313552] hover:text-amber-300 hover:bg-[#313552] "
                  } `}
                >
                  Let's talk <ArrowOutwardIcon  />
                </button>
             
            </div>
            <div className=" md:invisible lg:invisible visible ">
              <img
                className="w-[200px] lg:w-auto md:w-[200px] sm:w-[80px] h-[300px] lg:h-auto md:h-[200px] sm:h-[calc(100%-30px)] sm:my-auto object-cover   "
                src={`${process.env.PUBLIC_URL}/Images/hello.gif`}
                alt="Hello_image"
              />
            </div>
          </div>
          {/* Profile Photo */}

          <div className="relative Image rounded-full w-[300px] lg:w-[250px] md:w-[200px] sm:w-[100px] h-[300px] lg:h-[250px] md:h-[200px] sm:h-[100px] mx-[30px] lg:mx-[20px] md:mx-[10px] sm:mx-[5px] my-auto sm:my-[0px] sm:order-first">
            <img
              className={`${
                data.mode ? " shadow-indigo-600/80" : " shadow-amber-400"
              } shadow-2xl w-[300px] lg:w-[250px] md:w-[200px] sm:w-[100px] h-[300px] lg:h-[250px] md:h-[200px] sm:h-[100px] object-cover rounded-full `}
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
