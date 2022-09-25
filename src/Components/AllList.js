import React from 'react';
import Completed from './Completed';
import InProgress from './InProgress';
import Research from './Research';
import Review from './Review';
import ToDo from './ToDo';

const AllList = ({ setEditTicket }) => {
    return (
        <div className={'bg-[#f4f4f4] px-20 grid grid-cols-5 gap-3'}>
            <ToDo setEditTicket={setEditTicket} />
            <Research setEditTicket={setEditTicket} />
            <InProgress setEditTicket={setEditTicket} />
            <Review setEditTicket={setEditTicket} />
            <Completed setEditTicket={setEditTicket} />
        </div>
    );
};

export default AllList;