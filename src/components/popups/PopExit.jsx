import { useNavigate, Link } from "react-router-dom";
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
import { useAuth } from "../../context/ContextProvider";

const PopExit = () => {
  const { logout } = useAuth();
  const navigate = useNavigate();
  const exit = () => {
    localStorage.removeItem("userInfo");
    logout();
    navigate("/login", { replace: true });
  };
  return (
    <PopExitBlock id="popExit">
      <PopExitContainer>
        <PopExitPanel>
          <PopExitTitle>Выйти из аккаунта?</PopExitTitle>
          <PopExitForm id="formExit" action="#">
            <PopExitFormGroup>
              <PopExitYes id="exitYes" type="button" onClick={exit}>
                Да, выйти
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