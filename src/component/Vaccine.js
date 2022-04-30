import VaccineResult from "./VaccineResult";
import React, { useState } from "react";
import axios from "axios";

const Vaccine = () => {
  const [pin, setPin] = useState([]);
  const [date, setDate] = useState([]);
  //use to show the div
  const [show, setShow] = useState(false);
  const [responseData, setResponseData] = useState([]);

  const formatDate = (input) => {
    var datePart = input.match(/\d+/g),
      year = datePart[0].substring(2), // get only two digits
      month = datePart[1],
      day = datePart[2];

    return day + "/" + month + "/" + year;
  };

  function postData() {
    axios
      .get(
        "https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=" +
          pin +
          "&date=" +
          formatDate(date)
      )
      .then((response) => {
        setResponseData(response.data.sessions);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    postData();
  };

  return (
    <>
      <div className="container-fluid mt-4">
        <div className="main-heading mb-5">
          <h1 className="mb-3 text-center">
            Check the vaccine avaibility here
          </h1>
          <p className="text-center h6">
            we are here to keep you posted about vaccine avaibility{" "}
          </p>
        </div>

        <div className="row d-flex justify-content-center ">
          <div className="col-lg-4 col-md-4 col-sm-4 ">
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label className="form-label">Pincode</label>
                <input
                  type="text"
                  name="pin"
                  value={pin}
                  className="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  onChange={(e) => setPin(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">date</label>
                <input
                  type="date"
                  name="date"
                  value={date}
                  className="form-control"
                  id="exampleInputPassword1"
                  onChange={(e) => setDate(e.target.value)}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                onClick={() => setShow(true)}
              >
                Submit
              </button>
            </form>

            <br></br>

            <button
              type="submit"
              className="btn btn-danger"
              onClick={() => setShow(false)}
            >
              Reset
            </button>
          </div>
        </div>
      </div>

      <div className="container-fluid mt-2">
        {show ? (
          <VaccineResult responseData={responseData} text="hello" />
        ) : null}
      </div>
    </>
  );
};

export default Vaccine;
