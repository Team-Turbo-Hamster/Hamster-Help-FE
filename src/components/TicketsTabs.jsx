import React, { useState, useEffect } from "react";
import { Container, Tab, Box } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import TicketsList from "./TicketsList";

const TicketsTabs = ({ tickets }) => {
  const [resolvedTickets, setResolvedTickets] = useState([]);
  const [unResolvedTickets, setUnResolvedTickets] = useState([]);
  const [tabValue, setTabValue] = useState("1");

  useEffect(() => {
    let resolved = [];
    let unresolved = [];
    tickets.forEach((ticket) => {
      if (ticket.resolved) {
        resolved.push(ticket);
      } else {
        unresolved.push(ticket);
      }
    });
    setResolvedTickets(resolved);
    setUnResolvedTickets(unresolved);
  }, [tickets]);

  const handleTabChange = (event, newValue) => {
    setTabValue(newValue);
  };

  return (
    <Container maxWidth="md">
      <TabContext value={tabValue}>
        <Box sx={{ width: "100%" }}>
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
    </Container>
  );
};

export default TicketsTabs;
