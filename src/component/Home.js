import '../Css/Home.css'
import corrona from '../images/corrona.jpg'

const Home = () => {
    return (
       
        
            <div className='col'>
                    <div className='row'>
                        <div className='col-lg-6 col-md-6 left-box'>
                        
                            <h1>Covid-19</h1>
                            <br></br>
                            <h3>Lets get vaccinated together</h3>
                            <br></br>
                            <br></br>
                            <button type="button" class="btn btn-dark btn-lg download-button"> 
                            check Avaibility    <i class="fas fa-clinic-medical"></i>  </button>
                        </div>

                        <div className='col-lg-6 col-md-6 right-box'>
                        <img className='image_corrona' src={corrona} alt="" />
                        </div>
                        
                    </div>
            </div>

               
                
            
    
        
    )
}

export default Home
