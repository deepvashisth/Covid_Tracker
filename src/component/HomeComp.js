import React from "react";
import Home from "./Home";
import Footer from "./Footer";
import Carousel from "./Carousel";
import QuizHome from "./QuizHome";
import StatsHome from "./StatsHome";

const HomeComp = () => {
  return (
    <div>
      <Carousel />
      <Home />
      <StatsHome />
      <QuizHome />
      <Footer />
    </div>
  );
};

export default HomeComp;
