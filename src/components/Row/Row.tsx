import React from 'react';

import './Row.css';
import { useMovieData } from '../../hooks/useMovieData';

interface RowProps {
  title: string;
  fetchUrl: string;
  isLargeRow: boolean;
}
export const Row = ({ title, fetchUrl, isLargeRow }: RowProps) => {
  const { movies } = useMovieData(fetchUrl);

  const base_url = 'https://image.tmdb.org/t/p/original/';

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row__posters">
        {movies?.map(
          ({ id, poster_path, name, backdrop_path }) =>
            ((isLargeRow && poster_path) || (!isLargeRow && backdrop_path)) && (
              <img
                className={`row__poster ${isLargeRow && 'row__posterLarge'}`}
                key={id}
                src={`${base_url}${isLargeRow ? poster_path : backdrop_path}`}
                alt={name}
              />
            )
        )}
      </div>
    </div>
  );
};

export default Row;
