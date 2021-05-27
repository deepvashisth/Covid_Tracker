import React, {useEffect,useState} from 'react'
import '../Css/stats.css'

const CountryWise = () => {

    const [data,setData]=useState([]);

    useEffect(() => {
        getCovidData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ ]);

    const getCovidData = async() => {
        const res = await fetch("https://api.covid19api.com/summary")
        const actualData= await res.json();
        console.log(actualData.statewise);
        setData(actualData.Countries);

    }



    return (
        <>

            <div className="container-fluid mt-5">
                <div className='main-heading'>
                    <h1 className='mb-5 text-center text'>Country-wise <span className='text-span'>COVID-19</span> Statistics</h1>
                </div>

                <div className="table-responsive">
                    <table className="table table-hover stats_Table">
                        <thead className='thead-dark'>
                            <tr>
                            <td>Country</td>
                            <td>Total Confirmed</td>
                            <td>Total Deaths</td>
                            <td>Total Recovered</td>
                            </tr>


                        </thead>

                        <tbody>
                            {
                                data.map((currElem,index) =>{
                                    return (
                                        <tr key={index}>
                                            <td>{currElem.Country}</td>
                                            <td>{currElem.TotalConfirmed}</td>
                                            <td>{currElem.TotalDeaths}</td>
                                            <td>{currElem.TotalRecovered}</td>
                                        </tr>
                                    )
                                })
                            }

                        </tbody>

                    </table>

                </div>
            </div>
            {

            }
        </>
    )
}

export default CountryWise
