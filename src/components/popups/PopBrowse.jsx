import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import { useMemo } from "react";
import Calendar from "../Calendar/Calendar";
import {
  PopBrowse as PopBrowseBlock,
  PopBrowseContainer,
  PopBrowseBlock as PopBrowsePanel,
  PopBrowseContent,
  PopBrowseTop,
  PopBrowseTitle,
  CategoryTheme,
  BrowseTopCategory,
  Status,
  StatusLabel,
  StatusThemes,
  StatusTheme,
  BrowseForm,
  BrowseArea,
  PopBrowseWrap,
  BrowseCategory,
  BrowseActions,
  ButtonGroup,
  BrowseButton,
  BrowsePrimaryButton,
  BrowseEditActions,
  BrowseEditButtonGroup,
  BrowseEditButton,
  BrowseEditOutlineButton,
} from "./Popups.styled";
import { cardlist } from "../../data";

const PopBrowse = () => {
  const { id } = useParams();
  const card = useMemo(
    () => cardlist.find((w) => w.id === id) || { name: "", translation: "" },
    [id],
  );
  return (
    <PopBrowseBlock id="popBrowse">
      <PopBrowseContainer card={card}>
        <PopBrowsePanel>
          <PopBrowseContent>
            <PopBrowseTop>
              <PopBrowseTitle>Название задачи</PopBrowseTitle>
              <BrowseTopCategory $color="orange" $active>
                <p>Web Design</p>
              </BrowseTopCategory>
            </PopBrowseTop>
            <Status>
              <StatusLabel>Статус</StatusLabel>
              <StatusThemes>
                <StatusTheme>
                  <p>Без статуса</p>
                </StatusTheme>
                <StatusTheme $color="gray">
                  <p>Нужно сделать</p>
                </StatusTheme>
                <StatusTheme>
                  <p>В работе</p>
                </StatusTheme>
                <StatusTheme>
                  <p>Тестирование</p>
                </StatusTheme>
                <StatusTheme>
                  <p>Готово</p>
                </StatusTheme>
              </StatusThemes>
            </Status>
            <PopBrowseWrap>
              <BrowseForm id="formBrowseCard" action="#">
                <div>
                  <StatusLabel>Описание задачи</StatusLabel>
                  <BrowseArea
                    name="text"
                    id="textArea01"
                    readOnly
                    placeholder="Введите описание задачи..."
                  ></BrowseArea>
                </div>
              </BrowseForm>
              <Calendar />
            </PopBrowseWrap>
            <BrowseCategory>
              <StatusLabel>Категория</StatusLabel>
              <CategoryTheme $color="orange" $active>
                <p>Web Design</p>
              </CategoryTheme>
            </BrowseCategory>
            <BrowseActions>
              <ButtonGroup>
                <BrowseButton>
                  <a href="">Редактировать задачу</a>
                </BrowseButton>
                <BrowseButton>
                  <Link to={`/`}>Закрыть</Link>
                </BrowseButton>
              </ButtonGroup>
              <BrowsePrimaryButton>
                <Link to={`/`}>Закрыть</Link>
              </BrowsePrimaryButton>
            </BrowseActions>
            <BrowseEditActions>
              <BrowseEditButtonGroup>
                <BrowseEditButton>
                  <a href="">Сохранить</a>
                </BrowseEditButton>
                <BrowseEditOutlineButton>
                  <a href="">Отменить</a>
                </BrowseEditOutlineButton>
                <BrowseEditOutlineButton id="btnDelete">
                  <a href="">Удалить задачу</a>
                </BrowseEditOutlineButton>
              </BrowseEditButtonGroup>
              <BrowseEditButton>
                <Link to={`/`}>Закрыть</Link>
              </BrowseEditButton>
            </BrowseEditActions>
          </PopBrowseContent>
        </PopBrowsePanel>
      </PopBrowseContainer>
    </PopBrowseBlock>
  );
};

export default PopBrowse;
