import {
  PopUser as PopUserBlock,
  PopUserName,
  PopUserMail,
  PopUserTheme,
  PopUserButton,
} from "../../styled-components/Popups.styled";

const PopUser = () => {
  return (
    <PopUserBlock id="user-set-target">
        <PopUserName>Ivan Ivanov</PopUserName>
        <PopUserMail>ivan.ivanov@gmail.com</PopUserMail>
        <PopUserTheme>
            <p>Темная тема</p>
            <input type="checkbox" name="checkbox"/>
        </PopUserTheme>
        <PopUserButton type="button"><a href="#popExit">Выйти</a></PopUserButton>
    </PopUserBlock>
  )
}

export default PopUser