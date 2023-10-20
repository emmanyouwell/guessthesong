import { useState } from 'react';
import './ToggleSwitch.css';

const ToggleSwitch = ({isOn, onToggleChange}) => {
 

 
    const handleClick = () => {

        onToggleChange();
      };

  return (
    <div className={`toggle-switch ${isOn ? 'on' : 'off'}`} onClick={handleClick}>
      <div className='toggle-switch-handle'></div>
    </div>
  );
};

export default ToggleSwitch;