import React, { useState, useEffect } from "react";
import axios from "axios";

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
    <div>
      <div>
        <div>
          <h2>{videoList.title}</h2>
          <div
            dangerouslySetInnerHTML={{ __html: `${videoList.description}` }}
          />
          <br />
        </div>
        <a href={videoList.url} target="_blank">
          <img src={videoList.thumbnail_large} />
        </a>
      </div>
      );
    </div>
  );
};

export default Home;
