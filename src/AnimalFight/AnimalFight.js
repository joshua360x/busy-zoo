import React, { useState } from 'react';
import './AnimalsFight.css';

function AnimalFight() {
  const [unicornHeight, setUnicornHeight] = useState(2);
  const [lionHeight, setLionHeight] = useState(2);
  // test with template literal
  // const width = 3;

  // function to handle both height for both addition and subtracton
  // function handleTransFormedHeightForBeasts(beast, mathFunction) {
  //   if (mathFunction === 'add' && beast === 'unicorn') {
  //     setUnicornHeight(unicornHeight + 1);
  //   }
  //   else if (mathFunction === 'subtract' && beast === 'unicorn') {
  //     setUnicornHeight(unicornHeight - 1);
  //   }
  //   else if (mathFunction === 'add' && beast === 'lion') {
  //     setLionHeight(lionHeight + 1);
  //   }
  //   else if (mathFunction === 'subtract' && beast === 'lion') {
  //     setLionHeight(lionHeight - 1);
  //   }
  //   else {
  //     alert('Invalid Arguments, please check parameters');
  //   }
  // }

  function handleLion(mathFunction) {
    if (mathFunction === 'add') {
      setLionHeight(lionHeight + 1);
    } else {
      setLionHeight(lionHeight - 1);
    }
  }

  function handleUnicorn(mathFunction) {
    if (mathFunction === 'add') {
      setUnicornHeight(unicornHeight + 1);
      console.log(
        '🚀 ~ file: AnimalFight.js ~ line 42 ~ handleUnicorn ~ unicornHeight',
        unicornHeight
      );
    } else {
      setUnicornHeight(unicornHeight - 1);
    }
  }
  // function handleLionAdd() {

  //   setLionHeight(lionHeight + 1);
  // }

  return (
    <section className="animalFight">
      <div className="animal">
        <div style={{ fontSize: `${unicornHeight}rem` }}>🦄</div>
        <div className="btns">
          <button onClick={() => handleUnicorn('add')}>Increase</button>
          <button onClick={() => handleUnicorn('subtract')}>Decrease</button>
        </div>
      </div>

      <div className="animal">
        <div style={{ fontSize: `${lionHeight}rem` }}>🦁</div>
        <div className="btns">
          <button onClick={() => handleLion('add')}>Increase</button>
          <button onClick={() => handleLion('subtract')}>Decrease</button>
        </div>
      </div>
    </section>
  );
}

export default AnimalFight;
