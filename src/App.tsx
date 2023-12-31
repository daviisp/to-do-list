import { useState } from "react"
import { Todo } from "./types/Todo"
import Card from "./components/Card"
import "./App.css"


const App = () => {
 const [todos, setTodos] = useState<Todo[]>([])
 const [value, setValue] = useState("")

 const addTodo = () => {
  if (!value) {
    return;
  }
  const allTodos = [...todos, {
    id: Math.random(),
    title: value,
    completed: false
  }]
  setTodos(allTodos)
 }

 const completeTodo = (id: number) => {
  const allTodos = [...todos]
  allTodos.map((todo) => todo.id === id ? todo.completed = !todo.completed : todo)
  setTodos(allTodos)
 }

 const removeTodo = (id: number) => {
  const allTodos = [...todos]
  const filteredTodos = allTodos.filter((todo) => todo.id === id ? null : todo)
  setTodos(filteredTodos)
 }

  return (
    <div className="app">
      <div className="add-todo">
        <input type="text" placeholder="Digite uma tarefa para adicionar" onChange={(ev) => setValue(ev.target.value)}
        value={value}/>
          <button onClick={addTodo}>Criar tarefa</button>
      </div>
        {todos.map((todo) => (
         <Card key={todo.id} todoprops={todo} completeTodo = {completeTodo} removeTodo={removeTodo}/>
        ))}
      
    </div>
  )
}
export default App