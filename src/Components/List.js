import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPenToSquare, faTrash } from '@fortawesome/free-solid-svg-icons';
import React from 'react';

const List = ({ ticket, setEditTicket }) => {
    const { title, description } = ticket;

    return (
        <div>
            <div class="bg-white rounded p-2 mb-4">
                <div>
                    <h5 class="text-lg font-medium text-gray-900">{title}</h5>
                    <span class="text-sm text-gray-500">{description}</span>
                    <div class="flex mt-3 gap-1.5">
                        <button onClick={() => setEditTicket(ticket)} class="px-3 py-1 text-white bg-[#007cc3e2] rounded hover:bg-sky-700">
                            <FontAwesomeIcon icon={faPenToSquare} />
                        </button>
                        <button class="px-3 py-1 text-white bg-[#ff1e1eef] rounded hover:bg-red-700">
                            <FontAwesomeIcon icon={faTrash} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default List;