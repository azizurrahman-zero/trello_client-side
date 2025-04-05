import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPenToSquare,
  faTrash,
  faArrowUp,
  faExclamationTriangle,
} from "@fortawesome/free-solid-svg-icons";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { motion, AnimatePresence } from "framer-motion";
import { Draggable } from "@hello-pangea/dnd";
import { deleteTicket } from "./services/api";

const List = ({ ticket, setEditTicket, index, onTicketDeleted }) => {
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const { _id, title, description, priority, createdAt } = ticket;

  const priorityColors = {
    low: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
    medium:
      "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
    high: "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-300",
  };

  const handleDeleteConfirm = async () => {
    try {
      const data = await deleteTicket(_id);
      if (data.deletedCount) {
        toast.success(`${title} is Deleted!`);
        setShowDeleteModal(false);
        
        // Call the callback function to notify parent component about the deletion
        if (onTicketDeleted) {
          onTicketDeleted(_id);
        }
      }
    } catch (error) {
      toast.error("Failed to delete ticket");
      setShowDeleteModal(false);
    }
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  };

  // Delete confirmation modal
  const DeleteConfirmationModal = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center p-4"
      onClick={() => setShowDeleteModal(false)}
    >
      <motion.div
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        transition={{ type: "spring", damping: 15 }}
        className="bg-white dark:bg-gray-800 rounded-lg max-w-md p-6 shadow-xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-5 flex justify-center items-center gap-4">
          <div className="flex items-center justify-center h-12 w-12 rounded-full bg-red-100 dark:bg-red-900">
            <FontAwesomeIcon
              icon={faExclamationTriangle}
              className="h-6 w-6 text-red-600 dark:text-red-400"
            />
          </div>
          <div>
            <h3 className="text-lg font-medium text-gray-900 dark:text-white mb-1">
              Delete Ticket
            </h3>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Are you sure you want to delete "
              <span className="font-medium">{title}</span>"?
            </p>
          </div>
        </div>

        <div className="flex justify-end space-x-3">
          <button
            onClick={() => setShowDeleteModal(false)}
            className="px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-800 dark:text-gray-200 text-sm font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 dark:focus:ring-gray-600"
          >
            Cancel
          </button>
          <button
            onClick={handleDeleteConfirm}
            className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white text-sm font-medium rounded-md transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
          >
            Delete
          </button>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <>
      <Draggable draggableId={_id} index={index}>
        {(provided) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white dark:bg-gray-800 rounded-lg shadow-sm border border-gray-200 dark:border-gray-700 p-4 mb-3 hover:shadow-md transition-shadow"
            >
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-medium text-gray-900 dark:text-white">
                  {title}
                </h3>
                <div className="flex space-x-2">
                  <button
                    onClick={() => setEditTicket(ticket)}
                    className="text-gray-500 hover:text-indigo-600 dark:text-gray-400 dark:hover:text-indigo-400 transition-colors"
                    aria-label="Edit"
                  >
                    <FontAwesomeIcon icon={faPenToSquare} />
                  </button>
                  <button
                    onClick={() => setShowDeleteModal(true)}
                    className="text-gray-500 hover:text-red-600 dark:text-gray-400 dark:hover:text-red-400 transition-colors"
                    aria-label="Delete"
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </div>
              </div>

              <p className="text-gray-600 dark:text-gray-300 text-sm mb-3">
                {description}
              </p>

              <div className="flex justify-between items-center">
                <span
                  className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                    priorityColors[priority || "low"]
                  }`}
                >
                  {priority === "high" && (
                    <FontAwesomeIcon icon={faArrowUp} className="mr-1" />
                  )}
                  {priority.charAt(0).toUpperCase() + priority.slice(1) || "Low"} Priority
                </span>

                {createdAt && (
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {formatDate(createdAt)}
                  </span>
                )}
              </div>
            </motion.div>
          </div>
        )}
      </Draggable>

      {/* Render delete confirmation modal with AnimatePresence for smooth enter/exit */}
      <AnimatePresence>
        {showDeleteModal && <DeleteConfirmationModal />}
      </AnimatePresence>
    </>
  );
};

export default List;
