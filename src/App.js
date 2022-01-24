import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Tutor from "./pages/Tutor";
import CloudinaryTest from "./pages/CloudinaryTest";
import Login from "./pages/Login.page";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/login" element={<Login />} />
        <Route path="tutor" element={<Tutor />} />
        <Route path="cloudinary-test" element={<CloudinaryTest />} />
      </Route>
    </Routes>
  );
}

export default App;
