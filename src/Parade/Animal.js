import React from 'react';
import AnimalEmoji from './AnimalEmoji';


export default function Animal({ animals }) {
  return <>
    {
      animals.map((animal, i) => 
        <AnimalEmoji key={`${animal}-${i}`} animal={animal} />
      )

    }
  </>;
}
