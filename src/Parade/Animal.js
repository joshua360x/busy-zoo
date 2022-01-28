import React from 'react';

export default function Animal(props) {
  return <>
    {
      props.animals.map((animal, i) => 
        <div key={`${animal}-${i}`}>{`${animal === 'zebra' ? '🦓' : animal === 'elephant' ? '🐘' : animal === 'panda' ? '🐼' : ''}`}</div>
      )

    }
  </>;
}
