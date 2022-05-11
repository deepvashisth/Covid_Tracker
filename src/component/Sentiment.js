import CommingSoon from "../images/coming-soon.png";
import { useEffect } from "react";

const Sentiment = () => {
  const imgStyle = {
    margin: "auto",
  };

  useEffect(() => {
    fetchText();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  async function fetchText() {
    let response = await fetch("/sentiment");
    let data = await response.json();
    console.log(data);
  }

  return (
    <div className="bg-dark" style={{ display: "flex", height: "100vh" }}>
      <img src={CommingSoon} style={imgStyle} alt="comming soon img" />

      <br></br>
    </div>
  );
};

export default Sentiment;