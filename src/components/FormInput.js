import React, {useState,useContext,useRef,useEffect} from 'react';
import {DataContext} from './DataProvider'

export default function FormInput(){
    const [todos, setTodos] = useContext(DataContext);
    const [todoName, setTodoName] = useState('');
    const addTodo = e => {
        e.preventDefault();
        setTodos([...todos,{name: todoName,complete:false}]);
        setTodoName('');
    }
    return (
        <form autoComplete="off" onSubmit={addTodo}>
            <input type="text" name="todos" id="todos" required placeholder="What" value={todoName} onChange={e => setTodoName(e.target.value.toLowerCase())}/>
            <button type="submit">Create</button>
        </form>
    );
}
