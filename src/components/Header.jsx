import React from "react";
import {
  HeadingTextContainer,
  StyledHeader,
  TextContainer,
  BannerPicture,
  TextUnderHeading,
  ButtonWrapper,
  MainButton,
} from "./styles/Header.styled";
import Banner from "../components/assets/hero-image.png";
const Header = () => {
  return (
    <StyledHeader>
      <BannerPicture src={Banner} alt="banner" />
      <TextContainer>
        <HeadingTextContainer>
          The world's greatest fake site
        </HeadingTextContainer>
        <TextUnderHeading>
          Create the world's greatest fake site and enjoy the breeze of fresh
          air when you complete it
        </TextUnderHeading>
        <ButtonWrapper>
          <MainButton>Do something awesome</MainButton>
        </ButtonWrapper>
      </TextContainer>
    </StyledHeader>
  );
};

export default Header;
