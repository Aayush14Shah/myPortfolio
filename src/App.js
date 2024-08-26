import React, {
  useEffect,
  useRef,
  useState,
} from "react";
// WebPage component imports

import Index from "./Components";
import Navbar from "./Components/Navbar";
import Section2 from "./Components/section2";
import Section3 from "./Components/section3";
import Section4 from "./Components/section4";
import Section5 from "./Components/Section5";
import LastSectionFooter from "./Components/sectionFooter";

// other imports
import GoToTop from "./Components/goToTop";
import { AppContext } from "./Components/AppContext";
import "animate.css";
import "./Components/Css/Font.css";



function App(props) {
  const [mode, setMode] = useState(true);

  const handleSwitch = () => {
    setMode((prevMode) => !prevMode);
  };

  const index = useRef(); //Main section
  const about = useRef(); //Section 2
  const project = useRef(); //Section 3
  const contact = useRef(); //Section 4
  const onTop = useRef();

  const scrollHandler = (elmRef) => {
    console.log("This is the parent", elmRef.current);
    if (elmRef.current) {
      window.scrollTo({ top: elmRef.current.offsetTop, behavior: "smooth" });
    }
  };

  const scrollToTop = (elmRef) => {
    console.log("This is the parent", elmRef.current);
    if (elmRef.current) {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };

  const [show, setShow] = useState(false);
  useEffect(() => {
    const handleScroll = (event) => {
      if (window.scrollY > 600) {
        setShow(true);
      } else {
        setShow(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const contextValue = {
    mode,
    setMode,
    handleSwitch,
    index,
    about,
    project,
    contact,
    onTop,
    scrollHandler,
  };

  return (
    <>
      <AppContext.Provider value={contextValue}>
        <Navbar />
        <Index reference={index} />

        <Section2 reference={about} />
        <Section3 reference={project} />
        <Section4 reference={contact} />
        {/* <Section5 /> */}
        <LastSectionFooter />
        <GoToTop show={show} scrollToTop={scrollToTop} reference={onTop} />
      </AppContext.Provider>
    </>
  );
}

export default App;
