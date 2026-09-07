import { useEffect, useState } from "react";
import PopUser from "./popups/PopUser";

const Header = () => {
  const [user_open, SetUserOpen] = useState(false)

  useEffect(() => {
    const PopUser = document.getElementById('user-set-target')
    PopUser.style.display = user_open ? 'block' : 'none'
  })

  return (
    <header className="header">
        <div className="container">
            <div className="header__block">
                <div className="header__logo _show _light">
                    <a href="" target="_self"><img src="../public/logo.svg" alt="logo"/></a>
                </div>
                <div className="header__logo _dark">
                    <a href="" target="_self"><img src="../public/logo.svg" alt="logo"/></a>
                </div>
                <nav className="header__nav">
                    <button className="header__btn-main-new _hover01" id="btnMainNew"><a href="#popNewCard">Создать новую задачу</a></button>
                    <a onClick={() => SetUserOpen((v) => !v)} className="header__user _hover02">Ivan Ivanov</a>
                    <PopUser user_open={user_open}/>
                </nav>
            </div>
        </div>
    </header>
  ) 
};

export default Header;