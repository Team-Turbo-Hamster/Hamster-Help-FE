import { Routes, Route } from "react-router-dom";
import useAuth from "./contexts/useAuth";
import Navbar from "./components/Navbar";
import Tutor from "./pages/Tutor";
import CloudinaryTest from "./pages/CloudinaryTest";
import LoginPage from "./pages/Login";
import Register from "./pages/Register";
import HomePage from "./pages/Home";
import CreateTicket from "./pages/CreateTicket";
import Queue from "./pages/Queue";
import Ticket from "./pages/Ticket";
import PrivateRoute from "./components/PrivateRoute";
import UserProfile from "./pages/UserProfile";

import useStyles from "./styles/pages/app.styles";

import TagPage from "./pages/TagPage";


function App() {
  const { user } = useAuth();
  const classes = useStyles();

  return (
    <div className={classes.appContainer}>
      {user && <Navbar />}
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <HomePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/new-ticket"
          element={
            <PrivateRoute>
              <CreateTicket />
            </PrivateRoute>
          }
        />
        <Route
          path="/queue"
          element={
            <PrivateRoute>
              <Queue />
            </PrivateRoute>
          }
        />
        <Route
          path="/tickets/:ticket_id"
          element={
            <PrivateRoute>
              <Ticket />
            </PrivateRoute>
          }
        />
        <Route
          path="/tutor"
          element={
            <PrivateRoute>
              <Tutor />
            </PrivateRoute>
          }
        />

        <Route
          path="/cloudinary-test"
          element={
            <PrivateRoute>
              <CloudinaryTest />
            </PrivateRoute>
          }
        />

        <Route
          path="/users/:user_id"
          element={
            <PrivateRoute>
              <UserProfile />
            </PrivateRoute>
          }
        />

        <Route
          path="/my-profile"
          element={
            <PrivateRoute>
              <UserProfile />
            </PrivateRoute>
          }
        />

        <Route
          path="tickets/tag/:tag_name"
          element={
            <PrivateRoute>
              <TagPage />
            </PrivateRoute>
          }
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
