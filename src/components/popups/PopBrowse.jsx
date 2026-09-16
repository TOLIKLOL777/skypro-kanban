import Calendar from "../Calendar";
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
} from "../../styled-components/Popups.styled";

const PopBrowse = () => {
    return (
        <PopBrowseBlock id="popBrowse">
        <PopBrowseContainer>
            <PopBrowsePanel>
                <PopBrowseContent>
                    <PopBrowseTop>
                        <PopBrowseTitle>Название задачи</PopBrowseTitle>
                        <BrowseTopCategory $color="orange" $active><p>Web Design</p></BrowseTopCategory>
                    </PopBrowseTop>
                    <Status>
                        <StatusLabel>Статус</StatusLabel>
                        <StatusThemes>
                            <StatusTheme><p>Без статуса</p></StatusTheme>
                            <StatusTheme $color="gray"><p>Нужно сделать</p></StatusTheme>
                            <StatusTheme><p>В работе</p></StatusTheme>
                            <StatusTheme><p>Тестирование</p></StatusTheme>
                            <StatusTheme><p>Готово</p></StatusTheme>
                        </StatusThemes>
                    </Status>
                    <PopBrowseWrap>
                        <BrowseForm id="formBrowseCard" action="#">
                            <div>
                                <StatusLabel>Описание задачи</StatusLabel>
                                <BrowseArea name="text" id="textArea01" readOnly placeholder="Введите описание задачи..."></BrowseArea>
                            </div>
                        </BrowseForm>
                        <Calendar />
                    </PopBrowseWrap>
                    <BrowseCategory>
                        <StatusLabel>Категория</StatusLabel>
                        <CategoryTheme $color="orange" $active><p>Web Design</p></CategoryTheme>
                    </BrowseCategory>
                    <BrowseActions>
                        <ButtonGroup>
                            <BrowseButton><a href="#">Редактировать задачу</a></BrowseButton>
                            <BrowseButton><a href="#">Удалить задачу</a></BrowseButton>
                        </ButtonGroup>
                        <BrowsePrimaryButton><a href="#">Закрыть</a></BrowsePrimaryButton>
                    </BrowseActions>
                    <BrowseEditActions>
                        <BrowseEditButtonGroup>
                            <BrowseEditButton><a href="#">Сохранить</a></BrowseEditButton>
                            <BrowseEditOutlineButton><a href="#">Отменить</a></BrowseEditOutlineButton>
                            <BrowseEditOutlineButton id="btnDelete"><a href="#">Удалить задачу</a></BrowseEditOutlineButton>
                        </BrowseEditButtonGroup>
                        <BrowseEditButton><a href="#">Закрыть</a></BrowseEditButton>
                    </BrowseEditActions>
                </PopBrowseContent>
            </PopBrowsePanel>
        </PopBrowseContainer>
    </PopBrowseBlock>
    )
}

export default PopBrowse;