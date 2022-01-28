import React from 'react';

export default function JackIn({ on }) {
  return <>
    <img className='mask' src={`${on ? './images/virus.svg' : './images/mask.svg'}`} alt="" />
  </>;
}
