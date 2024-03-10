import Todo from "./Todo";

export default function TodoList({todoList, onDone}) {

  return <ul>
    {todoList.map((todo) => (
      <Todo
        todo={todo}
        onDone={onDone}
        key={todo.id}
      />))}
  </ul>
}