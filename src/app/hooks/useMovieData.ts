import { useState, useEffect } from 'react';
import axios from '../api/axios';

import { Movie } from '../types/movie.interface';

export function useMovieData(endpoint: string) {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(endpoint).then((result) => {
      setMovies(result?.data?.results);
      setIsLoading(false);
    });
  }, [endpoint]);
  console.log(movies);
  return { isLoading, movies };
}
