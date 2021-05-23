import React, { useState } from "react";
import ToDoLists from './ToDoLists';

const App =() => {
const [inputlist, setInputlist] = useState("");
const [items, setItems] =  useState([]);

const itemsEvent =(event) => {

  setInputlist(event.target.value);
};

const listOfItems =() => {
 setItems((oldItems) => {
  return[...oldItems, inputlist];
  });
  setInputlist("");
};

const deleteItems = (id) => {
  console.log("deleted");
 setItems((oldItems)  => {
   return oldItems.filter((arrElem, index) => {
     return index !==id;
   })
 }) 
};


return (
  <>
  <div className="main_div">
    <div className="center_div">
      <br/> 
      <h1> ToDo List </h1>
      <br/>
      <input type="text" 
      placeholder="Add a Items" 
      value={inputlist} 
      onChange={itemsEvent}/>
      <button onClick={listOfItems}> + </button>
  
    <ol>
       { /* <li> {inputlist} </li>*/}
       
       {items.map((itemval, index) => {
        return (
         <ToDoLists 
        key={index} 
        id={index} 
        text ={itemval}
        onselect ={deleteItems}
        />
        );
        })}
     
      </ol>
</div>
</div>
     </>
);
};

export default App;