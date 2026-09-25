import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import Calendar from "../Calendar/Calendar";
import { useTasks } from "../../context/ContextProvider";
import {
  PopNewCard as PopNewCardBlock,
  PopNewCardContainer,
  PopNewCardBlock as PopNewCardPanel,
  PopNewCardContent,
  PopNewCardTitle,
  PopNewCardClose,
  PopNewCardWrap,
  NewCardForm,
  FormBlock,
  FormLabel,
  NewCardInput,
  NewCardArea,
  Categories,
  CategoriesLabel,
  CategoriesThemes,
  CategoryTheme,
  CreateButton,
} from "./Popups.styled";

const PopNewCard = () => {
  const navigate = useNavigate();
  const { addTask } = useTasks();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [topic, setTopic] = useState("Web Design");
  const [error, setError] = useState("");
  const [errors, setErrors] = useState({
    title: "",
    description: "",
  });

  const validateForm = () => {
    const newErrors = { title: "", description: ""};
    let isValid = true;

    if (!title.trim()) {
      newErrors.title = true;
      setError("Заполните все поля");
      isValid = false;
    }

    if (!description.trim()) {
      newErrors.description = true;
      setError("Заполните все поля");
      isValid = false;
    }

    setErrors(newErrors);
    return isValid;
  };

  const createCard = async (event) => {
    event.preventDefault();
    if (!validateForm()) {
      return;
    }
    try {
      await addTask({
        title,
        topic,
        status: "Без статуса",
        description,
        date: new Date().toISOString(),
      });
      navigate("/");
    } catch (requestError) {
      setError(requestError.message);
    }
  };

  const handlechange = (e) => {
    const { name, value } = e.target;
    if (name == 'title'){
      setTitle(value)
    }
    if (name == 'description'){
      setDescription(value)
    }
    setErrors({ ...errors, [name]: false });
    setError('')
  }

  return (
    <PopNewCardBlock id="popNewCard">
      <PopNewCardContainer>
        <PopNewCardPanel>
          <PopNewCardContent>
            <PopNewCardTitle>Создание задачи</PopNewCardTitle>
            <PopNewCardClose><Link to={`/`}>&#10006;</Link></PopNewCardClose>
            <PopNewCardWrap>
              <NewCardForm id="formNewCard" onSubmit={createCard}>
                <FormBlock>
                  <FormLabel htmlFor="formTitle">Название задачи</FormLabel>
                  <NewCardInput
                    type="text"
                    name="title"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                    value={title}
                    onChange={handlechange}
                    $error = {errors.title}
                  />
                </FormBlock>
                <FormBlock>
                  <FormLabel htmlFor="textArea">Описание задачи</FormLabel>
                  <NewCardArea
                    name="description"
                    id="textArea"
                    placeholder="Введите описание задачи..."
                    value={description}
                    onChange={handlechange}
                    $error = {errors.description}
                  />
                </FormBlock>
              </NewCardForm>
              <Calendar />
            </PopNewCardWrap>
            <Categories>
              <CategoriesLabel>Категория</CategoriesLabel>
              <CategoriesThemes>
                <CategoryTheme $color="orange" $active={topic === "Web Design"} onClick={() => setTopic("Web Design")}>
                  <p>Web Design</p>
                </CategoryTheme>
                <CategoryTheme $color="green" $active={topic === "Research"} onClick={() => setTopic("Research")}>
                  <p>Research</p>
                </CategoryTheme>
                <CategoryTheme $color="purple" $active={topic === "Copywriting"} onClick={() => setTopic("Copywriting")}>
                  <p>Copywriting</p>
                </CategoryTheme>
              </CategoriesThemes>
            </Categories>
            {error && <p>{error}</p>}
            <CreateButton id="btnCreate" type="submit" form="formNewCard">Создать задачу</CreateButton>
          </PopNewCardContent>
        </PopNewCardPanel>
      </PopNewCardContainer>
    </PopNewCardBlock>
  );
};

export default PopNewCard;