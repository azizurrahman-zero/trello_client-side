import React from 'react';
import logo from "../Resource/logo.png"

const Navbar = ({ setAddTicket }) => {
    return (
        <>
            <div className='bg-[#f4f4f4] py-5 md:px-20 px-5 flex justify-between items-center'>
                <div className="logo">
                    <img className='w-24' src={logo} alt="logo" />
                </div>
                <div>
                    <button
                        onClick={() => setAddTicket(true)}
                        className="bg-[#007CC3] font-roboto text-white px-6 py-2 rounded font-bold"
                    >
                        Add Ticket
                    </button>
                </div>
            </div>
        </>
    );
};

export default Navbar;