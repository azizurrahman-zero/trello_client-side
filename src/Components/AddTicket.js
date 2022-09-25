import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import { toast } from 'react-toastify';

const AddTicket = ({ setAddTicket }) => {
    const handleAddTicketButton = e => {
        e.preventDefault();

        const newTicket = {
            title: e.target.title.value,
            description: e.target.description.value,
            status: e.target.status.value,
        }

        // send data to server
        fetch('http://localhost:5000/add', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newTicket)
        })
            .then(res => res.json())
            .then((insertedData) => {
                if (insertedData.insertedId) {
                    toast.success(`${e.target.title.value} successfully added.`);
                    e.target.reset();
                    setAddTicket(false);
                }
                else {
                    toast.error("Failed to add Ticket");
                }
            })
    }

    return (
        <div className='fixed w-screen h-screen bg-[#64646433] flex justify-center items-center'>
            <div className='bg-white absolute shadow-md rounded w-2/5 py-4 px-5'>
                <h1 className='font-bold font-roboto text-xl'>Add New</h1>
                <button
                    onClick={() => setAddTicket(false)}
                    className="text-2xl absolute right-4 top-2"
                >
                    <FontAwesomeIcon icon={faXmark} />
                </button>
                <form onSubmit={handleAddTicketButton} class="pt-3">
                    <div class="mb-3">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="title">
                            Title
                        </label>
                        <input required class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="title" type="text" placeholder="Title" />
                    </div>
                    <div class="mb-2">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="description">
                            Description
                        </label>
                        <textarea required class="shadow appearance-none border rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="description" type="text" placeholder="Description" />
                    </div>
                    <div class="w-full">
                        <label class="block text-gray-700 text-sm font-bold mb-2" for="status">
                            Status
                        </label>
                        <div class="relative">
                            <select required class="shadow block appearance-none w-full border text-gray-700  py-3 px-4 pr-8 rounded leading-tight focus:bg-white focus:border-gray-500 focus:outline-none focus:shadow-outline" id="status">
                                <option>To Do</option>
                                <option>Research</option>
                                <option>In Progress</option>
                                <option>Review</option>
                                <option>Completed</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" /></svg>
                            </div>
                        </div>
                    </div>
                    <button
                        className="bg-[#007CC3] font-roboto text-white px-6 py-2 rounded font-bold w-full mt-5"
                    >
                        Add Ticket
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddTicket;