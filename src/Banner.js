import axios from "./axios";
import React, { useEffect, useState } from "react";
import requests from "./requests";
import "./Banner.css";

function Banner() {
  const [movie, setMovie] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchNetflixOriginals);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, []);

  console.log(movie);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        {/*tittle*/}
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        {/*buttons*/}
        <div className="banner__buttons">
          <form action="https://www.netflix.com/es/">
            <button className="banner__button">Play</button>
            <button className="banner__button" type="submit">
              My List
            </button>
          </form>
        </div>
        {/*description*/}
        <div>
          <h1 className="banner__description">
            {truncate(movie?.overview, 150)}
          </h1>
        </div>

        {/*backgroundImage*/}
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
}

export default Banner;
