import React from 'react'
import deep from '../images/deep.jpg'
import '../Css/Contactus.css'
import avadhesh from '../images/avadhesh.jpeg';
import ashish from '../images/ashish.jpg';

const Contact = () => {

  const cardStlyling = {
    backgroundColor: '#e4efe7'
  };



  return (<div className='top'>
    <br></br>
    <h1 style={{
        textAlign: 'center',

      }}>Meet our <span className='gc-c'>Hardworking  </span>team
    </h1>
    <br></br>

    <div className='container  '>

      <div className="row row-cols-2  row-cols-md-4 g-4 ">
        <div className="col card_content">
          <div className="card h-100">
            <img src={deep} className="card-img-top" alt="..."/>
            <div style={cardStlyling} className="card-body">
              <h5 className="card-title">Deep Vashisth</h5>
              <p className="card-text">
                <div>
                <a  href='mailto:deepvashisth7777@gmail.com'>Gmail <i class="fas fa-envelope"></i></a><br />
                <a href='https://www.linkedin.com/in/deep-vashisth-a71365154/' target="_blank" rel="noreferrer noopener">Linkedin <i class="fab fa-linkedin"></i></a><br />
                <a href='https://github.com/deepvashisth' target="_blank" rel="noreferrer noopener">Github <i class="fab fa-github"></i></a>
              </div>
            </p>
            </div>
          </div>
        </div>
        <div className="col card_content">
          <div className="card h-100">
            <img src={avadhesh} className="card-img-top" alt="..."/>
            <div style={cardStlyling} className="card-body">
              <h5 className="card-title">Avadhesh kr. singh</h5>
              <p className="card-text">
                <div>
                <a href='mailto:kumarsinghavadhesh51@gmail.com'>Gmail <i class="fas fa-envelope"></i></a><br />
                <a href='https://www.linkedin.com/in/avadhesh-singh-9577011a7/' target="_blank" rel="noreferrer noopener">Linkedin <i class="fab fa-linkedin"></i></a><br />
                <a href='https://github.com/Ava68' target="_blank" rel="noreferrer noopener">Github <i class="fab fa-github"></i></a>
              </div>
              </p>
            </div>
          </div>
        </div>
        <div className="col card_content ">
          <div className="card h-100 ">
            <img src={ashish} className="card-img-top" alt="..."/>
            <div style={cardStlyling} className="card-body">
              <h5 className="card-title">Ashish Chauhan</h5>
              <p className="card-text">
                <div>
                <a href='mailto:ashishrk2308@gmail.com'>Gmail <i class="fas fa-envelope"></i></a><br />
                <a href='https://www.linkedin.com/in/ashish-chauhan-9bb847175' target="_blank" rel="noreferrer noopener">Linkedin <i class="fab fa-linkedin"></i></a><br />
                <a href='https://github.com/ashishrk' target="_blank" rel="noreferrer noopener">Github <i class="fab fa-github"></i></a>
              </div>
            </p>
            </div>
          </div>
        </div>
        <div className="col card_content">
          <div className="card h-100">
            <img src={deep} className="card-img-top" alt="..."/>
            <div style={cardStlyling} className="card-body">
              <h5 className="card-title">Haribabu T</h5>
              <p className="card-text card_d">
                <div>
                <a href='mailto:itisbabu1098@gmail.com'>Gmail <i class="fas fa-envelope"></i></a><br />
                <a href='https://www.linkedin.com/in/haribabu-t-826301211' target="_blank" rel="noreferrer noopener">Linkedin <i class="fab fa-linkedin"></i></a><br />
                <a href='/' target="_blank" rel="noreferrer noopener">Github <i class="fab fa-github"></i></a>
              </div>
              </p>
            </div>
          </div>

        </div>

      </div>

    </div>
    <div className='foot'>
      <a href='https://github.com/deepvashisth/Covid_Tracker' target="_blank" rel="noreferrer noopener">
        You can fork this project on GitHub <i class="fab fa-github" target="_blank" rel="noreferrer noopener"></i></a>
  </div>
  </div>)
}

export default Contact
