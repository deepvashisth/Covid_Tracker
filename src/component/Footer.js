import "../Css/Footer.css"

const Footer = () => {
    return (
        <div className="head">
        <footer className="footer">
        <p style={{textAlign:'center',color:'#a01c1c'}}>Questions? Call 9870142745</p>

        <div className="footer-cols">
            <ul style={{maxHeight:'50%'}}>
                <h6>About The project</h6>
                <p>Lorem ipsum dolor sit amet, clit esse cillum dolore eu fugiat nul
                la pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui offici
                a deserunt mollit anim id est laborum.</p>
                
            </ul>
            <ul>
                <h6>Lorem</h6>
                <li><a href="/">Help Center</a></li>
                <li><a href="/">Stats</a></li>
                <li><a href="/">Terms Of Use</a></li>
                <li><a href="/">Contact Us</a></li>
            </ul>
            <ul>
                <h6>Epsom</h6>
                <li><a href="/">Account</a></li>
                <li><a href="/">Redeem Gift Cards</a></li>
                <li><a href="/">Privacy</a></li>
                <li><a href="/">Speed Test</a></li>
            </ul>
            <ul>
                <h6>Guidlines</h6>
                <li><a href="/">Media Center</a></li>
                <li><a href="/">Buy Gift Cards</a></li>
                <li><a href="/">Cookie Preferences</a></li>
                <li><a href="/">Legal Notices</a></li>
            </ul>

            
        </div>
        
        <p className='github'> <a href="https://github.com/deepvashisth/Covid_Tracker">Fork this repo on Github</a> <i className="fab fa-github fa-2x"></i></p>
        
    </footer>
    
        </div>
    )
}

export default Footer
