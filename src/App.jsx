import { useState } from 'react'
import './App.css'

function App() {

  const [calculatedValue , setValue] = useState('');
  const stylebutton = {
    backgroundColor:"rgb(164, 159, 159)"
  }

  const showInput = (charact)=>{
    let string = calculatedValue+charact;
    setValue(string);
  }
  const handleResult =()=>{
    let myres = eval(calculatedValue);
    setValue(myres);
  }


  return (
    <>
      <div className="container">
        <div className="calculator">
          <input type='text' value={calculatedValue} disabled placeholder='0'/>
          <div className="all-buttons">
          <button className='ac-class' style={{backgroundColor:"darkred"}} onClick={()=>setValue("")} >AC</button>
          <button style={stylebutton} onClick={()=>showInput("/")}>/</button>
          <button style={stylebutton} onClick={()=>showInput("*")}>*</button>
          <button onClick={()=>showInput(5)}>5</button>
          <button onClick={()=>showInput(2)}>2</button>
          <button onClick={()=>showInput(1)}>1</button>
          <button style={stylebutton} onClick={()=>showInput("-")}>-</button>
          <button onClick={()=>showInput(3)}>3</button>
          <button onClick={()=>showInput(8)}>8</button>
          <button onClick={()=>showInput(9)}>9</button>
          <button style={stylebutton} onClick={()=>showInput("+")}>+</button>
          <button onClick={()=>showInput(4)}>4</button>
          <button onClick={()=>showInput(6)}>6</button>
          <button onClick={()=>showInput(7)}>7</button>
          <button className='zero-class' onClick={()=>showInput(0)}>0</button>
          <button onClick={()=>showInput('.')}>.</button>
          <button className='equal-class' onClick={handleResult}>=</button>

          </div>
          <h3 style={{backgroundColor:"rgb(171, 169, 202)",color:"rgb(182, 107, 107)"}}>Designed and coded by - <a href="https://www.freecodecamp.org/anurag_kundu">Anurag Kundu</a></h3>
        </div>
      </div>
    </>
  )
}

export default App
