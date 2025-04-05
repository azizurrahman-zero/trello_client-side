import React from "react";
import { DragDropContext } from "@hello-pangea/dnd";
import { useQueryClient } from "react-query";
import { updateTicketStatus } from "./services/api";
import TicketList from "./TicketList";

const AllList = ({ setEditTicket }) => {
  const queryClient = useQueryClient();

  const handleDragEnd = async (result) => {
    if (!result.destination) return;
  
    const { source, destination, draggableId } = result;
  
    if (source.droppableId !== destination.droppableId) {
      try {
        await updateTicketStatus(draggableId, destination.droppableId);
        
        // Invalidate both source and destination queries to ensure both lists update
        queryClient.invalidateQueries(source.droppableId);
        queryClient.invalidateQueries(destination.droppableId);
      } catch (error) {
        console.error("Error updating ticket status:", error);
      }
    }
  };
  
  const columns = [
    { id: "todo", name: "To Do", color: "indigo" },
    { id: "research", name: "Research", color: "purple" },
    { id: "inProgress", name: "In Progress", color: "blue" },
    { id: "review", name: "Review", color: "amber" },
    { id: "completed", name: "Completed", color: "green" },
  ];

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
        {columns.map((column) => (
          <TicketList
            key={column.id}
            status={column.id}
            title={column.name}
            color={column.color}
            setEditTicket={setEditTicket}
          />
        ))}
      </div>
    </DragDropContext>
  );
};

export default AllList;
