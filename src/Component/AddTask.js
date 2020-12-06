import React, { useState } from "react";
import { useDispatch } from 'react-redux';
import { addTask, filterDone, filterNotDone } from '../Redux/Actions/Action';
import { v4 as uuidv4 } from 'uuid';



const AddTask = () => {

    const[description, setDescription]=useState("");
    
    console.log(description)

   const handelSubmit=()=>{

      dispatch(addTask(description));

      setDescription("");

      document.querySelector('.input').value="";

   } 

    const handleSearchDone=()=>{

    dispatch(filterDone());

    }

    const handleSearchNotDone=()=>{

      dispatch(filterNotDone());
  
      }

  const dispatch = useDispatch();

  return (
      <>

        <h1>

        <span className="title"> TODO </span>App

      </h1>

        <input type="text" className="input" onChange={(e)=> setDescription(e.target.value)}   size="50"/>

        <button onClick={handelSubmit} className="addbutton" > <i className="fa fa-plus"> ADD </i></button>

     <button className="addbutton" onClick={handleSearchDone} > FD<i className="fa fa-search"></i> </button> 

    <button className="addbutton"onClick={handleSearchNotDone}  > FND <i className="fa fa-search"></i> </button>
      </>
  );

}
 
 export default AddTask;





