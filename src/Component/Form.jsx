import React, { useEffect, useState } from 'react'
import Listgroup from './Listgroup';

const Form = ({saveTodo,edit , updateTodo}) => {

  const [text, setText]=useState("")

   const handleSubmit = (e)=>{
    e.preventDefault();
      if(edit.editMode){
        updateTodo(edit.todo.id , text)
      }else{
        saveTodo(text);
      }
      setText("");
   }

   useEffect(()=>{
      setText(edit.todo.text);
   },[edit]);


  return (
    <form className="my-2" onSubmit={(e)=>handleSubmit(e)} >
      <input className='form-control rounded-0 my-3' 
      type="text" 
      placeholder='Enter text here'
      onChange={(e)=>setText(e.target.value)} 
      value={text}
      required
      
     
      />
      <button className="btn btn-success rounded-0 w-100"> Save</button>
    </form>
  )
}

export default Form;