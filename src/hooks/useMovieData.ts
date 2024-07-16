import { useState, useEffect } from 'react';

import axios from '../api/axios';
import { Movie } from '../types/movie.interface';

interface MoviesData {
  isLoading: boolean;
  movies: Movie[];
}

export function useMovieData(endpoint: string): MoviesData {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  
  useEffect(() => {
    axios.get(endpoint).then((result) => {
      setMovies(result?.data?.results);
      setIsLoading(false);
    });
  }, [endpoint]);

  return { isLoading, movies };
}
