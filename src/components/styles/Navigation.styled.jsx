import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const NavMainContainer = styled.div`
  height: 60px;
  background: transparent;
  color: black;
  display: flex;
  align-items: center;
  position: relative;
`;

export const Left = styled.div`
  flex: 7;
  padding-left: 20px;
`;
export const Right = styled.div`
  padding-right: 50px;
`;

export const Logo = styled.img``;

export const NavbarContainer = styled.div``;

export const NavbarLink = styled(NavLink)`
  font-size: large;
  text-decoration: none;
  color: white;
  margin: 10px;
  padding: 0 10px;

  &.active {
    color: #1365a2;
  }

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const MenuButton = styled.button`
  width: 40px;
  height: 40px;
  border: none;
  background-color: transparent;
  font-size: 40px;
  color: black;

  @media screen and (min-width: 700px) {
    display: none;
  }
`;

export const NavbarExtendedContainer = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  height: calc(100vh - 60px);
  width: 100%;
  background-color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const NavbarLinkExtended = styled(NavLink)`
  font-size: large;
  text-decoration: none;
  color: black;
  margin: 10px;
  margin-bottom: 20px;
`;

export const Avatar = styled.img`
  border-radius: 50%;
  width: auto;
  max-height: 40px;
  verticle-alignment: middle;
`;
