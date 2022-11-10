import React from "react";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Feedback from "../components/Feedback";
import Intro from "../components/Intro";
import Menu from "../components/Menu";
import "swiper/css/bundle";
export default function Home() {
  return (
    <>
      <Intro />
      <Menu />
      <Blog />
      <Contact />
      <Feedback />
    </>
  );
}
