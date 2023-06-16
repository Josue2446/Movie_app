import React, { useState, useEffect } from 'react';
import './banner.css';
import axios from '../../api/axios';
import requests from '../../api/request';

const Banner = () => {
  const [movie, setMovie] = useState([]);
  const movieImagePath = 'https://image.tmdb.org/t/p/original';
  const maxLen = 150;

  useEffect(() => {
    try {
      const fetchData = async () => {
        const request = await axios.get(requests.fetchNetflixOriginals);
        setMovie(
          request.data.results[
            Math.floor(Math.random() * request.data.results.length - 1)
          ]
        );
      };
      fetchData();
    } catch (err) {
      console.error(err);
    }
  }, []);

  const lenCheck = (info, len) => {
    return info?.length > len ? info.substr(0, len - 1) + '...' : info;
  };

  return (
    <header
      className="banner"
      style={{
        backgroundSize: 'cover',
        backgroundImage: `url(${movieImagePath}${movie?.backdrop_path})`,
        backgroundPosition: 'center center',
      }}
    >
      <div className="banner-contents">
        <h1 className="banner-title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner-btns">
          <button className="banner-btn">Play</button>
          <button className="banner-btn">My List</button>
        </div>
        <h1 className="banner-description">
          {lenCheck(`${movie?.overview}`, maxLen)}
        </h1>
      </div>

      <div className="banner--fade-bottom" />
    </header>
  );
};

export default Banner;
