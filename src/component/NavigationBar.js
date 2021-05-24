import "../Css/NavigationBar.css"
import {Link} from "react-router-dom";




const NavigationBar = () => {

  

return (


<div>
  <nav className="navbar navbar-expand-lg navbar-light bg">
    <div className="container-fluid">
      <Link id="branding" to='/'>
      <p href="/">Covid Tracker</p>
      </Link>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
        <ul className="navbar-nav ms-auto">
          <nav className='shift'>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to='/Statistics'>Statistics</Link>
              </li>
              <li>
                <Link to='/needhelp'>Need Help</Link>
              </li>
              <li>
                <Link to='/Contact'>Contact Us</Link>
              </li>
            </ul>
          </nav>
        </ul>
      </div>
    </div>
  </nav>
</div>




)
}

export default NavigationBar
