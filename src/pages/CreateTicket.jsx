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
  OutlinedInput,
  Switch,
  FormGroup,
  FormControlLabel,
} from "@mui/material";
import useStyles from "../styles/pages/new-ticket.styles";
import useAuth from "../contexts/useAuth";
import { createTicket } from "../utils/ticketRequests";

const CreateTicket = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tagsInput, setTagsInput] = useState("");
  const [images, setImages] = useState([]);
  const [isPrivate, setIsPrivate] = useState(false);

  const [errorInput, setErrorInput] = useState(false);
  const { user } = useAuth();

  const classes = useStyles();
  const navigate = useNavigate();

  const previewFile = (file) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onloadend = () => {
      setImages((prevState) => [...prevState, reader.result]);
    };
  };

  const handleFileInputChange = (e) => {
    const file = e.target.files[0];
    previewFile(file);
  };

  const submitTicket = () => {
    const tagsArray = tagsInput.split(" ");
    console.log(tagsArray);
    const ticket = {
      title,
      body,
      tags: tagsArray[0].length > 0 ? tagsArray : [],
      images,
      isPrivate,
    };

    if (ticket.title.length > 0 && ticket.body.length > 0) {
      createTicket(ticket);
      setErrorInput(false);
    } else {
      setErrorInput(true);
    }
  };

  return (
    <Container maxWidth="md">
      <Grid container>
        <Grid item>
          <OutlinedInput
            placeholder="Add title"
            fullWidth
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            sx={(theme) => ({
              color:
                errorInput && body.length < 1
                  ? "red"
                  : theme.palette.primary.main,
            })}
          />
          <OutlinedInput
            placeholder="Add ticket body"
            fullWidth
            onChange={(e) => setBody(e.target.value)}
            value={body}
            multiline
            sx={(theme) => ({
              color:
                errorInput && body.length < 1
                  ? "red"
                  : theme.palette.primary.main,
            })}
          />
          <OutlinedInput
            placeholder="Add tags separated by space"
            fullWidth
            onChange={(e) => setTagsInput(e.target.value)}
            value={tagsInput}
            sx={(theme) => ({
              color:
                errorInput && body.length < 1
                  ? "red"
                  : theme.palette.primary.main,
            })}
          />
          <FormGroup>
            <FormControlLabel
              control={
                <Switch
                  value={isPrivate}
                  onChange={() => setIsPrivate(!isPrivate)}
                  label="private"
                />
              }
              label="Set as private"
            />
          </FormGroup>
        </Grid>
        <Grid item>
          {images.map((image, i) => (
            <img key={i} width="100px" height="auto" src={image} />
          ))}
          {/* <img width="100" height="100" src={} /> */}
          <input
            accept=".png, .jpg, .jpeg"
            type="file"
            name="avatar"
            onChange={handleFileInputChange}
          />
        </Grid>
        {errorInput && (
          <Typography variant="body2" sx={{ color: "red" }}>
            Missing fields
          </Typography>
        )}
        <Button onClick={submitTicket}>Create ticket</Button>
      </Grid>
    </Container>
  );
};

export default CreateTicket;
