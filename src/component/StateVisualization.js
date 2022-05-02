import React from "react";
import "../Css/stateVisualization.css";
import { useEffect, useState } from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const StateVisualization = () => {
  const [visualData, setvisualData] = useState([]);

  useEffect(() => {
    getVisualData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Total Confirmed Cases",
      },
    },
  };

  const labels = [];
  const data1 = [];
  const lengthOfApi = visualData.length;

  console.log(lengthOfApi);

  for (var i = 0; i < lengthOfApi; i++) {
    labels.push(visualData[i].loc);
    data1.push(visualData[i].totalConfirmed);
  }

  const data = {
    labels: labels,
    datasets: [
      {
        data: data1,
        backgroundColor: ["#F66B0E"],
      },
    ],
  };

  const getVisualData = async () => {
    try {
      const response = await fetch(
        "https://api.rootnet.in/covid19-in/stats/latest"
      );
      const actualData = await response.json();
      console.log(actualData.data.regional);
      // console.log(actualData.data.regional.length);
      setvisualData(actualData.data.regional);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="chart ">
      <div className="Bar">
        <Bar options={options} data={data} />
      </div>
    </div>
  );
};

export default StateVisualization;
