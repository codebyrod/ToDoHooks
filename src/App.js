import React, { useState } from "react";

const App = () => {

  const [task, setTask] = useState("")
  const [list, setList] = useState([])

  const handleChange = (event) =>{
    setTask(event.target.value)
    
  }

  const add = (event) => {
    if(task.length > 0) {
    const newtask = {
        task: task,
        id: Date.now()
      }
    setList([...list, newtask])
    setTask("")
    }
    event.preventDefault()
  }

  const del = (id) => {
    setList(list.filter((item) => item.id !== id))
  }

  const clearAll = () => {
    setList([])
  }

  return(
  <>
  <form>
  <input 
  placeholder="digite a nova tarefa" 
  onChange={handleChange}
  value={task}/>
  <button onClick={add}>ADD</button>
  
  </form>
  <div>
    {list.map((item) => (
      <div>
      <p>{item.task}</p>
      <p>{item.id}</p>
      <button onClick={() => del(item.id)}>X</button>
      </div>
    ))}
  </div>
  
  <button onClick={clearAll}>Limpar Tudo</button>

  <p>1° Desafio feito em Hooks do Módulo 3 da EdTech Vai na Web</p>
  <p>Code By Rod</p>
  </>
  )
}

export default App;