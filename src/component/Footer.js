import "../Css/Footer.css";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer bg-dark">
      <div className="footer-cols">
        <ul>
          <h6>About The project</h6>
          <p>
            This project is made to track Coronavirus statistics all over the
            world and state-wise India statistics people will get a brief
            knowledge about coronavirus by giving the quiz and you can also
            check the vaccine availability by entering their respective Pincode
            followed by a date
          </p>
        </ul>

        <ul className="services-guidelines">
          <h6>Services</h6>
          <li>
            <Link to="/IndiaStats">India Statistics</Link>
          </li>
          <li>
            <Link to="/WorldHomeStats">World Statistics</Link>
          </li>
          <li>
            <Link to="/vaccine">Vaccine Availability</Link>
          </li>
          <li>
            <Link to="/Quiz">Test Your Knowledge</Link>
          </li>
        </ul>
        <ul className="services-guidelines">
          <h6>Quick Links</h6>
          <li>
            <a
              href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019"
              target="_blank"
              rel="noreferrer noopener"
            >
              WHO Guidelines
            </a>
          </li>
          <li>
            <a href="https://www.medicalnewstoday.com/articles/256521">
              Article
            </a>
          </li>
          <li>
            <a href="https://www.medicalnewstoday.com/articles/coronavirus-testing">
              Covid Testing article
            </a>
          </li>
          <li>
            <a href="https://www.mygov.in/covid-19">Govt of India</a>
          </li>
        </ul>
      </div>

      <p className="github">
        {" "}
        <a href="https://github.com/deepvashisth/Covid_Tracker">
          Fork this repo on Github
        </a>{" "}
        <i className="fab fa-github fa-2x"></i>
      </p>
    </footer>
  );
};

export default Footer;
