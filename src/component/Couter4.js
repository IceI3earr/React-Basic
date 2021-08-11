import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { createStore } from "redux";
import produce from 'immer'

const reducers = (count = {state : 0}, action) => {
      switch (action.type) {
        case "INCREMENT":
          return produce(count, draft => {draft.state++});
        case "DECREMENT":
          return produce(count, draft => {draft.state--});
        default: break
      }
      return count.state;
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

export default function Couter4() {
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
