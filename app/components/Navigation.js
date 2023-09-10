"use client";

import { useState, useEffect } from "react";
import TapBar from "./TapBar";
import { NavBar } from "./NavBar";

const Navigation = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 420);
    };
    window.addEventListener("resize", handleResize);
    handleResize();
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return <div>{isMobile ? <TapBar /> : <NavBar />}</div>;
};

export default Navigation;
