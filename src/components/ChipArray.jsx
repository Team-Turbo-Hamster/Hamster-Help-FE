import { ClassNames } from "@emotion/react";
import { Paper, Chip, ListItem } from "@mui/material";

const ChipArray = ({ tagsInput, chipData, handleTagClick }) => {
  return (
    <Paper
      sx={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        flexWrap: "wrap",
        listStyle: "none",
        p: 0.5,
        m: 0,
      }}
      component="div"
    >
      {chipData.map((data) => {
        return (
          <Chip
            key={data.key}
            variant={tagsInput?.includes(data.label) ? "filled" : "outlined"}
            label={data.label}
            onClick={() => {
              handleTagClick(data.label);
            }}
          />
        );
      })}
    </Paper>
  );
};

export default ChipArray;
