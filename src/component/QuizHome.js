import React from 'react'
import '../Css/QuizHome.css'
import {Link} from "react-router-dom";
import quizImg from '../images/quizImg.png';

const QuizHome = () => {
  return (<div className='container-fluid QuizMain'>
    <div className='row d-flex'>

      <div className='col-lg-6 col-md-12 justify-content-center rightbox'>

        <h1 className='par'>Take a
          <span className='gc-c'>Quiz</span>
          on covid</h1>
        <br></br>

        <Link className="linkButton" to='/quiz'>
          <button type="button" className="btn btn-dark btn-lg btn_info">
            Test Your Knowledge</button>
        </Link>

      </div>

      <div className='col-lg-6 col-md-12 col-sm-12 justify-content-center leftbox'>
        <img className='imageQuiz' src={quizImg} alt=""/>

      </div>

    </div>

  </div>)
}

export default QuizHome
