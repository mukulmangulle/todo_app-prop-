import React, { version } from 'react'
import Listiteam from './Listiteam'

const Listgroup = ({ tasks, handleDelete, editTodo }) => {
  return (
    <ul className='list-group my-3'>
      {
        tasks.map((task, index) => (
          <Listiteam key={task.id} task={task} handleDelete={handleDelete} editTodo={editTodo} />
        ))}

    </ul>
  )
}

export default Listgroup;

// Navbar.defaulProps={
//   name:"default Name",
//   version:0,
// };