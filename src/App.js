import TodoList from "./components/TodoList";
import {useState} from "react";
import AddTodoForm from "./components/AddTodoForm";

function App() {
  const [todoList, setTodoList] = useState([]);

  function handleAddTodo(newToto) {
    setTodoList(oldTodo => [...oldTodo, newToto])
  }

  function handleDone(todoId) {
    const updatedTodoList = todoList.map((todo) => {
      if (todo.id !== todoId) return todo;

      return {
        ...todo,
        done: !todo.done
      }
    })

    setTodoList(updatedTodoList);
  }

  return (
    <div className="App">
      <div>
        <TodoList todoList={todoList} onSetTodoList={setTodoList} onDone={handleDone}/>
        <AddTodoForm onAddTodo={handleAddTodo} />
      </div>
      <div>

      </div>
    </div>
  );
}

export default App;
