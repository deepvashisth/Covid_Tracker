import React from "react";
import Home from "./Home";
import Footer from "./Footer";
import Carousel from "./Carousel";
import QuizHome from "./QuizHome";
import StatsHome from "./StatsHome";
import News from "./News.js";

const HomeComp = () => {
  return (
    <div>
      <Carousel />
      <News />
      <Home />

      <StatsHome />
      <QuizHome />
      <Footer />
    </div>
  );
};

export default HomeComp;
