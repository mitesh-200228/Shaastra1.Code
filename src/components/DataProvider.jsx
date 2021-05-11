import React, { useState,useEffect, createContext } from 'react';

export const DataContext = createContext();

export const DataProvider = (props) => {
    const [todos, setTodos] = useState([
        { name: "cooking", complete: false },
        { name: "playing", complete: true }
    ])

    return (
        <DataContext.Provider value={[todos, setTodos]}>
            {props.childern}
        </DataContext.Provider>
    )
}