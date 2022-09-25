import React, { useEffect, useState } from 'react';
import List from './List';

const InProgress = ({ setEditTicket }) => {
    const [inProgress, setInProgress] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/inProgress")
            .then((res) => res.json())
            .then((data) => setInProgress(data));
    }, [inProgress]);

    return (
        <div className='bg-[#9A9A9A] p-4'>
            <h1 className='font-bold font-roboto text-xl pb-2'>In Progress</h1>
            {inProgress.map((inProgress) => (
                <List key={inProgress._id} ticket={inProgress} setEditTicket={setEditTicket}></List>
            ))}
        </div>
    );
};

export default InProgress;