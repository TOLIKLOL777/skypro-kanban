import { useState, useCallback, useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Main from "../Main/Main";
import Header from "../Header/Header";
import { Wrapper } from "../Main/Main.styled";
import { fetchWords } from "../../services/api";

const MainPage = () => {
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState([]);
  const [error, setError] = useState("");
  const getCards = useCallback(async () => {
    try {
      setLoading(true);
      const data = await fetchWords({
        token: localStorage.getItem('userInfo') ? localStorage.getItem('userInfo').user.token : useNavigate('/register'),
      });
      if (data) setCards(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);
  useEffect(() => {
    getCards();
  }, [getCards]);

  return (
    <Wrapper>
      <Header />
      <Main error={error} cards={cards} loading={loading} />
      <Outlet />
    </Wrapper>
  );
};

export default MainPage;
