import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {
  Typography,
  Grid,
  Container,
  Box,
  InputBase,
  Alert,
  Button,
  InputLabel,
  OutlinedInput,
  Switch,
  FormGroup,
  FormControlLabel,
  Chip,
  Paper,
  ListItem
} from "@mui/material";
import useStyles from "../styles/pages/new-ticket.styles";
import useAuth from "../contexts/useAuth";
import { createTicket } from "../utils/ticketRequests";
import ChipArray from "../components/chipArray";


const CreateTicket = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [tagsInput, setTagsInput] = useState("");
  const [images, setImages] = useState([]);
  const [isPrivate, setIsPrivate] = useState(false);
  const [errorInput, setErrorInput] = useState(false);
  const [buttonDisabled, setButtonDisabled] = useState(true)
  const [chipData, setChipData] = useState([
      { key: 0, label: 'Angular' },
      { key: 1, label: 'jQuery' },
      { key: 2, label: 'Polymer' },
      { key: 3, label: 'React' },
      { key: 4, label: 'Vuejs' },
    ]);

  
  const { user } = useAuth();
  

  const classes = useStyles();
  const navigate = useNavigate();

  
  const handleTagClick = (data) => {

   tagsInput.includes(data) ? <></> : setTagsInput(tagsInput.concat(" ", data))
  }

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

  const tagCount = () => {
    let test = new RegExp(/^(\s*\w+\b){2,6}$/);
   return( test.test(tagsInput) ? <></>: <Alert severity="warning">We recommend between 2-6 tags.</Alert>)
  }

  const submitTicket = () => {
    const tagsArray = tagsInput.split(" ");
    const ticket = {
      title,
      body,
      tags: tagsArray[0].length > 0 ? tagsArray : [],
      images,
      isPrivate,
    };

    if (ticket.title.length > 0 && ticket.body.length > 0) {
      createTicket(ticket).then((data) => {
        navigate(`/tickets/${data.id}`);
      });
      setErrorInput(false);
    } else {
      setErrorInput(true);
    }
  };
  
  return (
    <Container maxWidth="md">
      <Grid container>
        <Grid item><h4>please provide a brief, meaningful title to your ticket:</h4>
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
           
          {title.length > 0 && title.length < 101 ? <></> :<Alert severity="error">The Title  be fewer than 100 characters and cannot be blank</Alert> }

          <h4>Please describe your issue in as much detail as you can: </h4>
          <OutlinedInput 
            placeholder="Add ticket body"
            fullWidth
            onChange={(e) => setBody(e.target.value)}
            value={body}
            multiline
            minRows={4}
            sx={(theme) => ({
              color:
                errorInput && body.length < 1
                  ? "red"
                  : theme.palette.primary.main,
            })}
          />
          {body.length > 0 ? <></> :<Alert severity="error">The ticket text cannot be blank</Alert> }

          <h4>Please add some tags to help categorise your issue (click on items in the cloud or write into the box below):</h4>
          
          <ChipArray tagsInput={tagsInput} chipData={chipData} handleTagClick={handleTagClick} />

           
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
            })}/>
          {tagCount()}
    
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
        <Button onClick={submitTicket} disabled={buttonDisabled}>Create ticket</Button>
      </Grid>
    </Container>
  );
};



 

export default CreateTicket;
