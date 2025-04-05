const API_BASE_URL = 'http://localhost:5000';

export const fetchTickets = async (status) => {
  const response = await fetch(`${API_BASE_URL}/${status}`);
  if (!response.ok) {
    throw new Error('Network response was not ok');
  }
  return response.json();
};

export const addTicket = async (newTicket) => {
  const response = await fetch(`${API_BASE_URL}/add`, {
    method: 'POST',
    headers: {
      'content-type': 'application/json'
    },
    body: JSON.stringify(newTicket)
  });
  return response.json();
};

export const updateTicketStatus = async (ticketId, status) => {
  const response = await fetch(`${API_BASE_URL}/updateStatus/${ticketId}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({ status }),
  });
  return response.json();
};

export const updateTicket = async (ticketId, updatedTicket) => {
  const response = await fetch(`${API_BASE_URL}/edit/${ticketId}`, {
    method: 'PUT',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify(updatedTicket),
  });
  return response.json();
};

export const deleteTicket = async (ticketId) => {
  const response = await fetch(`${API_BASE_URL}/delete/${ticketId}`, {
    method: 'DELETE',
  });
  return response.json();
};
