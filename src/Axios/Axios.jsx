import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function Axios() {
  const [record, setRecord] = useState([]);

  let url = "https://dummyjson.com/users"

  useEffect(() => {
    axios.get(`${url}`)
    .then((res)=>{
      setRecord(res.data.users);
    }).catch((err)=>{
      console.log(err);
      return false;
    })
  });
  return (
    <>
      <center>
        <h1 style={{ color: "black", fontSize: "40px", margin: " 45px" }}>
          Api Calling With Axios Method
        </h1>

        <Link
          to={"/"}
          style={{
            color:'black',
            border:'2px solid black',
            fontWeight:'700',
            textDecoration: "none",
            padding: "10px",
          }}
        >
          Go to Fetch Method
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
                    <h5  >
                    <p style={{ marginTop: "20px" }}>
                      <img  style={{height:'150px' ,marginLeft:'100px',display:'flex',marginBottom:'20px' , flexWrap:'wrap',justifyContent:'center'}} src={val.image} alt="" />
                      </p>
                     
                      <p className="text-sm" style={{ marginTop: "20px" }}>
                        Firstname :- {val.firstName}
                      </p>
                      <p className="text-sm "   >
                        Lastname :- {val.lastName}
                      </p>
                      <p className="text-sm "   >
                      Maiden Name :- {val.maidenName}
                      </p>
                      <p className="text-sm "   >
                        Age :- {val.age}
                      </p>
                      <p className="text-sm "   >
                      Gender :- {val.gender}
                      </p>
                      <p className="text-sm "   >
                      Email :- {val.email}
                      </p>
                      <p className="text-sm "   >
                      Phone :- {val.phone}
                      </p>
                      <p className="text-sm "   >
                      Username :- {val.username}
                      </p>
                      <p className="text-sm " >
                      Password :- {val.password}
                      </p>
                      <p className="text-sm "   >
                      BirthDate :- {val.birthDate}
                      </p>
                     
                    </h5>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default Axios;
