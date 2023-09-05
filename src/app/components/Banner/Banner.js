import React, { useEffect, useState } from "react";
import "./Banner.css";
import axios from "../../api/axios";
import requests from "../../api/Request";
import { truncate } from "../../utils/truncateDescription";

function Banner() {
  const [movie, setMovie] = useState([]);
  const { title, name, original_name, overview } = movie;

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request?.data?.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }

    fetchData();
  }, []);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">{title || name || original_name}</h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My list</button>
        </div>
        <h1 className="banner_description">{truncate(overview, 150)}</h1>
      </div>
      <div className="banner--fadeButton" />
    </header>
  );
}

export default Banner;
