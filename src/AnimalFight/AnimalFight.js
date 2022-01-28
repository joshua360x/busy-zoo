import React, { useState } from 'react';
import './AnimalsFight.css';

function AnimalFight() {
  const [unicornHeight, setUnicornHeight] = useState(0);
  const [lionHeight, setLionHeight] = useState(0);
  // test with template literal
  const width = 3;

  // function to handle both height for both addition and subtracton
  function handleTransFormedHeightForBeasts(beast, mathFunction) {
    if (beast === 'unicorn' && mathFunction === 'add') {
      setUnicornHeight(unicornHeight + 1);
    }
    else if (beast === 'unicorn' && mathFunction === 'subtract') {
      setUnicornHeight(unicornHeight - 1);
    }
    else if (beast === 'lion' && mathFunction === 'add') {
      setLionHeight(lionHeight + 1);
    }
    else if (beast === 'lion' && mathFunction === 'subtract') {
      setLionHeight(lionHeight - 1);
    }
    else {
      alert('Invalid Arguments, please check parameters');
    }
  }


  return <div className='animalFight'>

    <div className='animal'>
      <p style={{ transform: `scale(${width})` }}>🦄</p>
      <button onClick={() => handleTransFormedHeightForBeasts('unicorn', 'add')}>Increase</button>
      <button onClick={() => handleTransFormedHeightForBeasts('unicorn', 'subtract')}>Decrease</button>
    </div>

    <div className='animal'>
      <p>🦁</p>
      <button onClick={() => handleTransFormedHeightForBeasts('lion', 'add')}>Increase</button>
      <button onClick={() => handleTransFormedHeightForBeasts('lion', 'subtract')}>Decrease</button>
    </div>



  </div>;
}

export default AnimalFight;
