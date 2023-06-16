import React, { useState, useEffect } from 'react';
import axios from '../../api/axios';
import './row.css';

const Row = ({ title, fetchUrl, largeRowCheck = false }) => {
  const [movies, setMovies] = useState([]);
  const baseUrl = 'https://image.tmdb.org/t/p/original/';

  useEffect(() => {
    try {
      const getMovies = async () => {
        const request = await axios.get(fetchUrl);
        setMovies(request.data.results);
        return request;
      };
      getMovies();
    } catch (err) {
      console.error(err);
    }
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row-posters-all">
        {movies.map(
          (movie) =>
            ((largeRowCheck && movie.poster_path) ||
              (!largeRowCheck && movie.backdrop_path)) && (
              <img
                className={`row-poster ${largeRowCheck && 'row-poster-large'}`}
                key={movie.id}
                src={`${baseUrl}${
                  largeRowCheck ? movie?.poster_path : movie?.backdrop_path
                }`}
                alt={movie?.title || movie?.name || movie?.original_name}
              />
            )
        )}
      </div>
    </div>
  );
};

export default Row;
