import React from 'react';

import ScoreModule from '../components/ScoreModule.jsx';
import Score from '../components/Score';
import Name from '../components/Name';

function ScoreBoard(){
  const rows = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20];
  const scoreList = rows.map(e =>  <Score number = {e}/>);
  
  const putClick = () => {
    const help = document.getElementById('name').value;
    const obj = {
      name: document.getElementById('name').value,
      1: [document.getElementById('11').value,
      document.getElementById('12').value,
      document.getElementById('13').value,
    ]
    };
    fetch(`/api/${help}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj)
    })
    .then(res => res.json())
    .then((data) => console.log(data))
    .catch(err => console.error('put error: ', err))
  }

  const add = () => {
    const obj = {
      name: document.getElementById('name').value,
      1: [document.getElementById('11').value,
      document.getElementById('12').value,
      document.getElementById('13').value,
    ]
    };

    fetch('/getDB', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(obj),
    })
    .then(response => response.json())
    .then(data => console.log('pls' , data))
    .catch(err => console.error('error: hurr hurr', err))
  }

  return(
    <div className = 'center'>
      <div className = 'board'>
        <Name />
        <button onClick = {()=> add()}>ADD TO DB [POST]</button>
        <button onClick = {()=> putClick()}>Change someone's existing score [PUT]</button>
        <ScoreModule />
        {scoreList}
      </div>
    </div>
  );
}

export default ScoreBoard;