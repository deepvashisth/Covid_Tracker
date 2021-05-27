
import deep from '../images/deep.jpg'
import '../Css/Contactus.css'
import avadhesh from '../images/avadhesh.jpeg';
import ashish from '../images/ashish.jpg';
import haribabu from '../images/HariBabu.png'



const Contact = () => {

  


  return (
    <div style={{paddingTop:'1.9rem'}} className="container-fluid main-contact">
    <h5 className="section-title text-center h2 ">Our Hardwoking <span style={{color: 'brown'}}>Team</span></h5>
    <div className='row d-flex justify-content-center mt-4'>

    <div className="col-lg-3 col-sm-12 col-md-3 mt-3 d-flex justify-content-center">
      <div className='flip-card '>
        <div className="flip-card-inner" >
          <div className="flip-card-front ">
          <img className='mt-2' style={{width:'120px' ,height:"120px",borderRadius:'50%'}} src={deep} alt='deep'/>
            <div className='flip-card-body'>
              
              <p className='mt-3 h6 name'>Deep Vashisith</p>
              <p className='mt-3'>Full stack Developer</p>
            </div>
          </div>

          <div className='flip-card-back'> 
          <div className='flip-card-back-body'>
          <p style={{paddingTop:'2.7rem',fontWeight:'660',}} className= 'h6 '>Deep Vashisith contact</p>
         <div className='mt-4 '>
         <a  href='mailto:deepvashisth7777@gmail.com'>mail <i className="fas fa-envelope"></i></a><br />
          <a  href='https://www.linkedin.com/in/deep-vashisth-a71365154/' target="_blank" rel="noreferrer noopener">Linkedin <i className="fab fa-linkedin"></i></a><br />
           <a  href='https://github.com/deepvashisth' target="_blank" rel="noreferrer noopener">Github <i className="fab fa-github"></i></a>
          </div>
         
         </div>
         
          
          
          </div>
        </div>     
      </div>
    
    </div>


    <div className="col-lg-3 col-sm-12 col-md-3 mt-3 d-flex justify-content-center">
      <div className='flip-card '>
        <div className="flip-card-inner" >
          <div className="flip-card-front ">
          <img className='mt-2' style={{width:'120px' ,height:"120px",borderRadius:'50%'}} src={avadhesh} alt='deep'/>
            <div className='flip-card-body'>
              
              <p className='mt-3 h6 name'>Avadhesh kr. singh</p>
              <p className='mt-3'>Mern stack Developer</p>
            </div>
          </div>

          <div 
          className='flip-card-back' 
         
          > 
          <div className='flip-card-back-body'>
          <p style={{paddingTop:'2.6rem',fontWeight:'660'}} className='h6 '>Avadhesh kr singh</p>
          <div className='mt-4 '>
         <a  href='mailto:kumarsinghavadhesh51@gmail.com'>mail <i className="fas fa-envelope"></i></a><br />
          <a  href='https://www.linkedin.com/in/avadhesh-singh-9577011a7/' target="_blank" rel="noreferrer noopener">Linkedin <i className="fab fa-linkedin"></i></a><br />
           <a  href='https://github.com/Ava68' target="_blank" rel="noreferrer noopener">Github <i className="fab fa-github"></i></a>
          </div>
          </div>
          
          
          </div>
        </div>     
      </div>
    
    </div>

    <div className="col-lg-3 col-sm-12 col-md-3 mt-3 d-flex justify-content-center">
      <div className='flip-card'>
        <div className="flip-card-inner" >
          <div className="flip-card-front ">
          <img className='mt-2' style={{width:'120px' ,height:"120px",borderRadius:'50%'}} src={ashish} alt='deep'/>
            <div className='flip-card-body'>
              
              <p className='mt-3 h6 name'>Ashish Chauhan</p>
              <p className='mt-3' >Mern Stack Developer</p>
            </div>
          </div>

          <div 
          className='flip-card-back' 
         
          > 
          <div className='flip-card-back-body'>
          <p style={{paddingTop:'2.6rem',fontWeight:'660'}} className='h6 '>Ashish Chauhan</p>
          <div className='mt-4 '>
         <a  href='mailto:ashishrk2308@gmail.com'>mail <i className="fas fa-envelope"></i></a><br />
          <a  href='https://www.linkedin.com/in/ashish-chauhan-9bb847175' target="_blank" rel="noreferrer noopener">Linkedin <i className="fab fa-linkedin"></i></a><br />
           <a  href='https://github.com/ashishrk' target="_blank" rel="noreferrer noopener">Github <i className="fab fa-github"></i></a>
          </div>
          </div>
          
          
          </div>
        </div>     
      </div>
    
    </div>

    <div className='row d-flex justify-content-center'>
    <div className="col-lg-12 col-sm-12 col-md-4 mt-3 d-flex justify-content-center">
      <div className='flip-card '>
        <div className="flip-card-inner" >
          <div className="flip-card-front ">
          <img className='mt-2' style={{width:'120px' ,height:"120px",borderRadius:'50%'}} src={haribabu } alt='deep'/>
            <div className='flip-card-body'>
              
              <p className='mt-3 h6 name'>HariBabu T</p>
              <p className='mt-3' >Frontend Developer</p>
            </div>
          </div>

          <div className='flip-card-back'> 
          <div className='flip-card-back-body'>
          <p style={{paddingTop:'2.6rem',fontWeight:'660'}} className='h6 '>HariBabu T</p>
          <div className='mt-4 '>
         <a  href='mailto:itisbabu1098@gmail.com'>mail <i className="fas fa-envelope"></i></a><br />
          <a  href='https://www.linkedin.com/in/haribabu-t-826301211' target="_blank" rel="noreferrer noopener">Linkedin <i className="fab fa-linkedin"></i></a><br />
           
          </div>
          </div>
          
          
          </div>
        </div>     
      </div>
    
    </div>
    
    </div>
    
    </div>
    
    
    </div>
    )
}

export default Contact
