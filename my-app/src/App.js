import { useState } from "react";

import './App.css';
import './components/button/button.css'
import Button from './components/button/button';
import './components/todo-list/todo-list.css';
import TodoItem from './components/todo-list/todo-item';

function App() {

  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);

  const addTodo = () => {
    if (input.trim()){
      setTodos([...todos, input.trim()]);
      setInput('');
    }
  };

  return (
    <>
      <div className="header">
        <h1>Todo List</h1>
        <input value={input} onChange={e => setInput(e.target.value)} placeholder="Add item..." className="input-field"/>
        <Button onClick={addTodo} text="Add Item"/>
      </div>
      <hr />
      <div className="todo-items">
        {todos.map((todo, index) => (
          <TodoItem text={todo} key={index} />
        ))}
      </div>
    </>
  );
}

export default App;
