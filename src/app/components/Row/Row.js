import React, { useEffect, useState } from "react";
import "./Row.css";
import axios from "../../api/axios";

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies.map(
          ({ id, poster_path, name, backdrop_path }) =>
            ((isLargeRow && poster_path) || (!isLargeRow && backdrop_path)) && (
              <img
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                key={id}
                src={`${base_url}${isLargeRow ? poster_path : backdrop_path}`}
                alt={name}
              />
            )
        )}
      </div>
    </div>
  );
}

export default Row;
