import "../Css/NavigationBar.css";
import { Link } from "react-router-dom";
import logo from "../images/logo2.png";

const NavigationBar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-light bg">
        <div className="container-fluid">
          <Link to="/">
            <img
              style={{ height: "4rem", position: "relative", left: "1.5rem" }}
              src={logo}
              alt="CovidTracker"
            />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarTogglerDemo02"
            aria-controls="navbarTogglerDemo02"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
            <ul className="navbar-nav ms-auto">
              <nav className="shift">
                <ul>
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <a
                      className="dropdown-toggle"
                      href="/"
                      role="button"
                      id="dropdownMenuLink"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Statistics
                    </a>

                    <ul
                      className="dropdown-menu"
                      aria-labelledby="dropdownMenuLink"
                    >
                      <li className="statsLi">
                        <Link to="/IndiaStats">India Statistics</Link>
                      </li>
                      <li>
                        <Link to="/WorldHomeStats">World Statistics</Link>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <Link to="/needhelp">Need Help</Link>
                  </li>

                  <li>
                    <Link to="/medicine">People Sentiment</Link>
                  </li>
                  <li>
                    <Link to="/Contact">Contact Us</Link>
                  </li>
                </ul>
              </nav>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavigationBar;
