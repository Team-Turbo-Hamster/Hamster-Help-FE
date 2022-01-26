import { Routes, Route } from "react-router-dom";
//import useAuth from "./contexts/useAuth"
import Layout from "./components/Layout";
import Tutor from "./pages/Tutor";
import CloudinaryTest from "./pages/CloudinaryTest";
import Login from "./pages/Login.page";
import NewUser from "./pages/NewUser.page";

function App() {
  // const {}= useAuth()
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<NewUser />} />
        <Route path="/tutor" element={<Tutor />} />
        <Route path="/cloudinary" element={<CloudinaryTest />} />
      </Route>
    </Routes>
  );
}

export default App;
