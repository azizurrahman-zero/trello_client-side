const backendUrl = process.env.REACT_APP_BACKEND_URL;

export const fetchTickets = async (status) => {
  const response = await fetch(`${backendUrl}/${status}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const addTicket = async (newTicket) => {
  const response = await fetch(`${backendUrl}/add`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(newTicket)
  });
  return response.json();
};

export const updateTicketStatus = async (ticketId, status) => {
  const response = await fetch(`${backendUrl}/updateStatus/${ticketId}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ status }),
  });
  return response.json();
};

export const updateTicket = async (ticketId, updatedTicket) => {
  const response = await fetch(`${backendUrl}/edit/${ticketId}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(updatedTicket),
  });
  return response.json();
};

export const deleteTicket = async (ticketId) => {
  const response = await fetch(`${backendUrl}/delete/${ticketId}`, {
    method: 'DELETE',
  });
  return response.json();
};
