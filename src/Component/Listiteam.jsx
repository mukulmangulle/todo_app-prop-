import React from 'react'

const Listiteam = ({ task, handleDelete,editTodo }) => {
  return (
    <li className="list-group-item rounded-0">
      {task.text}

      <button className="btn btn-sm btn-danger rounded-0 float-end"
        onClick={() => handleDelete(task.id)}>Delete</button>

      <button className="btn btn-sm btn-warning rounded-0 float-end" 
       onClick={()=>editTodo(task)}
      >Update</button>
    </li>
  )
}

export default Listiteam;