import React, { useState } from 'react';
import AddTicket from './AddTicket';
import AllList from './AllList';
import Navbar from './Navbar';
import EditTicket from './EditTicket';

const Home = () => {
    const [addTicket, setAddTicket] = useState(false);
    const [editTicket, setEditTicket] = useState(null);

    return (
        <div>
            {
                addTicket && <AddTicket setAddTicket={setAddTicket} />
            }
            {
                editTicket && <EditTicket editTicket={editTicket} setEditTicket={setEditTicket} />
            }
            <Navbar setAddTicket={setAddTicket} />
            <AllList setEditTicket={setEditTicket} />
        </div>
    );
};

export default Home;