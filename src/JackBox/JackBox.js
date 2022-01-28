import React, { useState } from 'react';
import JackIn from './JackIn';
import './JackBox.css';


function JackBox() {
  const [isOpen, setIsOpen] = useState(false);

  function OpenAndCloseBoxToggle() {
    if (isOpen) {
      setIsOpen(false);
    }
    else {
      setIsOpen(true);
    }
  }
  return <div className='openCLose'>

    <JackIn on={isOpen} />
    <button>Open</button>
    <button>Close</button>
  </div>;
}

export default JackBox;
