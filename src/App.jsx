import './App.css';
import TodoInput from "./components/TodoInput";
import TodoList from "./components/TodoList";
import { useState } from "react";

function App() {
    const [todoList, setTodoList] = useState(["aaaaaaaaa", "bbbbbbbbb", "ccccccccccccc"]);
    const [todoValue, setTodoValue] = useState("");

    const handleAdd = (newTask) => {
       setTodoList([...todoList, newTask]);
    }

    const handleDelete = (index) => {
        const newTodo = todoList.filter((_, indexTask) => {
            return indexTask !== index;
        });
        setTodoList(newTodo);
    }
    function handleEdit(index) {
        const valueToBeEdited = todoList[index]
        setTodoValue(valueToBeEdited)
        handleDelete(index)
      }
    return (
        <>
            <TodoInput handleAdd={handleAdd}   todoValue={todoValue} setTodoValue={setTodoValue}/>
            <TodoList todoList={todoList} handleDelete={handleDelete}   handleEdit={handleEdit}/>
        </>
    );
}

export default App;
