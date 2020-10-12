import React, { useState } from 'react';

export function Accordian() {
  const [isToggled, setIsToggled] = useState(false);
  // const showMe = isToggled ? <h3>Show Me</h3> : null;

  return (
    <div>
      {/* {showMe} */}
      {/* {isToggled ? <h3>Show Me</h3> : null} */}
      {isToggled && <h3>Show Me</h3>}
      <button onClick={() => setIsToggled(!isToggled)}>Toggle</button>
    </div>
  );
}
