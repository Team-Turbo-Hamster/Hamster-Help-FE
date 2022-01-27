import axios from "axios";

export const getTicketById = async (ticket_id) => {
  try {
    const ticket = await axios(`/api/tickets/${ticket_id}`);
    return ticket.data.ticket;
  } catch (error) {
    console.log(error);
  }
};
