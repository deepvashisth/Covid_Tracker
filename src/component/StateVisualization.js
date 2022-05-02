import React from "react";
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

  const data = {
    labels: ["red", "green", "blue", "yellow"],
    datasets: [
      {
        data: [12, 44, 32, 12],
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
      setvisualData(actualData.data);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div className="chart">
      <Bar data={data} />
    </div>
  );
};

export default StateVisualization;
