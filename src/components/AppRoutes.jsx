import { Routes, Route } from "react-router-dom";
import MainPage from "./pages/Main";
import PopBrowsePage from "./pages/PopBrowse";
import PopExitPage from "./pages/PopExit";
import PopNewCardPage from "./popups/PopNewCard";
import NotFoundPage from "../components/pages/NotFound";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import PrivateRoute from "./PrivateRoute";

function AppRoutes() {
  return (
    <Routes>
      <Route element={<PrivateRoute />}>
        <Route path="/" element={<MainPage />}>
          <Route path="/card/:id" element={<PopBrowsePage />} />
          <Route path="/exit" element={<PopExitPage />} />
          <Route path="/create" element={<PopNewCardPage />} />
        </Route>
      </Route>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
