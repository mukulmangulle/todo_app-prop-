import { useState } from 'react';
import React from 'react';
import Navbar from './Component/Navbar';
import Form from './Component/Form';
import Listgroup from './Component/Listgroup';

const App = () => {
  const [name, setName] = useState("Ultimate Todo App...");
  const [version, setVersion] = useState(0);

  const [edit, setEdit] = useState({
    todo:{},
    editMode: false,
  });

  //  let task = ["Do somthing great", "coading", "Eat", "sleep"];
  const [tasks, setTasks] = useState([
    { id: 1, text: "coding" },
    { id: 2, text: "man" },
    { id: 3, text: "cod" },
    { id: 4, text: "sleep" },
  ]);


  //delete
  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id))

    //   setTask(task.filter((task)=>{
    //     if (task.id !== id){
    //       return true
    //     }
    //   })
    //   );
  };

  //save

  const saveTodo = (text) => {
    const newTask = {
      id: crypto.randomUUID(),
      text: text
    };


    setTasks([newTask, ...tasks]);
  };


  // edit

  const editTodo = (todo) => {
    setEdit({
      todo: todo,
      editMode: true,
    })
  }

  // update

  const updateTodo = (oldId, newText) => {
   setTasks(tasks.map(item=> item.id===oldId ? {...item , text : newText} : item))
}



return (
  <>
    <Navbar name={name} version={version} />
    {/* <button className="btn btn-danger" onClick={() => handleClick()}>Change Name</button> */}

    <div className="container p-5">
      <Form saveTodo={saveTodo} edit={edit} updateTodo={updateTodo} />
      <Listgroup tasks={tasks} handleDelete={handleDelete} editTodo={editTodo} />


    </div>
  </>
);
};

export default App;