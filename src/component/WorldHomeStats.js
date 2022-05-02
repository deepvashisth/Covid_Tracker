import WorldStats from "./WorldStats.js";
import CountryWise from "./CountryWise.js";
import CountryVisualization from "./CountryVisualization";

const WorldHomeStats = () => {
  return (
    <div>
      <WorldStats />
      <CountryWise />
      <CountryVisualization />
    </div>
  );
};

export default WorldHomeStats;
