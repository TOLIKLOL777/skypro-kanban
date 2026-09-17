import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import MainPage from "./pages/Main";
import PopBrowsePage from "./pages/PopBrowse";
import PopExitPage from "./pages/PopExit";
import PopNewCardPage from "./popups/PopNewCard";
import NotFoundPage from "../components/pages/NotFound";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";
import PrivateRoute from "./PrivateRoute";

function AppRoutes() {
  const [isAuth, setIsAuth] = useState(() => Boolean(localStorage.getItem("userInfo")));

  return (
    <Routes>
      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route
          path="/"
          element={<MainPage />}
        >
          <Route path="/card/:id" element={<PopBrowsePage />} />
          <Route path="/exit" element={<PopExitPage setIsAuth={setIsAuth} />} />
          <Route path="/create" element={<PopNewCardPage />} />
        </Route>
        </Route>
      <Route path="/login" element={<LoginPage setIsAuth={setIsAuth} />} />
      <Route path="/register" element={<RegisterPage setIsAuth={setIsAuth} />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
