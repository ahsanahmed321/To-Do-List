import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import Item from "../Components/Item";

const ToDoList = props => {
  const [item, setItem] = useState([]);

  const [change, setChange] = useState();

  const addToList = () => {
    setItem([...item, change]);
    console.log(item);
  };

  const onChangeHandler = e => {
    setChange(e.target.value);
  };

  const removeFromList = id => {
    var x = item.indexOf(id);
    var newArr = [...item];
    newArr.splice(x, 1);
    setItem(newArr);
  };

  var toDoList;
  toDoList = item.map(it => {
    return <Item Key={it} abc={it} rmHandler={abcd => removeFromList(abcd)} />;
  });

  console.log("Hi");

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>To do</h1>
      <div style={{ textAlign: "center" }}>
        <input
          style={{ height: "35px", padding: "0px" }}
          onChange={onChangeHandler}
        ></input>
        <Button style={{ marginLeft: "16px" }} onClick={addToList}>
          Add
        </Button>
      </div>
      {toDoList}
    </div>
  );
};

export default ToDoList;
