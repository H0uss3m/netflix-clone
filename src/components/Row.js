import React, { useState, useEffect } from "react";
import axios from "../axios";
import "./Row.css";
import truncate from "../services";
import { useDispatch, useSelector } from "react-redux";
import { selectFavorite, addFavorite, removeFavorite } from "../features/favoriteSlice";
var _ = require("lodash");

function Row({ title, fetchUrl, isLargeRow = false }) {
  const [movies, setMovies] = useState([]);
  const favorite = useSelector(selectFavorite);
  const dispatch = useDispatch();

  console.log("favorite", _.uniq(favorite));
  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    const fetchData = async () => {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    };
    fetchData();
  }, [fetchUrl]);

  const addToList = (movie) => {
    dispatch(addFavorite(movie));
  };
  const removeFromList = (movie) => {
      dispatch(removeFavorite(movie))
  }

  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="row_posters">
        {movies.map(
          (movie, index) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <div key={index} className="poster">
                <img
                  onClick={() => addToList(movie)}
                  className={`row_poster ${isLargeRow && "row_posterLarge"}`}
                  key={movie.id}
                  src={`${base_url}${
                    isLargeRow ? movie.poster_path : movie.backdrop_path
                  }`}
                  alt={movie.name}
                />
                <button onClick={() => removeFromList(movie)}>test</button>
                <h3>{truncate(movie.name || movie.title, 20)}</h3>
              </div>
            )
        )}
      </div>
    </div>
  );
}

export default Row;
