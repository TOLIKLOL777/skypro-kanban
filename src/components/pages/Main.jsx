import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Main from "../Main/Main";
import Header from "../Header/Header";
import { Wrapper } from "../Main/Main.styled";
import { useTasks } from "../../context/ContextProvider";

const MainPage = () => {
  const { tasks, loading, error, loadTasks } = useTasks();
  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("userInfo")) {
      navigate("/login");
      return;
    }
    loadTasks();
  }, [loadTasks, navigate]);

  return (
    <Wrapper>
      <Header />
      <Main error={error} cards={tasks} loading={loading} />
      <Outlet />
    </Wrapper>
  );
};

export default MainPage;