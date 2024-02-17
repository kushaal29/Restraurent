import React, { useReducer } from 'react'
import './states.css'


const reducer=(state,action)=>{
    if(action.type==="INCR")
    {
        state=state+1;
    }
    if(action.type==="DECR" && state>0)
    {
        state=state-1;
    }
    return state
}





const UseReducer = () => {

    const initialData=10;
const [state, dispatch]= useReducer(reducer,initialData);
  return (
    
   <>
   
   
   
   <div className="center_div">
        <p>{state} </p>
        <div className="button2" onClick={()=>dispatch({type: "INCR"})}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>

            INCREASing
        </div>

        <div className="button2" onClick={()=>dispatch({type: "DECR"})}>
            <span></span>
            <span></span>
            <span></span>
            <span></span>

            DECREASing
        </div>
    </div>
    
   </>
  )
}

export default UseReducer
