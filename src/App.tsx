import React, {useState} from 'react';
import './App.css';
import {Igor} from "./Igor";
import {Georgy} from "./Georgy";

function App() {
    
    const[count,setCount]=useState(1)
    
    return (
        <div className="App">
            <div>29.10.2024-9:10-MASTER</div>
            <Igor/>
            <Georgy/>
            <Igor/>
            <div>1.10.2024-23:10-MASTER</div>
            <h3>{count}</h3>

            <button onClick={()=>setCount(count+1)}>+</button>
        </div>
    );
}

export default App;
