import { useState } from "react"



function App() {
  const [todo, setTodo] = useState('')
  const [todoList, setTodoList] = useState([])
  const [isCompleted, setIsCompleted] = useState(false)
  function addTodo(e) {
  e.preventDefault()
  if(!todo) return
  

    setTodoList([...todoList,   {
      name: todo,
      id:  Date.now().toLocaleString(),
      isCompleted: false,
    }])
    setTodo('')
  }


  function compleTodo(id) {
    setTodoList(todoList.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          isCompleted: !todo.isCompleted
        };
      }
      return todo;
    }));
  }

  function deleteTodo(id) {
    const newTodo = todoList.filter(todo => todo.id !== id)

    setTodoList(newTodo)
  }
  

  return  <div className="task">
  <div>
      <label htmlFor="">To Do List App </label>
      <form id="fish" onSubmit={addTodo}>
          
          
          <input type="text" value={todo} onChange={e=>setTodo(e.target.value)} id="item-name" placeholder="Enter Task Title"/>
      
          <button id="submit" type="submit" >add</button>
      </form>
  </div>
  <div className="list">
  <ul id ="parent">
    {
      todoList?.map(todo => <TodoItem key={todo.id} isCompleted={isCompleted} onHandleDelete={deleteTodo} onCompleteTodo={compleTodo} todo={todo} /> )
    }
  </ul>
</div>
</div>

}


function TodoItem({todo, isCompleted, onCompleteTodo, onHandleDelete}) {
  console.log(todo.name) 
  return <li >
    <span className="smmm" onClick={()=>onCompleteTodo(todo.id)}>

     { todo.isCompleted && <img src="/R.png" alt="" />}
    </span>
    <span>

    {todo.name}
    </span>
    <span style={{fontSize: '24px', cursor: "pointer"}} onClick={()=>onHandleDelete(todo.id)}>&times;</span>
    
    </li>
}

export default App