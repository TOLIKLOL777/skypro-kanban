import { Routes, Route } from "react-router-dom";
import { useEffect, useState } from "react";
import MainPage from "./pages/Main";
import PopBrowsePage from "./pages/PopBrowse";
import PopExitPage from "./pages/PopExit";
import PopNewCardPage from "./popups/PopNewCard";
import NotFoundPage from "../components/pages/NotFound";
import PrivateRoute from "./PrivateRoute";
import LoginPage from "./pages/Login";
import RegisterPage from "./pages/Register";

function AppRoutes() {
  const [isAuth, setIsAuth] = useState(false);

  return (
    <Routes>
      {/* <Route element={<PrivateRoute isAuth={isAuth} />}> */}
        <Route
          path="/"
          element={<MainPage setIsAuth={setIsAuth} />}
        >
          <Route path="/card/:id" element={<PopBrowsePage />} />
          <Route path="/exit" element={<PopExitPage />} />
          <Route path="/create" element={<PopNewCardPage />} />
        </Route>
      {/* </Route> */}
      <Route path="/login" element={<LoginPage setIsAuth={setIsAuth} />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
