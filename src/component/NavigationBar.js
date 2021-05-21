import "../Css/NavigationBar.css"
import {Link} from "react-router-dom";




const NavigationBar = () => {
    return (
    
     
        <div>
              <nav className="navbar navbar-expand-lg navbar-light bg">
    <div className="container-fluid">
          <Link to='/'>
          <a className="navbar-brand" href="/">Covid Tracker</a>
          </Link>
     
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse " id="navbarTogglerDemo02">
        <ul className="navbar-nav ms-auto">
        <nav className='shift'>
          <ul>

              
              <li><a href="/">Home</a></li>
            
            
            <li><a href="/">Statistics</a></li>
            <li><a href="/">Test Your Knowledge</a></li>
            
            <Link to='/needhelp'>
              <li>Need Help</li>
            </Link>
           
            <li><a href="/Footer">contact us</a></li>
            
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
