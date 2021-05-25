
import React, {useState} from 'react'
import axios from 'axios'
const Vaccine = () => {
    const [pin,setPin]=useState([]);
    const [date,setDate]=useState([]);

        // const divStyle={
        //     backgroundColor:"#DFDCE3"
        // }
        

        

        function formatDate (input) {
            var datePart = input.match(/\d+/g),
            year = datePart[0].substring(2), // get only two digits
            month = datePart[1], day = datePart[2];

            return day+'/'+month+'/'+year;
}
    

 // Async function to send the data to the backend
    async function postData() {
            // Data object to be sent to the api endpoint
          

            axios.get('https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode='+pin+'&date='+formatDate(date))
            .then((response) => {
                console.log(response.data);

                
                
  });
            
           
    

            
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        postData()
    }
    
    return (
        <>
            <div className='container-fluid mt-4'>
                <div className='main-heading mb-5'>
                    <h1 className='mb-3 text-center'>Check the vaccine avaibility here</h1>
                    <p className='text-center h6'>we are here to keep you posted about vaccine avaibility </p>
                </div>

        <div className='row d-flex justify-content-center '>
            <div className="col-lg-4 col-md-4 col-sm-4 ">
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label  className="form-label">Pincode</label>
                        <input type="text" 
                        name='pin' 
                        value={pin}
                        className="form-control" id="exampleInputEmail1"  
                        aria-describedby="emailHelp" 
                        onChange = {(e) => setPin(e.target.value)}
                        />
                        
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">date</label>
                        <input type="date" 
                        name='date'
                        value={date}
                        className="form-control" 
                        id="exampleInputPassword1" 
                        onChange = {(e) => setDate(e.target.value)}
                        />
                       
                    </div>
                    
                    <button type="submit" className="btn btn-primary">Submit</button>
                    
                </form>
                <br></br>
                </div>
            </div>
            </div>
        </>
    )
}

export default Vaccine
