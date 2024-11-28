import apiService from '../../services/api.service';
import { useEffect, useState } from 'react';
import './MoviesList.css';
import MovieCard from "../MovieCard/MovieCard";

interface Movie {
  id: number;
  poster_path: string;
  title: string;
  popularity: number;
  release_date: string;
}

interface MoviesListProps {
  ruleOption: string; 
  languageOption: string; 
  categoryOption: string; 
}

export default function MoviesList({ ruleOption, languageOption, categoryOption }: MoviesListProps) {
  const [movies, setMovies] = useState<Movie[]>([]);

  useEffect(() => {
    const apiKey = import.meta.env.VITE_API_KEY;

    apiService
      .getMovies({
        language: languageOption,
        apiKey,
        category: categoryOption,
      })
      .then((response) => {
        console.log('Response', response);
        setMovies(response.data.results);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
  }, [languageOption, categoryOption]);

  const isPrime = (num: number) => {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return true;
  };

  return (
    <div className="movies-list">
      {movies.map((movie, index) => {
        const isOdd = index % 2 !== 0;
        const primeCheck = isPrime(index);

        return (
          <div key={movie.id} className="movies-list__card-container">
            <MovieCard
              poster={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
              title={movie.title}
              year={new Date(movie.release_date).getFullYear()}
              selectedFilter={ruleOption}
              index={index}
              isOdd={isOdd}
              isPrime={primeCheck}
            />
          </div>
        );
      })}
    </div>
  );
}
