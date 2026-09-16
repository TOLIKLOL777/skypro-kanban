import { Link } from "react-router-dom";
import {
  PopExit as PopExitBlock,
  PopExitContainer,
  PopExitBlock as PopExitPanel,
  PopExitTitle,
  PopExitForm,
  PopExitFormGroup,
  PopExitYes,
  PopExitNo,
} from "./Popups.styled";

const PopExit = () => {
  return (
    <PopExitBlock id="popExit">
      <PopExitContainer>
        <PopExitPanel>
          <PopExitTitle>Выйти из аккаунта?</PopExitTitle>
          <PopExitForm id="formExit" action="#">
            <PopExitFormGroup>
              <PopExitYes id="exitYes">
                <Link to={`/register`}>Да, выйти</Link>
              </PopExitYes>
              <PopExitNo id="exitNo">
                <Link to={`/`}>Нет, остаться</Link>
              </PopExitNo>
            </PopExitFormGroup>
          </PopExitForm>
        </PopExitPanel>
      </PopExitContainer>
    </PopExitBlock>
  );
};

export default PopExit;
