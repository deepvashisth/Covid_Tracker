import React from "react";
import "../Css/StatsHome.css";

import stats from "../images/stats.svg";
import { Link } from "react-router-dom";

const StatsHome = () => {
  return (
    <div className="container-fluid stats-main">
      <div className="row ">
        <div className="col-lg-7 col-md-12 left-box">
          <img className="stats-img" src={stats} alt="" />
        </div>

        <div className="col-lg-5 col-md-12 right-box text-center">
          <h1 className="h1Stats">
            Check <span className="gc-c">stateWise</span> stats here!
          </h1>

          <br></br>
          <Link to="/IndiaStats">
            <button type="button" className="btn btn-dark btn-lg btn_info">
              India Stats &nbsp;<i className="fas fa-chart-line "></i>{" "}
            </button>
          </Link>
          <br></br>
          <br></br>
          <Link to="/WorldHomeStats">
            <button type="button" className="btn btn-dark btn-lg btn_info">
              Country Stats &nbsp;<i className="fas fa-chart-line "></i>{" "}
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default StatsHome;
