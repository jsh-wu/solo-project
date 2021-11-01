import React, { useState } from 'react';
import Name from '../components/Name';
import Score from '../components/Score';

function ViewScores (){
  const [score, setScore] = useState('');

  const getClick = () => {
    const help = document.getElementById('name').value;
    console.log('click event ', help);

    fetch(`/api/${help}`)
    .then(res => res.json())
    .then((data) => {
      console.log(data);
      setScore(JSON.stringify(data[1]))
    })
    .catch(err => console.error('err: ', err))
  }

  const deleteClick = () =>{
    const help = document.getElementById('name').value;
    
    fetch(`/api/${help}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'text/html'
      },
    })
    .then(res => res.json())
    .then((data) => console.log(data))
    .catch(err => console.error('delete error: ', err))
  }

  return(<div>
      <h2>View Scores</h2>
      <Name />
      <button onClick = {()=>getClick()}>[GET] a score </button>
      <button onClick = {()=>deleteClick()}>Sylvia's: GOD BUTTON [DELETE]</button>
      <div>{score}</div>
   </div>)
}

export default ViewScores;