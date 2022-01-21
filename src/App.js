import React from "react";
import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Tutor from "./pages/Tutor";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="tutor" element={<Tutor />} />
      </Route>
    </Routes>
  );
}

export default App;
