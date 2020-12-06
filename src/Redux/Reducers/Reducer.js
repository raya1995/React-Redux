
import { Add, Delete, FilterDone, FilterNotDone, Edit } from '../Actions/ActionTypes';


const initialState = { todos: [], filter: []};


export const reducer = (state = initialState, action) => {

   const {type , payload} = action;

   const { todos, filter } = state;

  switch (type) {
          
       
    case Add:
      console.log("reducer", payload);
       
       return { ...state,
       todos: [...todos, payload] 
      
      };

    case Delete:

       return {
         ...state,
         todos: todos.filter(item => item.id !== payload)
       }

     case FilterDone:
 
     console.log(filter)

       return {
       ...state,

         filter : todos.filter(item => item.isDone)
       }

    case FilterNotDone:

      return {
        ...state, // dima ekhalili state lekdima
 
          filter : todos.filter(item => !item.isDone)
        }

    case Edit:

       return  {   
       ...state,
       todos: todos.map(item => {

        if(item.id===payload.id)

        return {...item, isDone:payload.data}
        
      
        return item;

       })
       }

    default: return state;
  }

}