import React, { useEffect, useState } from 'react';
import List from './List';

const ToDo = ({ setEditTicket }) => {
    const [todos, setTodos] = useState([]);
    useEffect(() => {
        fetch("https://sleepy-garden-27756.herokuapp.com/todos")
            .then((res) => res.json())
            .then((data) => setTodos(data));
    }, [todos]);

    return (
        <div className='bg-[#9A9A9A] p-4'>
            <h1 className='font-bold font-roboto text-xl pb-2'>To Do</h1>
            {todos.map((todo) => (
                <List key={todo._id} ticket={todo} setEditTicket={setEditTicket}></List>
            ))}
        </div>
    );
};

export default ToDo;