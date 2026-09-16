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
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <Routes>
      <Route element={<PrivateRoute isAuth={isAuth} />}>
        <Route
          path="/"
          element={<MainPage setIsAuth={setIsAuth} loading={loading} />}
        >
          <Route path="/card/:id" element={<PopBrowsePage />} />
          <Route path="/exit" element={<PopExitPage />} />
          <Route path="/create" element={<PopNewCardPage />} />
        </Route>
      </Route>
      <Route path="/login" element={<LoginPage />}></Route>
      <Route path="/login" element={<RegisterPage />}></Route>
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default AppRoutes;
