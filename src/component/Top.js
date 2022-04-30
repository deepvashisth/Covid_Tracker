import React, { useEffect, useState } from "react";

const Top = () => {
    const [data, setData] = useState([]);
  
    useEffect(() => {
      getCovidData();
  
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);
  
    const getCovidData = async () => {
      const res = await fetch("https://api.covid19api.com/summary");
      const actualData = await res.json();
      console.log(actualData);
      setData(actualData.Global);
    };
    const newLocal = " ";
  return (
    <div className="container-fluid">  
      <div className="container">
        <div className="row borr">
          <div className="col-sm bor">
            <h6>Total Confirmed: {data.TotalConfirmed}</h6>
          </div>
          <div className="col-sm bor">
            <h6>New Confirmed: {data.NewConfirmed}</h6>
          </div>
          <div className="col-sm bor">
                <h6>Total Deaths: {data.TotalDeaths}</h6>
          </div>
          <div className="col-sm bor">
                <h6>New Deaths: {data.NewDeaths}</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Top;
