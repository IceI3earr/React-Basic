import React,{useState} from 'react'
import './Couter.css'

export default function Couter2() {
    const [count,setCount] = useState(0);

    return ( 
        <div className="app">
            <h1>{count}</h1>
            <div className="button-wrapper">
                <button onClick={() => setCount(count-1)}>-</button>
                <button onClick={() => setCount(count+1)}>+</button>
            </div>        
        </div>
        )
}
