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
        color: '#66BFBF'
      }}>Meet our Hardworking team
    </h1>
    <br></br>

    <div className='container  '>

      <div class="row row-cols-2  row-cols-md-4 g-4 ">
        <div class="col card_content">
          <div class="card h-100">
            <img src={deep} class="card-img-top" alt="..."/>
            <div style={cardStlyling} class="card-body">
              <h5 class="card-title">Deep Vashisth</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>
        </div>
        <div class="col card_content">
          <div class="card h-100">
            <img src={avadhesh} class="card-img-top" alt="..."/>
            <div style={cardStlyling} class="card-body">
              <h5 class="card-title">Avadhesh kr. singh</h5>
              <p class="card-text">This is a short card.</p>
            </div>
          </div>
        </div>
        <div class="col card_content ">
          <div class="card h-100 ">
            <img src={ashish} class="card-img-top" alt="..."/>
            <div style={cardStlyling} class="card-body">
              <h5 class="card-title">Ashish Chauhan</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content.</p>
            </div>
          </div>
        </div>
        <div class="col card_content">
          <div class="card h-100">
            <img src={deep} class="card-img-top" alt="..."/>
            <div style={cardStlyling} class="card-body">
              <h5 class="card-title">Card title</h5>
              <p class="card-text">This is a longer card with supporting text below as a natural lead-in to additional content. This content is a little bit longer.</p>
            </div>
          </div>

        </div>

      </div>

    </div>

  </div>)
}

export default Contact
