import '../Css/Home.css'
import corrona from '../images/corrona.jpg'

const Home = () => {
    return (


            <div className='container-fluid'>
                    <div className='row rowColor'>
                        <div className='col-lg-6 col-md-12 left-box'>
                            
                            <br />
                            <br />
                            <br />
                            <h1>Covid-19</h1>
                            <br></br>
                            <h3>Lets get vaccinated together</h3>
                            <br></br>
                            <br></br>
                            <button type="button" class="btn btn-dark btn-lg download-button">
                            check Vaccine Avaibility    <i class="fas fa-clinic-medical"></i>  </button>
                            <br />
                            <br />
                            <br />
                            
                        </div>

                        <div className='col-lg-6 col-md-12 right-box'>
                        <img className='image_corrona' src={corrona} alt="" />
                        
                        </div>

                    </div>
                    
                <hr></hr>

                    
                    
            </div>






    )
}

export default Home
