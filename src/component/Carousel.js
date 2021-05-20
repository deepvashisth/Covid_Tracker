import "../Css/Carousel.css"
import deep from '../Css/deep.jpg'



const Carousel = () => {
return (
<div>
  <div id="carouselExampleControls" className="carousel slide main" data-bs-ride="carousel">
    <div className="carousel-inner">
      <div className="carousel-item active">
        <div className="container">
        <div className="row">
          <div className="col">
             will be written over here so stay tunned
             and stay connected.
          </div>
          <div className="col">
            <img src={deep} className='img1' alt="" />
          </div>
          <div className="col">
            will be written over here so stay tunned
            and stay connected.
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
            <img src={deep} className="img1" alt="" />
          </div>
        </div>
      </div>
      </div>
      <div className="carousel-item">
        <div className="container">
        <div className="row">
          <div className="col">
            <img src={deep} className='img1' alt="" />
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
</div>
)
}

export default Carousel