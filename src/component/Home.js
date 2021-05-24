import '../Css/Home.css'
import vaccine2 from '../images/vaccine2.jpeg'

const Home = () => {
    return (


            <div className='container-fluid HomeMain'>
                    <div className='row rowColor'>
                        <div className='col-lg-6 col-md-12 left-box'>

                            <br />
                            <br />
                            <br />
                            <h1 className='para'>Covid-19</h1>
                            <br></br>
                            <h3>Lets get vaccinated together</h3>
                            <br></br>
                            <br></br>
                            <button type="button" className="btn btn-dark btn-lg btn_info">
                            check Vaccine Avaibility    <i className="fas fa-clinic-medical"></i>  </button>
                            <br />
                            <br />
                            <br />

                        </div>

                        <div className='col-lg-6 col-md-12 right-box'>
                        <img className='image_corrona' src={vaccine2} alt="" />

                        </div>

                    </div>

            </div>






    )
}

export default Home
