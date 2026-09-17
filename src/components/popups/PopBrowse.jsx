import { useEffect, useState } from "react";
import { Link, useNavigate, useOutletContext, useParams } from "react-router-dom";
import Calendar from "../Calendar/Calendar";
import { deleteWord, editWord, getWord } from "../../services/api";
import {
  BrowseActions,
  BrowseArea,
  BrowseButton,
  BrowseCategory,
  BrowseEditActions,
  BrowseEditButton,
  BrowseEditButtonGroup,
  BrowseEditOutlineButton,
  BrowseForm,
  BrowsePrimaryButton,
  BrowseTopCategory,
  ButtonGroup,
  CategoryTheme,
  NewCardInput,
  PopBrowse as PopBrowseBlock,
  PopBrowseBlock as PopBrowsePanel,
  PopBrowseContainer,
  PopBrowseContent,
  PopBrowseTitle,
  PopBrowseTop,
  PopBrowseWrap,
  Status,
  StatusLabel,
  StatusTheme,
  StatusThemes,
} from "./Popups.styled";

const topics = ["Web Design", "Research", "Copywriting"];
const statuses = ["Без статуса", "Нужно сделать", "В работе", "Тестирование", "Готово"];
const topicColor = (topic) => (topic === "Research" ? "green" : topic === "Copywriting" ? "purple" : "orange");

const PopBrowse = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { refreshCards } = useOutletContext();
  const [card, setCard] = useState(null);
  const [editing, setEditing] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("userInfo") || "null");
    getWord({ token: user?.token, id })
      .then((data) => setCard(data.task))
      .catch((requestError) => setError(requestError.message));
  }, [id]);

  const updateCard = (field, value) => setCard((current) => ({ ...current, [field]: value }));

  const saveCard = async () => {
    const user = JSON.parse(localStorage.getItem("userInfo") || "null");
    try {
      await editWord({ token: user.token, id, word: card });
      await refreshCards();
      navigate("/");
    } catch (requestError) {
      setError(requestError.message);
    }
  };

  const removeCard = async () => {
    const user = JSON.parse(localStorage.getItem("userInfo") || "null");
    try {
      await deleteWord({ token: user.token, id });
      await refreshCards();
      navigate("/");
    } catch (requestError) {
      setError(requestError.message);
    }
  };

  if (!card) {
    return <PopBrowseBlock><PopBrowseContainer><PopBrowsePanel><PopBrowseContent>{error || "Загрузка..."}</PopBrowseContent></PopBrowsePanel></PopBrowseContainer></PopBrowseBlock>;
  }

  return (
    <PopBrowseBlock id="popBrowse">
      <PopBrowseContainer>
        <PopBrowsePanel>
          <PopBrowseContent>
            <PopBrowseTop>
              {editing ? <NewCardInput value={card.title} onChange={(event) => updateCard("title", event.target.value)} /> : <PopBrowseTitle>{card.title}</PopBrowseTitle>}
              <BrowseTopCategory $color={topicColor(card.topic)} $active><p>{card.topic}</p></BrowseTopCategory>
            </PopBrowseTop>
            <Status>
              <StatusLabel>Статус</StatusLabel>
              <StatusThemes>
                {statuses.map((status) => <StatusTheme key={status} $color={card.status === status ? "gray" : undefined} onClick={() => editing && updateCard("status", status)}><p>{status}</p></StatusTheme>)}
              </StatusThemes>
            </Status>
            <PopBrowseWrap>
              <BrowseForm id="formBrowseCard">
                <div>
                  <StatusLabel>Описание задачи</StatusLabel>
                  <BrowseArea readOnly={!editing} value={card.description || ""} onChange={(event) => updateCard("description", event.target.value)} placeholder="Введите описание задачи..." />
                </div>
              </BrowseForm>
              <Calendar />
            </PopBrowseWrap>
            <BrowseCategory>
              <StatusLabel>Категория</StatusLabel>
              {topics.map((topic) => <CategoryTheme key={topic} $color={topicColor(topic)} $active={card.topic === topic} onClick={() => editing && updateCard("topic", topic)}><p>{topic}</p></CategoryTheme>)}
            </BrowseCategory>
            {error && <p>{error}</p>}
            <BrowseActions $editing={editing}>
              <ButtonGroup>
                <BrowseButton type="button" onClick={() => setEditing(true)}>Редактировать задачу</BrowseButton>
                <BrowseButton type="button"><Link to="/">Закрыть</Link></BrowseButton>
              </ButtonGroup>
              <BrowsePrimaryButton type="button"><Link to="/">Закрыть</Link></BrowsePrimaryButton>
            </BrowseActions>
            <BrowseEditActions $editing={editing}>
              <BrowseEditButtonGroup>
                <BrowseEditButton type="button" onClick={saveCard}>Сохранить</BrowseEditButton>
                <BrowseEditOutlineButton type="button" onClick={() => setEditing(false)}>Отменить</BrowseEditOutlineButton>
                <BrowseEditOutlineButton type="button" onClick={removeCard}>Удалить задачу</BrowseEditOutlineButton>
              </BrowseEditButtonGroup>
              <BrowseEditButton type="button"><Link to="/">Закрыть</Link></BrowseEditButton>
            </BrowseEditActions>
          </PopBrowseContent>
        </PopBrowsePanel>
      </PopBrowseContainer>
    </PopBrowseBlock>
  );
};

export default PopBrowse;
