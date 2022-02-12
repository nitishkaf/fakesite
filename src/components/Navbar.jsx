import React, { useState } from "react";

import {
  NavMainContainer,
  Left,
  Right,
  Logo,
  NavbarContainer,
  NavbarLink,
  MenuButton,
  NavbarExtendedContainer,
  NavbarLinkExtended,
  Avatar,
} from "./styles/Navigation.styled";
import mainLogo from "../components/assets/logo.png";
import avatarLogo from "../components/assets/avatar.png";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleClick = () => {
    setMenuOpen((curr) => !curr);
  };

  return (
    <NavMainContainer>
      <Left>
        <Logo src={mainLogo} />
      </Left>
      <Right>
        <NavbarContainer>
          <NavbarLink to="/">Home</NavbarLink>
          <NavbarLink to="/account">Account</NavbarLink>
          <NavbarLink to="/help">Help</NavbarLink>
          <NavbarLink to="/">
            <Avatar src={avatarLogo} />
          </NavbarLink>
          <MenuButton onClick={handleClick}>
            {menuOpen ? <>&#10005;</> : <>&#8801;</>}
          </MenuButton>
        </NavbarContainer>
      </Right>

      {menuOpen && (
        <NavbarExtendedContainer>
          <NavbarLinkExtended to="/" onClick={handleClick}>
            <Avatar src={avatarLogo} />
          </NavbarLinkExtended>
          <NavbarLinkExtended to="/" onClick={handleClick}>
            Home
          </NavbarLinkExtended>
          <NavbarLinkExtended to="/account" onClick={handleClick}>
            Account
          </NavbarLinkExtended>
          <NavbarLinkExtended to="/help" onClick={handleClick}>
            Help
          </NavbarLinkExtended>
        </NavbarExtendedContainer>
      )}
    </NavMainContainer>
  );
};

export default Navbar;
