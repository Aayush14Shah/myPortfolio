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
  const [isSmall, setIsSmall] = useState(false);
  const smMaxScreenWidth = 567;

  const form = useRef();
  const text = useRef();

  useGSAP(() => {
    gsap.from(text.current, {
      y: -50,
      opacity: 0,
      duration: 1,
      stagger: 1,
    });
  });

  useEffect(() => {
    const updateScreenSettings = () => {
      setIsSmall(window.innerWidth <= smMaxScreenWidth);
    };
    updateScreenSettings();
    window.addEventListener("resize", updateScreenSettings);
    return () => window.removeEventListener("resize", updateScreenSettings);
  }, []);

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
          setName("");
          setEmail("");
          setMessage("");
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
      className={`w-full min-h-screen sm:p-2 md:p-3 lg:p-4 xl:p-4 p-4 ${
        data.mode ? "bg-gray-100" : "bg-[#1f2235]"
      } flex items-center justify-center`}
    >
      <div
        className="w-full max-w-[1600px] min-h-[600px] rounded-lg grid sm:grid-cols-1 md:grid-cols-1 lg:grid-cols-2 xl:grid-cols-2 grid-cols-2 sm:grid-rows-[auto_auto] md:grid-rows-[auto_auto] sm:gap-4 md:gap-4 lg:gap-6 xl:gap-6 gap-6 auto-rows-fr"
      >
        {/* Certificates Section */}
        <div
          className={`sm:p-2 md:p-3 lg:p-4 xl:p-4 p-4 ${
            data.mode ? "bg-indigo-200" : "bg-[#313552]"
          } flex flex-col rounded-lg shadow-lg sm:min-h-[300px] md:min-h-[350px] lg:min-h-[400px] xl:min-h-[450px] min-h-[500px]`}
        >
          <h1
            className={`flex sm:flex-col md:flex-row lg:flex-row xl:flex-row flex-row sm:space-y-1 md:space-x-2 lg:space-x-2 xl:space-x-2 space-x-2 sm:text-lg md:text-xl lg:text-2xl xl:text-2xl text-2xl font-semibold ${
              data.mode ? "text-indigo-600" : "text-fuchsia-300"
            }`}
          >
            <span>My</span>
            <span>Certificates</span>
          </h1>
          <div
            className="sm:h-[4px] md:h-[4px] lg:h-[4px] xl:h-[4px] h-1 bg-gradient-to-r from-violet-500 to-indigo-300 rounded-sm w-full sm:my-1 md:my-2 lg:my-2 xl:my-2 my-2"
          />
          <CertificateCarousel isSmallScreen={isSmall} />
        </div>

        {/* Contact Form Section */}
        <div
          className={`sm:p-2 md:p-3 lg:p-4 xl:p-4 p-4 bg-indigo-100 rounded-lg shadow-lg flex flex-col sm:min-h-[300px] md:min-h-[350px] lg:min-h-[400px] xl:min-h-[450px] min-h-[500px] sm:overflow-y-auto md:overflow-y-auto lg:overflow-hidden xl:overflow-hidden overflow-hidden sm:m-0 md:m-0`}
        >
          <div className="sm:space-y-1 md:space-y-2 lg:space-y-3 xl:space-y-3 space-y-3">
            <h1
              ref={text}
              className={`sm:text-lg md:text-xl lg:text-2xl xl:text-2xl text-2xl font-semibold ${
                data.mode ? "text-indigo-600" : "text-fuchsia-300"
              }`}
            >
              Contact Me
            </h1>
            <p className="sm:text-xs md:text-sm lg:text-sm xl:text-sm text-sm">
              Your response will be sent to my Email
            </p>
          </div>
          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col sm:mt-2 md:mt-3 lg:mt-4 xl:mt-4 mt-4 sm:space-y-2 md:space-y-3 lg:space-y-4 xl:space-y-4 space-y-4 flex-1 sm:m-0 md:m-0"
          >
            <div className="flex sm:flex-col md:flex-col lg:flex-row xl:flex-row flex-row sm:space-y-2 md:space-y-3 lg:space-x-4 xl:space-x-4 space-x-4 lg:space-y-0 xl:space-y-0 sm:space-x-0 md:space-x-0 w-full">
              <div className="flex flex-col sm:space-y-1 md:space-y-2 lg:space-y-3 xl:space-y-3 space-y-3 w-full sm:m-0 md:m-0">
                <label
                  className="font-semibold text-indigo-600 sm:text-xs md:text-sm lg:text-sm xl:text-sm text-sm sm:underline-offset-2 md:underline-offset-2 underline underline-offset-4 sm:decoration-2 md:decoration-2 decoration-4 decoration-indigo-600 decoration-dashed sm:m-0 md:m-0"
                >
                  Name
                </label>
                <input
                  type="text"
                  name="user_name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="E.g:- Rohit Sharma"
                  className="bg-indigo-200 rounded-md sm:px-2 md:px-2 lg:px-3 xl:px-3 px-3 sm:py-1 md:py-1.5 lg:py-2 xl:py-2 py-2 sm:text-xs md:text-sm lg:text-sm xl:text-sm text-sm w-full sm:m-0 md:m-0 border border-indigo-500 text-black tracking-wide placeholder-indigo-400 font-semibold caret-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                  required
                />
              </div>
              <div className="flex flex-col sm:space-y-1 md:space-y-2 lg:space-y-3 xl:space-y-3 space-y-3 w-full sm:m-0 md:m-0">
                <label
                  className="font-semibold text-indigo-600 sm:text-xs md:text-sm lg:text-sm xl:text-sm text-sm sm:underline-offset-2 md:underline-offset-2 underline underline-offset-4 sm:decoration-2 md:decoration-2 decoration-4 decoration-indigo-600 decoration-dashed sm:m-0 md:m-0"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="user_email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="E.g:- rohit45@gmail.com"
                  className="bg-indigo-200 rounded-md sm:px-2 md:px-2 lg:px-3 xl:px-3 px-3 sm:py-1 md:py-1.5 lg:py-2 xl:py-2 py-2 sm:text-xs md:text-sm lg:text-sm xl:text-sm text-sm w-full sm:m-0 md:m-0 border border-indigo-500 text-black tracking-wide placeholder-indigo-400 font-semibold caret-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                  required
                />
              </div>
            </div>
            <div className="flex flex-col sm:space-y-1 md:space-y-2 lg:space-y-3 xl:space-y-3 space-y-3 w-full flex-1 sm:m-0 md:m-0">
              <label
                className="font-semibold text-indigo-600 sm:text-xs md:text-sm lg:text-sm xl:text-sm text-sm sm:underline-offset-2 md:underline-offset-2 underline underline-offset-4 sm:decoration-2 md:decoration-2 decoration-4 decoration-indigo-600 decoration-dashed sm:m-0 md:m-0"
              >
                Message
              </label>
              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={4}
                placeholder="Challenges are what make life interesting, and overcoming them is what makes life meaningful. Face them head-on."
                className="resize-none bg-indigo-200 rounded-md sm:px-2 md:px-2 lg:px-3 xl:px-3 px-3 sm:py-1 md:py-1.5 lg:py-2 xl:py-2 py-2 sm:text-xs md:text-sm lg:text-sm xl:text-sm text-sm w-full sm:h-24 md:h-28 lg:h-32 xl:h-32 h-32 sm:m-0 md:m-0 border border-indigo-500 text-black tracking-wide placeholder-indigo-400 font-semibold caret-indigo-800 focus:outline-none focus:ring-2 focus:ring-indigo-300 flex-1"
                required
              />
            </div>
            <button
              type="submit"
              className={`sm:text-xs md:text-sm lg:text-sm xl:text-sm text-sm sm:px-3 md:px-4 lg:px-4 xl:px-4 px-4 sm:py-1 md:py-1.5 lg:py-2 xl:py-2 py-2 rounded-md font-semibold flex items-center justify-center ${
                data.mode
                  ? "bg-indigo-600 text-white hover:bg-indigo-700"
                  : "bg-[#313552] text-amber-300 hover:bg-[#262841]"
              } shadow-md hover:shadow-lg mt-auto sm:m-0 md:m-0`}
            >
              Send Message
              <SendIcon className="sm:ml-1 md:ml-2 lg:ml-2 xl:ml-2 ml-2 sm:w-4 md:w-4 lg:w-5 xl:w-5 w-5" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Section4;