import React, { useState } from "react";
import ToDoLIst from "./ToDOList";


function Login(){

    const [inputText,setInputText]=useState("");
    const [items,setItems]=useState([]);
    
   function handleChange(event){
       const newValue=event.target.value;
       setInputText(newValue)
   }
   function addItem(){
        setItems(prevItems=>{
        return [...prevItems,inputText];
        })
        setInputText("");
   }
function deleteItem(id){
    
    setItems(prevItems=>{
        return prevItems.filter(
            (item,index)=>{

                console.log(item)
                return !index==id
            }
        )
    })
}
  
    return(
    <div className="login">
        <div className="heading">
            <h1>Todo list</h1>
        </div>
        <div className="form">
        <input onChange={handleChange} value={inputText}/>
        <button onClick={addItem}>
        
        <span>addItem</span>
        </button>
        </div>
        <ul>
        {
            items.map((todoItem,index) =>
            <ToDoLIst 
            key={index}
            id={index} 
            text={todoItem}
            onChecked={deleteItem}
            />
        )}
        </ul>
        <div>

        </div>
    </div> 
    ) 
}
export default Login;