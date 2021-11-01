import React, { useState, useEffect } from 'react';

function Score(props){
  const number = props.number;
  const [input1, setInput1] = useState(0)
  const [input2, setInput2] = useState(0)
  const [input3, setInput3] = useState(0)

  
  // get input values and add together
  const total = (number) => {
    // console.log(document.getElementById(`11`).value);
    // const one = Number(document.querySelector(`#${number}1`).value);
    // const two = Number(document.querySelector(`#${number}2`).value);
    // const three = Number(document.querySelector(`#${number}3`).value);

    // if(one && two && three) 
    document.getElementById('r'+ number).innerText = Number(input1) + Number(input2) + Number(input3);
  }

  useEffect(() => {total(number); },[input1, input2, input3])
  
  // setting ids and creating input elements
  const mapInputs = 
      <>
      <input className='score' id = {`${number}1`} value={input1} onChange = {(e) => setInput1(e.target.value)}/>
      <input className='score' id = {`${number}2`} value={input2} onChange = {(e) => setInput2(e.target.value)}/>
      <input className='score' id = {`${number}3`} value={input3} onChange = {(e) => setInput3(e.target.value)}/>
      </>


  return(
    <div className = 'row' key = {number}>
      <label>{number}</label>
      {mapInputs}
      <label id = {`r${number}`}>tbd</label>
      <label>running total</label>
    </div>
  ); 
}

export default Score;