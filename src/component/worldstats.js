import React, {useEffect, useState} from 'react'
import '../Css/Worldstats.css'

const Stats = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    getCovidData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getCovidData = async () => {
    const res = await fetch("https://api.covid19api.com/world/total")
    const actualData = await res.json();
    setData(actualData);

  }

  return (< div className = "container-fluid mt-5" > <div className='main-heading'>
    <h1 className='mb-5 text-center text'>World Total
      <span className='text-span'>COVID-19</span>
      Statistics</h1>
  </div>
  <div className="container">
    <div className="row borr">
      <div className="col-sm bor">
        <div>
          <div>
            <h3>Total Confirmed</h3>
          </div>
          <h2>{data.TotalConfirmed}</h2>
        </div>
      </div>
      <div className="col-sm bor">
        <div>
          <div>
            <h3>Total Deaths</h3>
          </div>
          <h2>{data.TotalDeaths}</h2>
        </div>
      </div>
      <div className="col-sm bor">
        <div>
          <div>
            <h3>Total Recovered</h3>
          </div>
          <h2>{data.TotalRecovered}</h2>
        </div>
      </div>
    </div>
  </div> < /div>
)
}

export default Stats
