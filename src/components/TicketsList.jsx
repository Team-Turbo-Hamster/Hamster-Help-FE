import React from "react";
import TicketCard from "./TicketCard";

const TicketsList = ({ tickets = [] }) => {
  console.log(tickets);
  return (
    <div>
      {tickets.map((ticket, i) => (
        <TicketCard key={`${ticket._id}${i}`} ticket={ticket} />
      ))}
    </div>
  );
};

export default TicketsList;
