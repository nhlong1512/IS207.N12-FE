import React from "react";
import Blog from "../components/Blog";
import Intro from "../components/Intro";
import Menu from "../components/Menu";

export default function Home() {
  return (
    <>
      <Intro />
      <Menu />
      <Blog />
    </>
  );
}
