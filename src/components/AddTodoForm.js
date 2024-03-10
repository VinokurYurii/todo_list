import {useState} from "react";
import Button from "./Button";
import ColorOption from "./ColorOption";

export default function AddTodoForm({onAddTodo}) {
  const [subject, setSubject] = useState('');
  const [deadLine, setDeadLine] = useState('');
  const [color, setColor] = useState('white');

  function handleAddTodo(e) {
    e.preventDefault();

    const newTodo = {
      subject, deadLine, color, id: crypto.randomUUID(), done: false
    }

    onAddTodo(newTodo);
  }

  return <form>
    <label>Subject</label>
    <input type="text" value={subject} onChange={e => setSubject(e.target.value)}/>

    <label>Dead Line</label>
    <input type="text" value={deadLine} onChange={e => setDeadLine(e.target.value)}/>

    <label>Color</label>
    <select value={color} onChange={e => setColor(e.target.value)}>
      {["white", "red", "orange", "green", "blue"].map(color => <ColorOption color={color} key={color}/>)}
    </select>

    <Button onClick={handleAddTodo}>Add TODO</Button>
  </form>
}