import Button from "./Button";

export default function Todo({todo, onDone}) {
  let style = { backgroundColor: todo.done ? "grey" : todo.color }

  if (todo.done) style.textDecoration = "line-through";

  return <li style={style}>
    {todo.subject} {todo.deadLine}
    <Button onClick={() => onDone(todo.id)}>done</Button>
  </li>
}