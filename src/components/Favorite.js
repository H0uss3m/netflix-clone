import React from "react";
import ListItem from "./ListItem";
import { useSelector } from "react-redux";
import { selectFavorite } from "../features/favoriteSlice";
import Nav from "./Nav";
import "./Favorite.css";

var _ = require("lodash");

function Favorite() {
    
  const favoriteList = _.uniq(useSelector(selectFavorite));

  return (
    <div className="favoriteScreen">
      <Nav />
      <div className="favoriteScreen_body">
        <h1>Favorite List</h1>
        {favoriteList.map((movie, index) => (
          <ListItem key={index} movie={movie} />
        ))}
      </div>
      <div className="favoriteScreen_gradient"></div>
    </div>
  );
}

export default Favorite;
