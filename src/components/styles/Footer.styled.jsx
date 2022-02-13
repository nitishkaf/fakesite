import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
  background-color: #fff;
`;

export const FooterWrap = styled.div`
  padding: 48px 24px;
  display: flex;
  flex-direction: column;
  max-width: 1000px;
  margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
  justify-content: center;

  @media screen and (max-width: 800px) {
    padding-top: 32px;
  }
`;

export const FooterLinksWrapper = styled.div`
  display: flex;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const FooterLinkItems = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin: 16px;
  text-aligm: left;
  width: 160px;
  box-sizing: border-box;
  color: #88939e;

  @media screen and (max-width: 420px) {
    margin: 0;
    padding: 10px;
    width: 100%;
  }
`;

export const FooterLinkTitle = styled.h1`
  font-size: 14px;
  margin-bottom: 16px;
  color: #ee2d1c;
`;

export const FooterLink = styled(Link)`
  color: #88939e;
  text-decoration: none;
  margin-bottom: 0.5rem;
  font-size: 22px;
  line-height: 28px;

  &:hover {
    color: #4c4c51;
  }
`;

export const EndOfFooter = styled.section`
  max-width: 1000px;
  width: 100%;
`;

export const EndOfFooterWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1100 px;
  margin: 40px auto 0 auto;

  @media screen and (max-width: 800px) {
    flex-direction: column;
  }
`;

export const SiteMapLink = styled(Link)`
  color: #88939e;
  cursor: pointer;
  text-decoration: none;
  font-size: 22px;

  &:hover {
    color: #4c4c51;
  }
`;
