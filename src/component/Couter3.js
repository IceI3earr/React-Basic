import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { createStore } from "redux";

const reducers = (count = 0, action) => {
    switch (action.type) {
        case "INCREMENT":
          return count + 1;
        case "DECREMENT":
          return count - 1;
        default: break
      }
      return count;
};
const increment = () => {
    return {
      type: "INCREMENT",
    };
};  
const decrement = () => {
    return {
      type: "DECREMENT",
    };
};
export const store = createStore(reducers);

export default function Couter3() {
const count = useSelector((count)=>count)
const dispatch = useDispatch();
    return ( 
        <div className="app">
            <h1>{count}</h1>
            <div className="button-wrapper">
            <button onClick={() => dispatch(decrement())}>-</button>
            <button onClick={() => dispatch(increment())}>+</button>
            </div>       
        </div>
        )
}
