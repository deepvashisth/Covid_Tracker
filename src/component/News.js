import React, { useEffect, useState } from "react";
import "../Css/News.css";

const News = () => {
  const [news1, setNews1] = useState([]);
  const [news2, setNews2] = useState([]);
  const [news3, setNews3] = useState([]);
  const [news4, setNews4] = useState([]);
  const [news5, setNews5] = useState([]);

  useEffect(() => {
    getNews();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getNews = async () => {
    try {
      const response = await fetch(
        "https://newsapi.org/v2/everything?q=covid&apiKey=96990e41f37742b3ae6daae594bc8986"
      );
      const actualdata = await response.json();

      console.log(actualdata.articles);
      setNews1(actualdata.articles[0]);
      setNews2(actualdata.articles[1]);
      setNews3(actualdata.articles[2]);
      setNews4(actualdata.articles[3]);
      setNews5(actualdata.articles[4]);
    } catch (e) {
      console.log(e);
    }
  };

  return (
    <div>
      <div
        id="carouselExampleControls1"
        class="carousel slide"
        data-ride="carousel"
      >
        <div class="carousel-inner">
          <div class="carousel-item active main-box">
            <div className="content col-lg-12 col-md-12 col-sm-12">
              <img
                class="d-block  w-100 images"
                src={news3.urlToImage}
                alt="First slide"
              />
            </div>
            <br></br>
            <div className="News-Content">
              <div className="container-fluid ">
                <div className="row ">
                  <div className="col-lg-6 col-md-6 d-flex justify-content-center">
                    <h4>{news3.title}</h4>
                  </div>
                  <div className="col-lg-6 col-md-6 d-flex justify-content-center">
                    <p>{news3.description}</p>
                  </div>
                </div>
              </div>
              <br></br>
              <a className="link" href={news3.url}>
                read full article
              </a>
            </div>
            <br></br>
          </div>
          <div class="carousel-item ">
            <div className="content col-lg-12 col-md-12 col-sm-12">
              <img
                class="d-block  w-100 images"
                src={news2.urlToImage}
                alt="First slide"
              />
            </div>
            <br></br>
            <div className="News-Content">
              <div className="container-fluid ">
                <div className="row ">
                  <div className="col-lg-6 col-md-6 d-flex justify-content-center">
                    <h4>{news2.title}</h4>
                  </div>
                  <div className="col-lg-6 col-md-6 d-flex justify-content-center">
                    <p>{news2.description}</p>
                  </div>
                </div>
              </div>
              <br></br>
              <a className="link" href={news2.url}>
                read full article
              </a>
            </div>
          </div>
          <div class="carousel-item">
            <div className="content col-lg-12 col-md-12 col-sm-12">
              <img
                class="d-block  w-100 images"
                src={news1.urlToImage}
                alt="First slide"
              />
            </div>
            <br></br>
            <div className="News-Content">
              <div className="container-fluid ">
                <div className="row ">
                  <div className="col-lg-6 col-md-6 d-flex justify-content-center">
                    <h4>{news1.title}</h4>
                  </div>
                  <div className="col-lg-6 col-md-6 d-flex justify-content-center">
                    <p>{news1.description}</p>
                  </div>
                </div>
              </div>
              <br></br>
              <a className="link" href={news1.url}>
                read full article
              </a>
            </div>
          </div>
          <div class="carousel-item">
            <div className="content col-lg-12 col-md-12 col-sm-12">
              <img
                class="d-block  w-100 images"
                src={news4.urlToImage}
                alt="First slide"
              />
            </div>
            <br></br>
            <div className="News-Content">
              <div className="container-fluid ">
                <div className="row ">
                  <div className="col-lg-6 col-md-6 d-flex justify-content-center">
                    <h4>{news4.title}</h4>
                  </div>
                  <div className="col-lg-6 col-md-6 d-flex justify-content-center">
                    <p>{news4.description}</p>
                  </div>
                </div>
              </div>
              <br></br>
              <a className="link" href={news4.url}>
                read full article
              </a>
            </div>
          </div>
          <div class="carousel-item">
            <div className="content col-lg-12 col-md-12 col-sm-12">
              <img
                class="d-block  w-100 images"
                src={news5.urlToImage}
                alt="First slide"
              />
            </div>
            <br></br>
            <div className="News-Content">
              <div className="container-fluid ">
                <div className="row ">
                  <div className="col-lg-6 col-md-6 d-flex justify-content-center">
                    <h4>{news5.title}</h4>
                  </div>
                  <div className="col-lg-6 col-md-6 d-flex justify-content-center">
                    <p>{news5.description}</p>
                  </div>
                </div>
              </div>
              <br></br>
              <a className="link" href={news5.url}>
                read full article
              </a>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev buttonColor"
          type="button"
          data-bs-target="#carouselExampleControls1"
          data-bs-slide="prev"
        >
          <span className="buttonColor" aria-hidden="true">
            <i className="fas fa-chevron-left fa-2x"></i>
          </span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next buttonColor"
          type="button"
          data-bs-target="#carouselExampleControls1"
          data-bs-slide="next"
        >
          <span className="buttonColor" aria-hidden="true">
            <i className="fas fa-chevron-right fa-2x"></i>
          </span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default News;
