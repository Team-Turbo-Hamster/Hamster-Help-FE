import { Routes, Route } from "react-router-dom";

import Layout from "./components/Layout";
import Tutor from "./pages/Tutor";
import CloudinaryTest from "./pages/CloudinaryTest";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="tutor" element={<Tutor />} />
        <Route path="cloudinary-test" element={<CloudinaryTest />} />
      </Route>
    </Routes>
  );
}

export default App;
