import React from "react";
import { useState } from "react";
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
      <p>To do</p>
      <input onChange={onChangeHandler}></input>
      <button onClick={addToList}>Add</button>
      {toDoList}
    </div>
  );
};

export default ToDoList;
