
import React, { useEffect, useState } from "react";
import axios from "axios";
import './UserList.css'


const UserLists = () => {
  
    const mystyle = {
        color: "white",
        backgroundColor: "DodgerBlue",
        padding: "10px",
        fontFamily: "Arial"
      };


  const [data, setData] = useState([]); 

  const [error, setError] = useState(null); 

  useEffect(() => {

    const fetchData = async () => {
   
      const respone = await axios.get(
        "https://jsonplaceholder.typicode.com/users"
      );
      setData(respone.data);
    };

    fetchData();
  }, []);
  console.log(data);

  return (
    <>
     
        {data.map((item, i) => (
         
         <>
 <div className="container" >
      <div class="card" >
  
  <div  class="card-body">
        <h5 class="card-title" > {item.name}</h5>
        <p class="card-text"> <span style={mystyle}>City</span> : {item.address.city}</p>
        <p class="card-text"><span style={mystyle}> Geographie</span> : {item.address.geo.lat} / {item.address.geo.lng}  </p>
        <p class="card-text"> <span style={mystyle}>Street</span> : {item.address.street}  </p>
        <p class="card-text"><span style={mystyle}> Suite </span>: {item.address.suite}   </p>
        <p class="card-text"><span style={mystyle}> Zipcode</span> :{item.address.zipcode}  </p>
  

        <p class="card-text"><span style={mystyle}>Company </span>1) - {item.company.bs}</p>
        <p class="card-text">2) - {item.company.name}</p>
        <p class="card-text"><span style={mystyle}>Email </span>: {item.email}</p>
        <p class="card-text"><span style={mystyle}>Username </span>: {item.username}</p>
        <p class="card-text"><span style={mystyle}>Website</span> : {item.website}</p>

        </div>
 </div>
 </div>
   </>
           
        ))}
        ;
     
    </>
  );
};



export default UserLists;
