/* eslint-disable react/prop-types */
import TodoCard from "./TodoCard";

export default function TodoList(props) {
    // eslint-disable-next-line react/prop-types
    const {todoList}=props;
    return (
        <div>
            <ul className="main">
                {todoList.map((task, indexTask) => {
                    return (
                        <TodoCard key={indexTask} task={task}  {...props} index={indexTask} />
                    );
                })}
            </ul>
        </div>
    );
}


