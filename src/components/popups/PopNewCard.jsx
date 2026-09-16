import Calendar from "../Calendar";
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
} from "../../styled-components/Popups.styled";

const PopNewCard = () => {
    return (
        <PopNewCardBlock id="popNewCard">
        <PopNewCardContainer>
            <PopNewCardPanel>
                <PopNewCardContent>
                    <PopNewCardTitle>Создание задачи</PopNewCardTitle>
                    <PopNewCardClose href="#">&#10006;</PopNewCardClose>
                    <PopNewCardWrap>
                        <NewCardForm id="formNewCard" action="#">
                            <FormBlock>
                                <FormLabel htmlFor="formTitle">Название задачи</FormLabel>
                                <NewCardInput type="text" name="name" id="formTitle" placeholder="Введите название задачи..." autoFocus/>
                            </FormBlock>
                            <FormBlock>
                                <FormLabel htmlFor="textArea">Описание задачи</FormLabel>
                                <NewCardArea name="text" id="textArea" placeholder="Введите описание задачи..."></NewCardArea>
                            </FormBlock>
                        </NewCardForm>
                        <Calendar />
                    </PopNewCardWrap>
                    <Categories>
                        <CategoriesLabel>Категория</CategoriesLabel>
                        <CategoriesThemes>
                            <CategoryTheme $color="orange" $active><p>Web Design</p></CategoryTheme>
                            <CategoryTheme $color="green"><p>Research</p></CategoryTheme>
                            <CategoryTheme $color="purple"><p>Copywriting</p></CategoryTheme>
                        </CategoriesThemes>
                    </Categories>
                    <CreateButton id="btnCreate">Создать задачу</CreateButton>
                </PopNewCardContent>
            </PopNewCardPanel>
        </PopNewCardContainer>
    </PopNewCardBlock>
    )
}

export default PopNewCard;