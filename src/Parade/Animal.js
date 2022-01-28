import React from 'react';

export default function Animal({ animals }) {
  return <>
    {
      animals.map((animal, i) => 
        <div key={`${animal}-${i}`}>{`${animal === 'zebra' ? '🦓' : animal === 'elephant' ? '🐘' : animal === 'panda' ? '🐼' : ''}`}</div>
      )

    }
  </>;
}
