import React from "react";
import { Paper } from "@mui/material";
import ButtonComponent from "./components/ButtonComponent";
function App() {
  return (
    <div className="App">
      <Paper sx={{ width: "400px", height: "400px" }}>
        <ButtonComponent />
      </Paper>
    </div>
  );
}

export default App;
