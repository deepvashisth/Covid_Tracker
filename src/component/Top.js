import React, { useEffect, useState } from "react";
import "../Css/Top.css";

const Top = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getCovidData();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getCovidData = async () => {
    const res = await fetch("https://api.covid19api.com/summary");
    const actualData = await res.json();
    setData(actualData.Global);
  };

  return (
    <div className="cen col-lg-8 ">
      <div
        id="carouselExampleSlidesOnly cc"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <h6>Total Confirmed: {data.TotalConfirmed}</h6>
          </div>
          <div className="carousel-item">
            <h6>New Confirmed: {data.NewConfirmed}</h6>
          </div>
          <div className="carousel-item">
            <h6>Total Deaths: {data.TotalDeaths}</h6>
          </div>
          <div className="carousel-item">
            <h6>New Deaths: {data.NewDeaths}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
