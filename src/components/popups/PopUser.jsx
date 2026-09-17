import { Link } from "react-router-dom";
import {
  PopUser as PopUserBlock,
  PopUserName,
  PopUserMail,
  PopUserTheme,
  PopUserButton,
} from "./Popups.styled";

const PopUser = () => {
  return (
    <PopUserBlock id="user-set-target">
      <PopUserName>Ivan Ivanov</PopUserName>
      <PopUserMail>ivan.ivanov@gmail.com</PopUserMail>
      <PopUserTheme>
        <p>Темная тема</p>
        <input type="checkbox" name="checkbox" />
      </PopUserTheme>
      <PopUserButton type="button">
        <Link to={`/exit`}>Выйти</Link>
      </PopUserButton>
    </PopUserBlock>
  );
};

export default PopUser;
