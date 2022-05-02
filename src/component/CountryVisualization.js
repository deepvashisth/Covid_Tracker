import React from "react";
import "../Css/CountryVisualization.css";
import { useEffect, useState } from "react";
import { Bar, Line, Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  CategoryScale,
  PointElement,
  LineElement,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  PointElement,
  LineElement,
  LinearScale,
  ArcElement,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const CountryVisualization = () => {
  const [visualData, setvisualData] = useState([]);

  useEffect(() => {
    getVisualData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  function getRandomColor() {
    var letters = "0123456789ABCDEF";
    var color = "#";
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  const BarOptions = {
    responsive: true,
    plugins: {
      legend: {
        display:false
      },
      title: {
        display: true,
        text: "Total Confirmed Cases",
      },
    },
  };

  const LineOptions = {
    responsive: true,
    plugins: {
      legend: {
        display:false
      },
      title: {
        display: true,
        text: "Total Recovered Cases",
      },
    },
  };

  const labels = [];

  const dataLine = [];
  const dataBar = [];
  const backgroundColor1 = [];
  const lengthOfApi = visualData.length;

  console.log(lengthOfApi);

  for (var i = 0; i < lengthOfApi; i++) {
    labels.push(visualData[i].Country);
    dataBar.push(visualData[i].TotalConfirmed);
    dataLine.push(visualData[i].TotalDeaths);
    var color = getRandomColor();
    backgroundColor1.push(color);
  }

  const data = {
    labels: labels,
    datasets: [
      {
        data: dataBar,
        backgroundColor: backgroundColor1,
      },
    ],
  };

  const data1 = {
    labels: labels,
    datasets: [
      {
        data: dataLine,
        backgroundColor: ["#069A8E"],
      },
    ],
  };


  const getVisualData = async () => {
    try {
      const response = await fetch(
        "https://api.covid19api.com/summary"
      );
      const actualData = await response.json();
      console.log(actualData.Countries);
      setvisualData(actualData.Countries);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="chart ">
      <div className="WorldBar">
        <Bar options={BarOptions} data={data} />
      </div>

      <div className="WorldLine">
        <Line options={LineOptions} data={data1} />
      </div>    
    </div>
  );
};

export default CountryVisualization;
