import React, { useEffect, useState } from 'react';
import List from './List';

const Completed = ({ setEditTicket }) => {
    const [completed, setCompleted] = useState([]);
    useEffect(() => {
        fetch("https://sleepy-garden-27756.herokuapp.com/completed")
            .then((res) => res.json())
            .then((data) => setCompleted(data));
    }, [completed]);

    return (
        <div className='bg-[#9A9A9A] p-4'>
            <h1 className='font-bold font-roboto text-xl pb-2'>Completed</h1>
            {completed.map((completed) => (
                <List key={completed._id} ticket={completed} setEditTicket={setEditTicket}></List>
            ))}
        </div>
    );
};

export default Completed;