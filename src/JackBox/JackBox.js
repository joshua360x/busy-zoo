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
  return <div className='openCLose'>

    <JackIn on={isMaskOn} />
    <button onClick={OpenAndCloseBoxToggle}>{`${isMaskOn ? 'Take Mask Off' : 'Put Mask On'}`}</button>
    {/* <button>Close</button> */}
  </div>;
}

export default JackBox;
