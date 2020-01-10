import React from "react";
import { Alert, Button } from "react-bootstrap";

const item = props => {
  console.log(props.abc);
  return (
    <Alert variant="primary">
      {props.abc}
      <div style={{ display: "inline-block", textAlign: "right" }}>
        <Button
          variant="danger"
          onClick={() => props.rmHandler(props.abc)}
          style={{ marginLeft: "32px" }}
        >
          Delete
        </Button>
      </div>
    </Alert>
  );
};

export default item;
