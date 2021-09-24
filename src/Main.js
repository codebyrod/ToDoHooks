import React, { useEffect, useState } from "react";
import * as S from "./styles"

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

    useEffect(() => {
      document.title = "To Do List"
    }, [])
  
    return(
      <S.Container>
        <S.Header>
          <S.Title>To Do List</S.Title>
        </S.Header>
          <S.BoxIpt>
            <S.Form>
              <S.Inp 
              placeholder="digite a nova tarefa" 
              onChange={handleChange}
              value={task}/>
                <S.BtnIpt onClick={add}>ADD</S.BtnIpt>
            </S.Form>
            <S.BoxBtnClear>
                <S.BtnClear onClick={clearAll}>Limpar Tudo</S.BtnClear>
            </S.BoxBtnClear>
          </S.BoxIpt>
        <S.ContainerMap>
          <S.BoxMap>
            {list.map((item) => (
              <S.BoxTask>
                <p>{item.task}</p>
                <S.BoxButton>
                <S.ButtonTask onClick={() => del(item.id)}></S.ButtonTask>
                </S.BoxButton>
              </S.BoxTask>
            ))}
          </S.BoxMap>
        </S.ContainerMap>
        <S.Footer>
        <p>1° Desafio feito em Hooks do Módulo 3 da EdTech Vai na Web</p>
        <p>Code By Rod</p>
        </S.Footer>
        <S.GlobalStyles />
      </S.Container>
      
    )
  }
  
  export default App;