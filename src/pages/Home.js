import React from "react";
import Blog from "../components/Home/Blog";
import Contact from "../components/Home/Contact";
import Feedback from "../components/Home/Feedback";
import Intro from "../components/Home/Intro";
import Menu from "../components/Home/Menu";
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
