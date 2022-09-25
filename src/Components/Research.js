import React, { useEffect, useState } from 'react';
import List from './List';

const Research = ({ setEditTicket }) => {
    const [researchs, setResearchs] = useState([]);
    useEffect(() => {
        fetch("http://localhost:5000/researchs")
            .then((res) => res.json())
            .then((data) => setResearchs(data));
    }, [researchs]);

    return (
        <div className='bg-[#9A9A9A] p-4'>
            <h1 className='font-bold font-roboto text-xl pb-2'>Research</h1>
            {researchs.map((research) => (
                <List key={research._id} ticket={research} setEditTicket={setEditTicket}></List>
            ))}
        </div>
    );
};

export default Research;