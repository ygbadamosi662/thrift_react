import React from "react";

function Landlord({ clas, handleClick, name, stylez, display }) {
  const handle = (event) => handleClick(event)
  const myStyle = stylez(clas)
  return (
    <button
      name={name}
      className={clas}
      onClick={(event) => handle(event)}
      style={myStyle}
    >
      <h2>{display}</h2>
    </button>
  );
}

export default Landlord;
