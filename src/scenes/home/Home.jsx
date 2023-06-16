import React from 'react';
import './home.css';
import Nav from '../../components/nav/Nav';
import Banner from '../../components/banner/Banner';
import requests from '../../api/request';
import Row from '../../components/row/Row';

const Home = () => {
  return (
    <div className="home">
      <Nav />
      <Banner />
      <Row
        title="Netflix Originals"
        fetchUrl={requests.fetchNetflixOriginals}
        largeRowCheck
      />
      <Row title="Trending" fetchUrl={requests.fetchTrending} />
      <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
      <Row title="Action Movies" fetchUrl={requests.fetchActionMovies} />
      <Row title="Comedy Movies" fetchUrl={requests.fetchComedyMovies} />
      <Row title="Horror Movies" fetchUrl={requests.fetchHorrorMovies} />
      <Row title="Romance Movie" fetchUrl={requests.fetchRomanceMovies} />
      <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
      {/* rows with movies */}
    </div>
  );
};

export default Home;
