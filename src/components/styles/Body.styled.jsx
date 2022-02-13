import styled from "styled-components";

export const StyledBody = styled.div`
  display: flex;
  justify-content: center;
  background-color: #fff;
  margin: 10px 30px;
  padding: 60px;

  img {
    width: 80%;
  }
`;

export const GridLayout = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
`;

export const PlayBtn = styled.img``;

export const TextBody = styled.div``;

export const TextSection = styled.div`
  align-items: center;
  background-color: #fff;
  margin: 10px 30px;
  padding: 60px;
  text-align: center;

  h2 {
    font-size: 36px;
    color: #4c4c51;
    line-height: 28px;
  }

  p {
    font-size: 22px;
    line-height: 28px;
    color: #4c4c51;
  }
`;
