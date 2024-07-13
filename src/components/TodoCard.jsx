
function TodoCard(props) {
    // eslint-disable-next-line react/prop-types
    const { task ,handleDelete ,index ,handleEdit}=props;
    return (
        <li className="todoItem">
            {task}
            <div className="actionsContainer">
                <button  onClick={()=>{
                    handleEdit(index)

                }}>
                <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button  onClick={()=>{handleDelete(index)}}>
                <i className="fa-solid fa-trash-can"></i>
                </button>
            </div>
        </li>
    );
}

export default TodoCard;
