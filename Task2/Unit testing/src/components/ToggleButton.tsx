// ToggleButton.tsx
import React, { useState } from 'react';

const ToggleButton: React.FC = () => {
  const [isOn, setIsOn] = useState<boolean>(false);

  const toggle = () => {
    setIsOn(prevState => !prevState);
  };

  return (
    <div>
      <h2>Toggle Button</h2>
      <button onClick={toggle}>{isOn ? 'On' : 'Off'}</button>
    </div>
  );
}

export default ToggleButton;
