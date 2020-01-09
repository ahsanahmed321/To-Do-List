import React from "react";

const item = props => {
  console.log(props.abc);
  return (
    <div>
      <p style={{ display: "inline-block" }}>{props.abc}</p>
      <button onClick={() => props.rmHandler(props.abc)}>Delete</button>
    </div>
  );
};

export default item;
