import axios from "axios";

export const getTicketById = async (ticket_id) => {
  try {
    const ticket = await axios.get(`/api/tickets/${ticket_id.toString()}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("user-token"),
      },
    });
    return ticket.data.ticket;
  } catch (error) {
    console.log(error);
  }
};

export const createTicket = async (ticketForm) => {
  try {
    const ticket = await axios.post(`/api/tickets`, ticketForm, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("user-token"),
      },
    });

    return ticket.data.ticket;
  } catch (error) {
    console.log(error);
  }
};

export const getAllTickets = async () => {
  try {
    const tickets = await axios.get(`/api/tickets`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("user-token"),
      },
    });
    return tickets.data.tickets;
  } catch (error) {
    console.log(error);
  }
};

export const getUnresolvedTickets = async () => {
  try {
    const tickets = await axios.get(`/api/tickets/?resolved=false`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("user-token"),
      },
    });
    return tickets.data.tickets;
  } catch (error) {
    console.log(error);
  }
};

export const getResolvedTickets = async () => {
  try {
    const tickets = await axios.get(`/api/tickets/?resolved=true`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("user-token"),
      },
    });
    return tickets.data.tickets;
  } catch (error) {
    console.log(error);
  }
};

export const getTicketsByUserId = async (user_id) => {
  try {
    const tickets = await axios.get(`/api/users/${user_id}/tickets`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("user-token"),
      },
    });
    return tickets.data.tickets;
  } catch (error) {
    console.log(error);
  }
};

export const getTicketsByTag = async (tag_name) => {
  try {
    const tickets = await axios.get(`/api/tickets/tag/${tag_name}`, {
      headers: {
        Authorization: "Bearer " + localStorage.getItem("user-token"),
      },
    });
    return tickets.data.tickets;
  } catch (error) {
    console.log(error);
  }
};

export const resolveTicket = async (ticket_id) => {
  try {
    const ticket = await axios.patch(
      `/api/tickets/${ticket_id}/resolve`,
      {},
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("user-token"),
        },
      }
    );

    return ticket.data.ticket;
  } catch (error) {
    console.log(error);
  }
};

export const unResolveTicket = async (ticket_id) => {
  try {
    const ticket = await axios.patch(
      `/api/tickets/${ticket_id}/unresolve`,
      {},
      {
        headers: {
          Authorization: "Bearer " + localStorage.getItem("user-token"),
        },
      }
    );

    return ticket.data.ticket;
  } catch (error) {
    console.log(error);
  }
};
