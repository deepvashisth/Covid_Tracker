import React from 'react'
import '../Css/StatsHome.css'

import stats from '../images/stats.svg'
import {Link} from "react-router-dom";

const StatsHome = () => {
    return (
        <div className='container-fluid stats-main'>
            <div className='row d-flex'>
                <div className="col-lg-9 col-md-12 left-box">
                <img className='stats-img' src={stats} alt="" />
                </div>

                <div className="col-lg-3 col-md-12 right-box text-center">
                
                <Link to='/Statistics'>
                <h1 className='h1Stats'>check stateWise stats her!</h1>
                    <button type="button" className="btn  btn-stats btn-danger">
                    Test Your Knowledge
                  </button>
                  </Link>
                </div>
            
            </div>
        </div>


    )
}

export default StatsHome;
