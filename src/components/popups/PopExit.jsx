import {
    PopExit as PopExitBlock,
    PopExitContainer,
    PopExitBlock as PopExitPanel,
    PopExitTitle,
    PopExitForm,
    PopExitFormGroup,
    PopExitYes,
    PopExitNo,
} from "../../styled-components/Popups.styled";

const PopExit = () => {
    return (
    <PopExitBlock id="popExit">
        <PopExitContainer>
            <PopExitPanel>
                <PopExitTitle>Выйти из аккаунта?</PopExitTitle>
                <PopExitForm id="formExit" action="#">
                    <PopExitFormGroup>
                        <PopExitYes id="exitYes"><a href="modal/signin.html">Да, выйти</a></PopExitYes>
                        <PopExitNo id="exitNo"><a href="main.html">Нет, остаться</a></PopExitNo>
                    </PopExitFormGroup>
                </PopExitForm>
            </PopExitPanel>
        </PopExitContainer>
    </PopExitBlock>
    )
}

export default PopExit;