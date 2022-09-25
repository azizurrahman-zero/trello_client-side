import React from 'react';
import Completed from './Completed';
import InProgress from './InProgress';
import Research from './Research';
import Review from './Review';
import ToDo from './ToDo';

const AllList = ({ setEditTicket }) => {
    return (
        <div className={'bg-[#f4f4f4] md:px-20 px-5 grid md:grid-cols-5 grid-cols-1 gap-3'}>
            <ToDo setEditTicket={setEditTicket} />
            <Research setEditTicket={setEditTicket} />
            <InProgress setEditTicket={setEditTicket} />
            <Review setEditTicket={setEditTicket} />
            <Completed setEditTicket={setEditTicket} />
        </div>
    );
};

export default AllList;