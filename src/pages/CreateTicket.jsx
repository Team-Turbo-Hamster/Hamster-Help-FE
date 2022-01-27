import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  Grid,
  Container,
  Box,
  InputBase,
  Button,
  InputLabel,
} from "@mui/material";
import useStyles from "../styles/pages/new-ticket.styles";

const CreateTicket = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tags, setTags] = useState([]);
  const [images, setImages] = useState([]);
  const [isPrivate, setIsPrivate] = useState(false);

  const classes = useStyles();
  const navigate = useNavigate();

  return <div>Create a ticket</div>;
};

export default CreateTicket;
