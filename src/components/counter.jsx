import App from "../App"
import './counter.css'
import { useState } from 'react'



function Counter() {
    const [arr, setArr] = useState([])

    function addPlus(){
        setArr(prevArr => [...prevArr, "++"])
    }

    function addMinus() {
        setArr(prevArr => [...prevArr, "--"])
    }

    return( 
        <div>
    <button onClick={addMinus}> - </button>
    <button onClick={addPlus}> + </button>
    {arr.toString()}
    </div>
    
)
}



export default Counter