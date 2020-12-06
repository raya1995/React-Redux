import {Add,Delete,FilterDone,FilterNotDone,Edit} from './ActionTypes';
import { v4 as uuidv4 } from 'uuid';

export const addTask=(data)=>{

return {type:Add,
       payload: { id: uuidv4(), description: data, isDone: false }
}
}

export const deleteTask=(id)=>{
    return  {type:Delete,
             payload:id
          }
}

export const editTask=(id,data)=>{
  return  {type:Edit,
        payload:{id ,data}
          }
}

export const filterDone=()=>{
    return {type:FilterDone}
}
export const filterNotDone=()=>{
    return {type:FilterNotDone}
}