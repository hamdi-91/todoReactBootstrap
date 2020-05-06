import React, { useState } from 'react';
import AddTodoForm from './AddTodoForm';

const Todo = () => {
    const [todos, setTodos] = useState([
        { id: 1, todo: 'acheter du lait' },
        { id: 2, todo: 'acheter du pain' },
        { id: 3, todo: 'acheter du beurre' },
        { id: 4, todo: 'acheter du pain' },
    ])

const [warning,setWarning]=useState(false);

    const myTodos = todos.map(todo => {
        return (
            <li className="list-group-item" key={todo.id}> {todo.todo}</li>
        )
    })

    const addNewTodo = (newTodo) => {

if (newTodo!=""){
warning && setWarning (false);

    setTodos([...todos, {
        id:new Date().getTime(),
        todo:newTodo,

    }])

}else{
    setWarning(true);
}
    }

    const warningMsg=warning && <div className="alert alert-danger mt-5" role="alert"> your input is empty</div>
    return (
        <div>
            {warningMsg}
            <h1 className="text-center"> {todos.length} todo</h1>
            <ul className="list-group mg-5">
                {myTodos}

            </ul>
            <AddTodoForm addNewTodo={addNewTodo} />
        </div>
    )
}
export default Todo;