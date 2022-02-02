import React, { useState, useEffect } from "react";
import { Tab, Box } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import TicketsList from "./TicketsList";

const TicketsTabs = ({ tickets }) => {
  const [resolvedTickets, setResolvedTickets] = useState([]);
  const [unResolvedTickets, setUnResolvedTickets] = useState([]);
  const [tabValue, setTabValue] = useState("1");

  useEffect(() => {
    let resolved = [];
    let unresolved = [];
    if (tickets) {
      tickets.forEach((ticket) => {
        if (ticket.resolved) {
          resolved.push(ticket);
        } else {
          unresolved.push(ticket);
        }
      });
    }
    setResolvedTickets(resolved);
    setUnResolvedTickets(unresolved);
  }, [tickets]);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <TabContext value={tabValue}>
      <Box
        sx={{ width: "100%" }}
        sx={(theme) => ({ marginBottom: theme.spacing(2) })}
      >
        <TabList indicatorColor="primary" onChange={handleTabChange}>
          <Tab value="1" label="Opened" />
          <Tab value="2" label="Closed" />
        </TabList>
      </Box>
      <TabPanel value="1" sx={{ padding: "0" }}>
        <TicketsList tickets={unResolvedTickets} />
      </TabPanel>
      <TabPanel value="2" sx={{ padding: "0" }}>
        <TicketsList tickets={resolvedTickets} />
      </TabPanel>
    </TabContext>
  );
};

export default TicketsTabs;
