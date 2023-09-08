import React, { useMemo } from 'react';
import './Banner.css';
import requests from '../../api/Request';
import { truncate } from '../../utils/truncateDescription';
import { useMovieData } from '../../hooks/useMovieData';

export const Banner = () => {
  const { movies } = useMovieData(requests.fetchNetflixOriginals);

  const movie = useMemo(() => {
    return movies?.length
      ? movies[Math.floor(Math.random() * movies.length - 1)]
      : console.error('NO MOVIES');
  }, [movies]);

  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: 'center center',
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My list</button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>
      <div className="banner--fadeButton" />
    </header>
  );
};

export default Banner;
