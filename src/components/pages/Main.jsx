import { Outlet } from "react-router-dom";
import Main from "../Main/Main";
import Header from "../Header/Header";
import { Wrapper } from "../Main/Main.styled";

const MainPage = ({ loading }) => {
  return (
    <Wrapper>
      <Header />
      <Main loading={loading} />
      <Outlet />
    </Wrapper>
  );
};

export default MainPage;
