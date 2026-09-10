import { useEffect, useState } from "react";
import PopUser from "./popups/PopUser";
import { HeaderS, HeaderBlock, HeaderLogo, HeaderLogoDark, HeaderNav, HeaderButton, HeaderUser } from "../styled-components/Header.styled";
import { Container } from "../styled-components/Main.styled";

const Header = () => {
  const [user_open, SetUserOpen] = useState(false)

  useEffect(() => {
    const PopUser = document.getElementById('user-set-target')
    PopUser.style.display = user_open ? 'block' : 'none'
  })

  return (
    <HeaderS>
        <Container>
            <HeaderBlock>
                <HeaderLogo>
                  <a href="" target="_self"><img src="/logo.svg" alt="logo"/></a>
                </HeaderLogo>
                <HeaderLogoDark>
                  <a href="" target="_self"><img src="/logo.svg" alt="logo"/></a>
                </HeaderLogoDark>
                <HeaderNav>
                    <HeaderButton id="btnMainNew"><a href="#popNewCard">Создать новую задачу</a></HeaderButton>
                    <HeaderUser onClick={() => SetUserOpen((v) => !v)} >Ivan Ivanov</HeaderUser>
                    <PopUser user_open={user_open}/>
                </HeaderNav>
            </HeaderBlock>
        </Container>
    </HeaderS>
  ) 
};

export default Header;