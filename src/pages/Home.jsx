import React, { useState, useEffect } from "react";
import axios from "axios";
import {
  TextSection,
  TextBody,
  PlayBtn,
  GridLayout,
  StyledBody,
} from "../components/styles/Body.styled";
import PlayIcon from "../components/assets/playbtn.png";

const API_URL = "https://vimeo.com/api/v2/channel/staffpicks/videos.json";

const Home = (video) => {
  const [videoList, setvideoList] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        console.log(res.data[0]);
        setvideoList(res.data[0]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <TextBody>
      <StyledBody>
        <GridLayout>
          <div>
            <h1>{videoList.title}</h1>
            <div
              dangerouslySetInnerHTML={{ __html: `${videoList.description}` }}
            />
            <br />
          </div>
          <div style={{ position: "relative", left: "0", top: "0" }}>
            <a href={videoList.url} target="_blank">
              <img
                src={videoList.thumbnail_large}
                style={{
                  position: "relative",
                  top: "0",
                  left: "0",
                }}
              />
              <PlayBtn
                src={PlayIcon}
                style={{
                  position: "absolute",
                  top: "90px",
                  left: "120px",
                  width: "20%",
                }}
              />
            </a>
          </div>
        </GridLayout>
      </StyledBody>
      <TextSection>
        <h2>Ready to have your cake and eat it too?</h2>
        <br />
        <p>
          Start by designing the experience you have in mind. We'll guide you
          through each step. If your experience meets the quality standards,
          you'll hear more what's next.
        </p>
      </TextSection>
    </TextBody>
  );
};

export default Home;
