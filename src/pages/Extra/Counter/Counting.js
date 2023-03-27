import React, {useState} from 'react'
import "./Counting.css"
import Count from "./Count"

export default function Counting() {
    const [count,setCount] = useState(0)

    function add(){
        setCount(prevCount => prevCount +1)
    }
    
    function subtract(){
        setCount(prevCount => prevCount -1)
    }

  return (
    <div className='counter'>
      <button className='counter-minus' onClick={subtract}>-</button>
      <Count number = {count} />
      <button className='counter-plus' onClick={add}>+</button>
      <br/><br/>
    </div>
  )
}
