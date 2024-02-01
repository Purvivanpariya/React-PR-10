import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Fetch() {
  const [record, setRecord] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/quotes")
      .then((res) => res.json())
      .then((rec) => setRecord(rec.quotes));
  });

  return (
    <div className="container">
      <div className="row">
        <center>
          <h1 style={{ color: "black", fontSize: "40px", margin: " 45px" }}>
            Api Calling With Fetch Method
          </h1>
          <Link
            to={"/axios"}
            style={{
              color: "black",
              border: "2px solid black",
              fontWeight: "700",
              textDecoration: "none",
              padding: "10px",
            }}
          >
            Go to Axios Method
          </Link>
        </center>

        <div className="gtco-testimonials">
          <div className="owl-carousel owl-carousel1 owl-theme">
            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                marginTop: "40px",
                justifyContent: "center",
              }}
            >
              {record.map((val) => {
                return (
                  <div
                    className="card text-center w-25 m-4"
                  >
                    <div className="card-body" style={{border:'1px solid black',borderRadius:'5px'}}>
                      <h5>
                        No :- {val.id}
                        <br />
                        <br />
                        <span style={{ marginTop: "20px" }}>
                          Quotes {val.quote}
                        </span>
                      </h5>
                      <p className="card-text mt-4">Author :- {val.author}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Fetch;
