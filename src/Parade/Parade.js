import React, { useState } from 'react';
import Animal from './Animal';
import './Parade.css';

function Parade() {
  const [animalArr, setAnimalArr] = useState(['zebra', 'elephant', 'panda']);

  function animalAdd(animal) {
    setAnimalArr([...animalArr, animal]);
  }

  return <section className='paradeSection'>

    <h2>Add Any Animal You Choose</h2>
    <div className='parade'>

      <Animal animals={animalArr} />
    </div>

    <button onClick={() => animalAdd('zebra')}>Zebra</button>
    <button onClick={() => animalAdd('elephant')}>Elephant</button>
    <button onClick={() => animalAdd('panda')}>Panda</button>
  </section>;
}

export default Parade;
