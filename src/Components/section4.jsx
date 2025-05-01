import React, { useContext, useRef, useState, useEffect } from "react";
import { AppContext } from "./AppContext";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import SendIcon from "@mui/icons-material/Send";
import emailjs from "@emailjs/browser";
import CertificateCarousel from "./richComponents/certificateCarousel";

const Section4 = (props) => {
  const data = useContext(AppContext);

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const smMaxScreenWidth = 567;

  const text = useRef();
  var tl = gsap.timeline();
  useGSAP(() => {
    tl.from(text.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      stagger: 1,
    });
  });

  const [isSmall, setIsSmall] = useState(false);
  useEffect(() => {
    const updateScreenSettings = () => {
      if (window.innerWidth <= smMaxScreenWidth) {
        setIsSmall(true);
      }
    };

    updateScreenSettings();
    window.addEventListener("resize", updateScreenSettings);
    return () => window.removeEventListener("resize", updateScreenSettings);
  });

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_dzg2s9v",
        "template_7gfcuvg",
        form.current,
        "iMkUkLzOHseUc2EKy"
      )
      .then(
        (result) => {
          alert("Message sent successfully!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send message, please try again.");
          console.error("EmailJS Error:", error);
        }
      );
  };

  return (
    <div
      ref={props.reference}
      className={`w-full h-screen p-[3%] sm:p-[5%] xl:p-[3%] ${
        data.mode ? "bg-gray-100" : "bg-[#1f2235]"
      } `}
    >
      <div
        className={`w-full h-full rounded-lg grid grid-cols-2 md:grid-cols-1 md:grid-rows-2 sm:grid-cols-1 sm:space-y-4 `}
      >
        <div
          className={`w-full h-full mx-auto my-auto p-5 ${
            data.mode ? "bg-indigo-200" : "bg-[#313552]"
          } flex flex-col justify-center items-start`} // Changed items-center to items-start
          style={{ minHeight: "500px", minWidth: "100%" }}
        >
          <h1
            ref={text}
            className={`space-y-4 md:space-y-0 md:space-x-2 flex flex-col md:flex-row sm:flex-row sm:space-y-0 sm:space-x-2 ${
              data.mode ? "" : "text-white"
            } w-full`} // Added w-full to ensure full width
          >
            <span
              className={`${
                data.mode ? "text-indigo-600" : "text-fuchsia-300"
              } text-4xl md:text-3xl sm:text-2xl font-normal `}
            >
              My
            </span>
            <span
              className={`${
                data.mode ? "text-indigo-600" : "text-fuchsia-300"
              } text-4xl md:text-3xl sm:text-2xl font-normal`}
            >
              Certificates
            </span>
          </h1>
          <div
            className={`h-[8px] bg-gradient-to-r from-violet-500 to-indigo-300 rounded-sm w-full my-4`}
          ></div>
          <CertificateCarousel />
        </div>
        <div
          className={`bg-indigo-100 px-5 py-5 md:p-2 sm:p-2 md:overflow-y-scroll`}
        >
          <div className={`space-y-2 sm:space-y-0`}>
            <h1
              ref={text}
              className={`text-5xl md:text-3xl sm:text-2xl font-extralight sm:font-normal`}
            >
              Contact Me
            </h1>
            <p className={`text-md`}>Your response will be sent to my Email</p>
          </div>
          <div>
            <form
              ref={form}
              onSubmit={sendEmail}
              className="form p-2 sm:p-2 xl:p-0 lg:p-0 space-y-4 lg:space-y-4 mt-[5%] xl:mt-[3%] sm:mt-0 sm:space-y-2 "
            >
              <div
                className={`flex justify-between lg:flex-col sm:flex-col h-auto space-x-6 lg:space-y-4 lg:space-x-0 sm:space-y-2 sm:space-x-0`}
              >
                <div
                  className={`flex flex-col lg:space-y-4 sm:space-y-2 space-y-6 w-full `}
                >
                  <label
                    className={`font-semibold text-indigo-600 text-xl sm:text-lg underline underline-offset-8 sm:underline-offset-4 decoration-4 decoration--600 decoration-dashed `}
                  >
                    Name
                  </label>
                  <input
                    type="text"
                    name="user_name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="E.g:- Rohit Sharma"
                    className={`bg-indigo-200 rounded-md px-[3%] lg:py-[2%] py-[3%] text-lg w-auto focus:border-2 text-black tracking-wide placeholder-indigo-400 font-semibold border-indigo-500 caret-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-300`}
                    required
                  />
                </div>
                <div
                  className={`flex flex-col lg:space-y-4 sm:space-y-2 space-y-6 w-full `}
                >
                  <label
                    className={`font-semibold text-indigo-600 text-xl sm:text-lg underline underline-offset-8 sm:underline-offset-4 decoration-4 decoration--600 decoration-dashed `}
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="user_email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="E.g:- rohit45@gmail.com"
                    className={`bg-indigo-200 rounded-md px-[3%] lg:py-[2%] py-[3%] text-lg w-auto focus:border-2 border-indigo-500 text-black tracking-wide placeholder-indigo-400 font-semibold border-indigo-500 caret-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-300`}
                    required
                  />
                </div>
              </div>
              <div className={`flex flex-col space-y-4 w-full sm:space-y-2`}>
                <label
                  className={`font-semibold text-indigo-600 text-xl sm:text-lg underline underline-offset-8 sm:underline-offset-4 decoration-4 decoration--600 decoration-dashed`}
                >
                  Message
                </label>
                <textarea
                  name="message"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  rows={5}
                  placeholder="Challenges are what make life interesting, and overcoming them is what makes life meaningful. Face them head-on."
                  className={`sm:text-sm resize-none lg:h-[100px] sm:h-[110px] bg-indigo-200 rounded-md px-[3%] py-[3%] text-lg w-auto focus:border-2 border-indigo-500 text-black tracking-wide placeholder-indigo-400 font-semibold border-indigo-500 caret-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-300`}
                  required
                />
              </div>
              <button
                type="submit"
                className={` text-lg text-indigo-600 px-[30px] lg:px-[20px] sm:py-1 sm:px-[10px] sm:my-3 py-2 rounded-md font-semibold ${
                  data.mode
                    ? "border-2 border-indigo-800 hover:text-white hover:bg-violet-800 "
                    : "border-2 border-[#313552] hover:text-amber-300 hover:bg-[#313552] "
                } hover:shadow-lg shadow-indigo-500/40  `}
              >
                Send
                <SendIcon className={`my-auto ml-2`} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section4;