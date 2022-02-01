import React from "react";
import TicketCard from "./TicketCard";

const TicketsList = ({ tickets }) => {
  return (
    <div>
      {tickets.map((ticket) => (
        <TicketCard key={ticket._id} ticket={ticket} />
      ))}
    </div>
  );
};

export default TicketsList;
