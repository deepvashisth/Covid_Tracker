import React from 'react'
import '../Css/QuizHome.css'
import {Link} from "react-router-dom";

const QuizHome = () => {
  return (
  <div className='QuizMain'>
    <button type="button" class="btn btn_info btn-lg download-button">
      <Link className="linkButton" to='/quiz'>Test Your Knowledge</Link>
    </button>
  </div>
)
}

export default QuizHome
