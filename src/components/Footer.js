import React, {useContext,useState} from 'react';
import { DataContext } from './DataProvider'

export default function Footer() {
    const [checkAll, setCheckAll] = useState(false);
    const [todos, setTodos] = useContext(DataContext);
    
    const handleCheckAll = () => {
        const newTodos = [...todos];
        newTodos.forEach(todo =>{
            todo.complete = !checkAll;
        })
        setTodos(newTodos);
        setCheckAll(!checkAll);
    }
    
    const deleteTodos = () => {
        const newTodo = todos.filter(todo =>{
            return todo.complete === false;
        })
        setTodos(newTodo);
        setCheckAll(false);
    }

    return (
        <div className="row">
            <label htmlFor="all">
                <input type="checkbox" id="all" name="all" onClick={handleCheckAll} checked={checkAll}/>
                ALL
            </label>
            <p>You have {todos.length} to do.</p>
            <button id="delete" onClick={deleteTodos}>Delete</button>
        </div>
    )
}