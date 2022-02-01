import {Paper, Chip, ListItem} from '@mui/material'

const ChipArray = ({tagsInput, chipData, handleTagClick}) =>{
    return(  <Paper
      sx={{
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        listStyle: 'none',
        p: 0.5,
        m: 0,
      }}
      component="ul"
    >
      {chipData.map((data) => {
        
        return (
           <ListItem key={data.key}>
            <Chip variant={tagsInput.includes(data.label) ? "filled" : "outlined"}
              label={data.label}
              onClick={() => {handleTagClick(data.label)}}
            />
           </ListItem>
        );
      })}
    </Paper>)
    }


export default ChipArray