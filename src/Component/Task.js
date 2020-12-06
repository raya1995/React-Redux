import React from 'react';

import { deleteTask, editTask, filterDone } from '../Redux/Actions/Action';
import { useDispatch } from 'react-redux';

const Task = ({ data }) => {

    const dispatch = useDispatch();

    console.log(data)

    const Update=(e,val)=>{

        e.preventDefault();

        dispatch(editTask(data.id,val));
    
    }
 
    return (
        <>
            <div className="item">
          
            {
          <input className="item_input" value={data.description} />
        }

                <button className="editbutton" onClick={(e)=>Update(e,true)} >Done </button>
                <button className="removebutton" onClick={(e)=>Update(e,false)} > NotDone </button>

            </div>

            <div className="button_div">

              <button className="removebutton" onClick={() => dispatch(deleteTask(data.id))}> Remove </button>

            </div>
        </>
    );



}
export default Task;