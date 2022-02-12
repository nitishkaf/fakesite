import styled from "styled-components";

export const StyledHeader = styled.section`
  height: auto;
  background-position: center;
  background-size: cover;
  padding-top: clamp(50px, 25vh, 200px);
`;

export const BannerPicture = styled.img`
  object-fit: cover;
  width: 100%;
  height: 55%;
  top: 0;
  position: absolute;
  z-index: -1;
`;

export const TextContainer = styled.div`
  width: 100%;
  max-width: 1300px;
  margin-right: auto;
  margin-left: auto;
  padding: 0 50px;

  @media screen and (max-width: 960px) {
    padding: 0 30px;
  }
`;

export const HeadingTextContainer = styled.h1`
  font-size: 48px;
  line-height: 48px;
  color: #fff;
  text-align: center;
  letter-spacing: 1px;
  margin-bottom: 22px;
`;

export const TextUnderHeading = styled.p`
  text-align: center;
  letter-spacing: 2px;
  color: #fff;
  line-height: 22px;
`;

export const ButtonWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-flow: wrap;
  gap: 0.5rem;
`;

export const MainButton = styled.button`
  background: linear-gradient(to bottom, #ee2d1c 5%, #ee2d1c 100%);
  background-color: #ee2d1c;
  border-radius: 22px;
  border: 1px solid #ee2d1c;
  display: inline-block;
  cursor: pointer;
  color: #fff;
  font-size: 22px;
  padding: 10px 30px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #2f6627;
`;
