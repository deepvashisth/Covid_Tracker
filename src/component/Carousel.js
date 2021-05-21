import "../Css/Carousel.css"
import corona from '../images/corona.jpeg'



const Carousel = () => {

  const imgStyle={
    position:'relative',
    height:'97%',
    paddingTop:'1.6rem',
    paddingLeft:'3.5rem'
  };


  
return (
<div>
<section id="carousel-sec">
  <div id="carouselExampleControls" className="carousel slide main" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <div className="container">
        <div className="row">
          <div className="col-lg-6">
          <img style={imgStyle} src={corona} className='img1' alt="" />
          </div>
          <div className="col-lg-6">
          <h1>What is <span class="gc-c">Corona</span>Virus?</h1>
                  <p className='covid-desc'>Coronavirus disease (COVID-19) is an infectious disease caused by a newly discovered coronavirus that attacks the respiratory track of a person. The COVID-19 virus spreads primarily through droplets of saliva or discharge from the nose when an infected person coughs or sneezes, so it’s important that you also practice respiratory etiquette (for example, by coughing into a flexed elbow). At this time, there are no specific vaccines or treatments for COVID-19. However, there are many ongoing clinical trials evaluating potential treatments.
                   </p>
          </div>
          
        </div>
      </div>
      </div>
      <div className="carousel-item">
        <div className="container">
        <div className="row">
          <div className="col">
            will be written over here so stay tunned
            and stay connected.
          </div>
          <div className="col">
            <img src={corona} className="img1" alt="" />
          </div>
        </div>
      </div>
      </div>
      <div className="carousel-item">
        <div className="container">
        <div className="row">
          <div className="col">
            <img src={corona} className='img1' alt="" />
          </div>
          <div className="col">
            will be written over here so stay tunned
            and stay connected.
          </div>
        </div>
      </div>
      </div>
    </div>
    <button className="carousel-control-prev buttonColor" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
      <span className="buttonColor" aria-hidden="true"><i className="fas fa-chevron-left fa-3x"></i></span>
      <span className="visually-hidden">Previous</span>
    </button>
    <button className="carousel-control-next buttonColor" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
      <span className="buttonColor" aria-hidden="true"><i className="fas fa-chevron-right fa-3x"></i></span>
      <span className="visually-hidden">Next</span>
    </button>
  </div>
  </section>
</div>
)
}

export default Carousel