import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import React from 'react';
import { toast } from 'react-toastify';

const List = ({ ticket, setEditTicket }) => {
    const { _id, title, description } = ticket;

    const handleDeleteButton = () => {
        fetch(`https://trello-2v90.onrender.com/delete/${_id}`, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                if (data.deletedCount) {
                    toast.success(`${title} is Deleted!`);
                }
            });
    };

    return (
        <div>
            <div className="bg-white rounded p-2 mb-4">
                <div>
                    <h5 className="text-lg font-medium text-gray-900">{title}</h5>
                    <span className="text-sm text-gray-500">{description}</span>
                    <div className="flex mt-3 gap-1.5">
                        <button onClick={() => setEditTicket(ticket)} className="px-3 py-1 text-white bg-[#007cc3e2] rounded hover:bg-sky-700">
                            <FontAwesomeIcon icon={faPenToSquare} />
                        </button>
                        <button onClick={() => handleDeleteButton()} className="px-3 py-1 text-white bg-[#ff1e1eef] rounded hover:bg-red-700">
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default List;