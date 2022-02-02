import { Grid } from "@mui/material";
import TutorQueue from "../components/TutorQueue";
// import Chatbox from "../components/Chat";

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
        <TutorQueue />
      </Grid>
      <Grid item xl={2} xs={12}>
        {/* <Chatbox /> */}
      </Grid>
    </Grid>
  );
};

export default Tutor;
