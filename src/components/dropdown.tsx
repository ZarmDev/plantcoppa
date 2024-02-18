import React, { useState } from 'react';

function Dropdown(props: any) {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
    <div className={`dropdown ${props.idGiven}`}>
      <button onClick={() => setIsOpen(!isOpen)}>
        {props.title} {isOpen ? '▲' : '▼'}
      </button>
      {isOpen && <div className="dropdown-content">{props.content}</div>}
    </div>
  );
}

export default Dropdown;