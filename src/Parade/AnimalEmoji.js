import React from 'react';


export default function AnimalEmoji({ animal }) {
  return <div>
    {`${animal === 'zebra' ? '🦓' : animal === 'elephant' ? '🐘' : animal === 'panda' ? '🐼' : ''}`}
  </div>;
}
