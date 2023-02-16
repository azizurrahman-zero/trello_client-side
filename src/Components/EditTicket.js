import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const EditTicket = ({ editTicket, setEditTicket }) => {
    const { _id, title, description, status } = editTicket;

    const [newTitle, setNewTitle] = useState(title);
    const [newDescription, setNewDescription] = useState(description);
    const [newStatus, setNewStatus] = useState(status);

    const handleEditTicketButton = e => {
        e.preventDefault();

        const newTicket = {
            title: newTitle,
            description: newDescription,
            status: newStatus,
        }

        fetch(`https://trello-2v90.onrender.com/edit/${_id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newTicket),
        })
            .then((res) => res.json())
            .then((response) => {
                if (response.modifiedCount === 1) {
                    toast.success("Successfully Updated!");
                    setEditTicket(null);
                } else {
                    toast.error("Change Information to Update");
                }
            });
    }

    return (
        <div className='fixed w-screen h-screen bg-[#64646433] flex justify-center items-center'>
            <div className='bg-white absolute shadow-md rounded md:w-2/5 w-10/12 py-4 px-5'>
                <h1 className='font-bold font-roboto text-xl'>Add New</h1>
                <button
                    onClick={() => setEditTicket(null)}
                    className="text-2xl absolute right-4 top-2"
                >
                    <FontAwesomeIcon icon={faXmark} />
                </button>
                <form onSubmit={handleEditTicketButton} className="pt-3">
                    <div className="mb-3">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="title">
                            Title
                        </label>
                        <input required className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Title" value={newTitle} onChange={(e) =>
                            setNewTitle(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="description">
                            Description
                        </label>
                        <textarea required className="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" type="text" placeholder="Description" value={newDescription} onChange={(e) =>
                            setNewDescription(e.target.value)} />
                    </div>
                    <div className="w-full">
                        <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="status">
                            Status
                        </label>
                        <div className="relative">
                            <select required className="shadow block appearance-none w-full border text-gray-700  py-3 px-4 pr-8 rounded leading-tight focus:bg-white focus:border-gray-500 focus:outline-none focus:shadow-outline" id="status" value={newStatus} onChange={(e) =>
                                setNewStatus(e.target.value)}>
                                <option>To Do</option>
                                <option>Research</option>
                                <option>In Progress</option>
                                <option>Review</option>
                                <option>Completed</option>
                            </select>
                            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                    <button
                        className="bg-[#007CC3] font-roboto text-white px-6 py-2 rounded font-bold w-full mt-5"
                    >
                        Edit Ticket
                    </button>
                </form>
            </div>
        </div>
    );
};

export default EditTicket;