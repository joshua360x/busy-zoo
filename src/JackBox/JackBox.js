import React, { useState } from 'react';
import JackIn from './JackIn';
import './JackBox.css';


function JackBox() {
  const [isMaskOn, setIsMaskOn] = useState(false);

  function OpenAndCloseBoxToggle() {
    if (isMaskOn) {
      setIsMaskOn(false);
    }
    else {
      setIsMaskOn(true);
    }
  }
  return <section className='openCLose'>

    <JackIn on={isMaskOn} />
    <button onClick={OpenAndCloseBoxToggle}>{`${isMaskOn ? 'Take Mask Off' : 'Put Mask On'}`}</button>
    {/* <button>Close</button> */}
  </section>;
}

export default JackBox;
