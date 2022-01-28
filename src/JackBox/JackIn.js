import React from 'react';

export default function JackIn(props) {
  return <>
    <img className='mask' src={`${props.on ? './images/virus.svg' : './images/mask.svg'}`} alt="" />
  </>;
}
