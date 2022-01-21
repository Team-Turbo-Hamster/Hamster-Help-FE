import { Grid } from "@mui/material";

const Tutor = (props) => {
  return (
    <Grid container spacing={2}>
      <Grid item xl={2} xs={12}>
        Controls
      </Grid>
      <Grid item xl={8} xs={12}>
        Current Card
      </Grid>
      <Grid item xl={2} xs={12}>
        Some Cards
      </Grid>
    </Grid>
  );
};

export default Tutor;
