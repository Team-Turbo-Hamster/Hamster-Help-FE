import { Routes, Route } from "react-router-dom";
import useAuth from "./contexts/useAuth";
import Layout from "./components/Layout";
import Tutor from "./pages/Tutor";
import CloudinaryTest from "./pages/CloudinaryTest";
import LoginPage from "./pages/Login.page";
import NewUser from "./pages/NewUser.page";

function App() {
  const { user } = useAuth();

  return (
    <div>
      {user ? (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/register" element={<NewUser />} />
            <Route path="/tutor" element={<Tutor />} />
            <Route path="/cloudinary-test" element={<CloudinaryTest />} />
          </Route>
        </Routes>
      ) : (
        <LoginPage />
      )}
    </div>
  );
}

export default App;
