import React from 'react'

const Vaccine = () => {

        // const divStyle={
        //     backgroundColor:"#DFDCE3"
        // }

    
    return (
        <>
            <div className='container-fluid mt-4'>
                <div className='main-heading mb-5'>
                    <h1 className='mb-3 text-center'>Check the vaccine avaibility here</h1>
                    <p className='text-center h6'>we are here to keep you posted about vaccine avaibility </p>
                </div>

        <div className='row d-flex justify-content-center '>
            <div className="col-lg-4 col-md-4 col-sm-4 ">
                <form>
                    <div className="mb-3">
                        <label  className="form-label">Pincode</label>
                        <input type="text" name='pin' className="form-control" id="exampleInputEmail1"  aria-describedby="emailHelp" 
                        />
                        
                    </div>
                    <div className="mb-3">
                        <label  className="form-label">Password</label>
                        <input type="date" className="form-control" id="exampleInputPassword1" />
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
