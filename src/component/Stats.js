import React, { useEffect, useState } from "react";
import "../Css/stats.css";
import StateVisualization from "./StateVisualization";

const Stats = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getCovidData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getCovidData = async () => {
    try {
      const response = await fetch(
        "https://api.rootnet.in/covid19-in/stats/latest"
      );
      const actualData = await response.json();
      // console.log(actualData.data.regional);
      setData(actualData.data.regional);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <div className="container-fluid mt-5">
        <div className="main-heading">
          <h1 className="mb-5 text-center text">
            State-wise <span className="text-span">COVID-19</span> Statistics
          </h1>
        </div>

        <div className="table-responsive table-content">
          <table className="table table-hover stats_Table">
            <thead className="thead-dark">
              <tr>
                <td>State</td>
                <td>Confirmed</td>
                <td>Recovered</td>
                <td>Deaths</td>
              </tr>
            </thead>

            <tbody>
              {data.map((currElem, index) => {
                return (
                  <tr key={index}>
                    <td>{currElem.loc}</td>
                    <td>{currElem.confirmedCasesIndian}</td>
                    <td>{currElem.discharged}</td>
                    <td>{currElem.deaths}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
        <br></br>
        <div className="container-fluid visualization">
          <StateVisualization />
        </div>
      </div>
      {}
    </>
  );
};

export default Stats;
