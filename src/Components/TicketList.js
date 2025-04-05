// TicketList.js
import React from "react";
import { useQuery, useQueryClient } from "react-query";
import { Droppable } from "@hello-pangea/dnd";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faListCheck, 
  faSearch, 
  faSpinner, 
  faClipboardCheck, 
  faCheckCircle 
} from '@fortawesome/free-solid-svg-icons';
import List from "./List";
import Loading from "./Loading";
import { fetchTickets } from "./services/api";

const iconMap = {
  todo: faListCheck,
  research: faSearch,
  inProgress: faSpinner,
  review: faClipboardCheck,
  completed: faCheckCircle
};

// Color mapping objects for different elements
const textColorClasses = {
  indigo: "text-indigo-600 dark:text-indigo-400",
  purple: "text-purple-600 dark:text-purple-400",
  blue: "text-blue-600 dark:text-blue-400",
  amber: "text-amber-600 dark:text-amber-400",
  green: "text-green-600 dark:text-green-400",
};

const badgeColorClasses = {
  indigo: "bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300",
  purple: "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
  blue: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  amber: "bg-amber-100 text-amber-800 dark:bg-amber-900 dark:text-amber-300",
  green: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
};

const TicketList = ({ status, title, color, setEditTicket }) => {
  const queryClient = useQueryClient();
  
  const { data: tickets = [], isLoading } = useQuery(
    status, 
    () => fetchTickets(status),
    {
      staleTime: 100,
    }
  );

  const handleTicketDeleted = (deletedId) => {
    queryClient.invalidateQueries(status);
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-800/50 rounded-lg p-4 h-full">
      <div className="flex items-center mb-4 space-x-2">
        <FontAwesomeIcon 
          icon={iconMap[status]} 
          className={`${textColorClasses[color]} ${status === 'inProgress' ? 'animate-spin-slow' : ''}`} 
        />
        <h2 className="text-lg font-semibold text-gray-800 dark:text-white">{title}</h2>
        <span className={`${badgeColorClasses[color]} text-xs font-medium px-2.5 py-0.5 rounded-full`}>
          {tickets?.data?.length}
        </span>
      </div>
      
      {isLoading ? (
        <div className="flex h-full w-full justify-center py-8">
          <Loading size="small" />
        </div>
      ) : (
        <Droppable droppableId={status}>
          {(provided) => (
            <div
              {...provided.droppableProps}
              ref={provided.innerRef}
              className="space-y-3 min-h-[200px]"
            >
              {tickets?.data?.length === 0 ? (
                <div className="bg-white dark:bg-gray-700 rounded-lg border border-dashed border-gray-300 dark:border-gray-600 p-4 text-center">
                  <p className="text-gray-500 dark:text-gray-400 text-sm">No tickets in {title.toLowerCase()}</p>
                </div>
              ) : (
                tickets?.data?.map((ticket, index) => (
                  <List
                    key={ticket._id}
                    ticket={ticket}
                    setEditTicket={setEditTicket}
                    index={index}
                    onTicketDeleted={handleTicketDeleted}
                  />
                ))
              )}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      )}
    </div>
  );
};

export default TicketList;
