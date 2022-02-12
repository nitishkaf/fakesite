import axios from "axios";
import React, { useState, useEffect } from "react";
import { Container } from "../components/styles/Container.styled";

const fetchData = () => {
  return axios
    .get("https://vimeo.com/api/v2/channel/staffpicks/videos.json")
    .then(({ data }) => {
      console.log(data);
      return data;
    })
    .catch((err) => {
      console.log(error);
    });
};

const Home = () => {
  const [randomUserDataJSON, setRandomUserDataJSON] = useState(0);
  useEffect(() => {
    fetchData().then((randomData) => {
      setRandomUserDataJSON(JSON.stringify(randomData, null, 2));
    });
  }, []);
  return (
    <div>
      <pre>{randomUserDataJSON}</pre>
    </div>
  );
};

export default Home;
