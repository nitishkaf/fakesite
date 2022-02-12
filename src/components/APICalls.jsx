import React, { useState, useEffect } from "react";
import axios from "axios";

const API_URL = "https://vimeo.com/api/v2/channel/staffpicks/videos.json";

const APICalls = () => {
  const [videoList, setvideoList] = useState([]);

  useEffect(() => {
    axios
      .get(API_URL)
      .then((res) => {
        console.log(res);
        setvideoList(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {videoList.map((video) => {
          return (
            <div key={video.id}>
              <img
                src={video.thumbnail_large}
                style={{ height: "250px", width: "250px", objectFit: "cover" }}
                alt={video.description}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default APICalls;
