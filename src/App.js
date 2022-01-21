import React from "react";
import { Paper } from "@mui/material";
import ButtonComponent from "./components/ButtonComponent";
import CloudinaryTest from "./pages/CloudinaryTest";
function App() {
  return (
    <div className="App">
      <CloudinaryTest />
      <Paper sx={{ width: "400px", height: "400px" }}>
        <ButtonComponent />
      </Paper>
    </div>
  );
}

export default App;
