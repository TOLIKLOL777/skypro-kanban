import { useState, useEffect, useCallback } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Main from "../Main/Main";
import Header from "../Header/Header";
import { Wrapper } from "../Main/Main.styled";
import { fetchWords } from "../../services/api";

const MainPage = () => {
  const [loading, setLoading] = useState(false);
  const [cards, setCards] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const getCards = useCallback(async () => {
    try {
      setLoading(true);
      const userInfo = JSON.parse(localStorage.getItem("userInfo") || "null");
      if (!userInfo?.token) {
        navigate("/login");
        return;
      }
      const data = await fetchWords({
        token: userInfo.token,
      });
      if (data) setCards(data);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, [navigate]);
  useEffect(() => {
    const timerId = setTimeout(() => getCards(), 0);
    return () => clearTimeout(timerId);
  }, [getCards]);

  return (
    <Wrapper>
      <Header />
      <Main error={error} cards={cards} loading={loading} />
      <Outlet context={{ refreshCards: getCards }} />
    </Wrapper>
  );
};

export default MainPage;
