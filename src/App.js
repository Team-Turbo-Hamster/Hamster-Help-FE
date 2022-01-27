import { Routes, Route } from "react-router-dom";
import useAuth from "./contexts/useAuth";
import Layout from "./components/Layout";
import Tutor from "./pages/Tutor";
import CloudinaryTest from "./pages/CloudinaryTest";
import LoginPage from "./pages/Login";
import NewUser from "./pages/Register";
import HomePage from "./pages/Home";
import CreateTicket from "./pages/CreateTicket";
import Queue from "./pages/Queue";
import Ticket from "./pages/Ticket";

function App() {
  const { user } = useAuth();

  return (
    <div>
      {user ? (
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route path="/" element={<HomePage />} />
            <Route path="/register" element={<NewUser />} />
            <Route path="/new-ticket" element={<CreateTicket />} />
            <Route path="/queue" element={<Queue />} />
            <Route path="/tickets/:ticket_id" element={<Ticket />} />

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
