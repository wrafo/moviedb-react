import { useState } from "react";
import './MovieCard.css';

interface MovieCardProps {
  poster: string;
  title: string;
  year: number;
  index: number; 
  selectedFilter: string; 
  isOdd: boolean; 
  isPrime: boolean;
}

export default function MovieCard({
  poster,
  title,
  year,
  selectedFilter,
  isOdd,
  isPrime
}: MovieCardProps) {
  const [imageLoaded, setImageLoaded] = useState<boolean>(false);
  const _baseImgUrl = 'https://media.themoviedb.org/t/p/w220_and_h330_face/yYXHQuW8tDKJmuEDYhJecIMnV1m.jpg'; // base image for the poster

  const handleImageLoad = () => {
    setImageLoaded(true);
  };

  let backgroundColor = '';

  if (selectedFilter === 'odd/even') {
    if (isOdd) {
      backgroundColor = 'blue';
    } else {
      backgroundColor = 'black'; 
    }
  } else if (selectedFilter === 'prime numbers' && isPrime) {
    backgroundColor = 'blue';
  }

  return (
    <div className="movie-card" style={{ backgroundColor }}>
      <img
        src={imageLoaded ? poster : _baseImgUrl}
        alt={title}
        className="movie-card__image"
        onLoad={handleImageLoad}
      />
      <div className="movie-card__info">
        <h3 className="movie-card__title">{title}</h3>
        <p className="movie-card__year">{year}</p>
      </div>
    </div>
  );
}
