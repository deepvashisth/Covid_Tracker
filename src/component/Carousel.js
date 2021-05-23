import "../Css/Carousel.css"
import corona from '../images/corona.jpeg'
import handWash from '../images/handWash.jpg'
import mask from '../images/mask.png'
import social from '../images/social.jpg'
import symptom1 from '../images/symptom1.png'
import symptom2 from '../images/symptom2.png'
import symptom3 from '../images/symptom3.png'


const Carousel = () => {

  const imgStyle={

    height:'97%',
    paddingTop:'1.6rem',
    position:'relative',

  };




return (
<div>
<section id="carousel-sec">
  <div id="carouselExampleControls" className="carousel slide main" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <div className="container hello1">
        <div className="row hello2">
          <div className="col-lg-6 left-tab col-md-12 col-sm-12">
          <img style={imgStyle} src={corona} className='img1' alt="" />


          </div>
          <div className="col-lg-6  right-tab col-md-12 col-sm-12">
          <h1>What is <span class="gc-c">Corona</span>Virus?</h1>
                  <p className='covid-desc'>Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus that attacks the respiratory track of a person. The COVID-19 virus spreads primarily through droplets of saliva or discharge from the nose when an infected person coughs or sneezes, so it’s important that you also practice respiratory etiquette (for example, by coughing into a flexed elbow). At this time, there are no specific vaccines or treatments for COVID-19. However, there are many ongoing clinical trials evaluating potential treatments.
                   </p>
          </div>

        </div>
        <div className='container'>
        <div className='row'>
        <div className='col-lg-12 btn-tab col-md-12 col-sm-12'>
        <a className='btn' href='https://www.medicalnewstoday.com/articles/256521#sars'>
            Click here for more info
       </a>
        </div>



        </div>


        </div>
      </div>


      </div>

      <div className="carousel-item">
        <div className="container">
        <h4 className='prevention'>To prevent the spread of <span class='gc-c'>Corrona</span> virus</h4>
        <div className="row">

          <div className="col-lg-4 col-md-6 col-sm-12">
            <img src={mask} className="mask" alt="" />
            <br></br>
            <br></br>

            <p>Wear mask</p>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <img src={handWash} className="wash" alt="" />

            <p> Wash your hand Regularly</p>
          </div>

          <div className="col-lg-4 col-md-12 col-sm-12">
            <img src={social} className="social" alt="" />
            <p> Maintain Social Distancing</p>
          </div>


        </div>
      </div>
      </div>
      <div style={{marginBottom:'5rem'}} className="carousel-item ">
        <h4 style={{marginLeft:'35%'}}>Symptoms of <span className='gc-c'>Covid-19</span></h4>
        <div style={{marginTop:'5rem'}} className="fluid-container">
        <div className="row symprow">
          <div className="col-lg-4">
            <img src={symptom1} className='' alt="" />

            <p>Breathing Problem</p>
          </div>
          <div className="col-lg-4">
          <img src={symptom2} className='' alt="" />
          <p>Dry cough</p>
          </div>
          <div className="col-lg-4">
          <img src={symptom3} className='' alt="" />
          <p>Fever</p>
          </div>
        </div>
      </div>


      </div>

    </div>
    <button className="carousel-control-prev buttonColor" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span className="buttonColor" aria-hidden="true"><i className="fas fa-chevron-left fa-2x"></i></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next buttonColor" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span className="buttonColor" aria-hidden="true"><i className="fas fa-chevron-right fa-2x"></i></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  </section>
</div>
)
}

export default Carousel
