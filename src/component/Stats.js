import React, {useEffect,useState} from 'react'
import '../Css/stats.css'

const Stats = () => {

    const [data,setData]=useState([]);

    useEffect(() => {
        getCovidData();

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [ ]);

    const getCovidData = async() => {
        const res = await fetch("https://api.covid19india.org/data.json")
        const actualData= await res.json();
        console.log(data.statewise);
        setData(actualData.statewise);

    }

   

    return (
        <>

            <div className="container-fluid mt-5">
                <div className='main-heading'>
                    <h1 className='mb-5 text-center text'>State-wise <span className='text-span'>COVID-19</span> Statistics</h1>
                </div>

                <div className="table-responsive">
                    <table className="table table-hover stats_Table">
                        <thead className='thead-dark'>
                            <tr>
                            <td>State</td>
                            <td>Confirmed</td>
                            <td>Recovered</td>
                            <td>Deaths</td>
                            <td>Active</td>
                            </tr>


                        </thead>

                        <tbody>
                            {
                                data.map((currElem,index) =>{
                                    return (
                                        <tr key={index}>
                                            <td>{currElem.state}</td>
                                            <td>{currElem.confirmed}</td>
                                            <td>{currElem.recovered}</td>
                                            <td>{currElem.deaths}</td>
                                            <td>{currElem.active}</td>
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

export default Stats
