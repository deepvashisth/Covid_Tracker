import React, { useEffect, useState } from "react";
import "../Css/Top.css";
import $ from 'jquery';

const Top = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getCovidData();
    Noti();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getCovidData = async () => {
    const res = await fetch("https://api.covid19api.com/summary");
    const actualData = await res.json();
    setData(actualData.Global);
  };
  const Noti = () =>{
    var i = 1;
    while(i !== 6 ){
      var change = $('#nn');
      console.log(change);
      change.addClass(".displayText");
      ++i;
    }
  };
  
  return (
    <div className="cen col-lg-8 ">
      {/* <div className="container">
        <div className="row borr">
          <div className="col-sm">
            <h6>Total Confirmed: {data.TotalConfirmed}</h6>
          </div>
          <div className="col-sm">
            <h6>New Confirmed: {data.NewConfirmed}</h6>
          </div>
          <div className="col-sm">
            <h6>Total Deaths: {data.TotalDeaths}</h6>
          </div>
          <div className="col-sm">
            <h6>New Deaths: {data.NewDeaths}</h6>
          </div>
        </div>
      </div> */}
      <div id="carouselExampleSlidesOnly cc" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
    <h6>Total Confirmed: {data.TotalConfirmed}</h6>
    </div>
    <div class="carousel-item">
    <h6>New Confirmed: {data.NewConfirmed}</h6>
    </div>
    <div class="carousel-item">
    <h6>Total Deaths: {data.TotalDeaths}</h6>
    </div>
    <div class="carousel-item">
    <h6>New Deaths: {data.NewDeaths}</h6>
    </div>
  </div>
</div>
    </div>
  );
};

export default Top;
