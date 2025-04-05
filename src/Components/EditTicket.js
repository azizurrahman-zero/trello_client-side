import { faXmark } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { motion } from 'framer-motion';
import { useMutation, useQueryClient } from 'react-query';
import { updateTicket } from './services/api';

const EditTicket = ({ editTicket, setEditTicket }) => {
  const { _id, title, description, status, priority = 'low' } = editTicket;
  const queryClient = useQueryClient();

  const [newTitle, setNewTitle] = useState(title);
  const [newDescription, setNewDescription] = useState(description);
  const [newStatus, setNewStatus] = useState(status);
  const [newPriority, setNewPriority] = useState(priority);

  const mutation = useMutation(
    (updatedTicket) => updateTicket(_id, updatedTicket),
    {
      onSuccess: (data) => {
        if (data.modifiedCount === 1) {
          toast.success("Successfully Updated!");
          // Invalidate queries to refresh data
          queryClient.invalidateQueries(status);
          queryClient.invalidateQueries(newStatus);
          setEditTicket(null);
        } else {
          toast.error("Change Information to Update");
        }
      },
      onError: () => {
        toast.error("Failed to update ticket");
      }
    }
  );

  const handleEditTicketButton = e => {
    e.preventDefault();

    const updatedTicket = {
      title: newTitle,
      description: newDescription,
      status: newStatus,
      priority: newPriority,
      updatedAt: new Date().toISOString()
    };

    mutation.mutate(updatedTicket);
  };

  return (
    <div className='fixed inset-0 z-50 bg-black bg-opacity-50 backdrop-blur-sm flex justify-center items-center p-4'>
      <motion.div 
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        className='bg-white dark:bg-gray-800 rounded-lg shadow-xl md:w-2/5 w-full max-w-md'
      >
        <div className="p-6">
          <div className="flex justify-between items-center mb-4">
            <h1 className='text-xl font-bold text-gray-800 dark:text-white'>Edit Ticket</h1>
            <button
              onClick={() => setEditTicket(null)}
              className="text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
              aria-label="Close"
            >
              <FontAwesomeIcon icon={faXmark} size="lg" />
            </button>
          </div>
          
          <form onSubmit={handleEditTicketButton} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="title">
                Title
              </label>
              <input 
                required 
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white" 
                id="title" 
                type="text" 
                value={newTitle}
                onChange={(e) => setNewTitle(e.target.value)}
              />
            </div>
            
            <div>
              <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="description">
                Description
              </label>
              <textarea 
                required 
                className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white" 
                id="description" 
                rows="3"
                value={newDescription}
                onChange={(e) => setNewDescription(e.target.value)}
              />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="status">
                  Status
                </label>
                <select 
                  required 
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white" 
                  id="status"
                  value={newStatus}
                  onChange={(e) => setNewStatus(e.target.value)}
                >
                  <option value="todo">To Do</option>
                  <option value="research">Research</option>
                  <option value="inProgress">In Progress</option>
                  <option value="review">Review</option>
                  <option value="completed">Completed</option>
                </select>
              </div>
              
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1" htmlFor="priority">
                  Priority
                </label>
                <select 
                  required 
                  className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 dark:bg-gray-700 dark:text-white" 
                  id="priority"
                  value={newPriority}
                  onChange={(e) => setNewPriority(e.target.value)}
                >
                  <option value="low">Low</option>
                  <option value="medium">Medium</option>
                  <option value="high">High</option>
                </select>
              </div>
            </div>
            
            <div className="flex justify-end pt-2">
              <button
                type="button"
                onClick={() => setEditTicket(null)}
                className="mr-2 px-4 py-2 text-sm font-medium text-gray-700 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:text-gray-300 dark:hover:bg-gray-600 rounded-md transition-colors duration-200"
              >
                Cancel
              </button>
              <button
                type="submit"
                disabled={mutation.isLoading}
                className="px-4 py-2 text-sm font-medium text-white bg-[#0079BF] hover:bg-[#026AA7] rounded-md transition-colors duration-200 disabled:opacity-70"
              >
                {mutation.isLoading ? 'Updating...' : 'Update Ticket'}
              </button>
            </div>
          </form>
        </div>
      </motion.div>
    </div>
  );
};

export default EditTicket;
