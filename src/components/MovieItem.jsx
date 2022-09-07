// import React from "react";
import React, {useState} from "react";

function MovieItem(props) {
  const { title, released, director, poster } = props;

  // create a "favorite" state, default value : false

  // and add an action when clicking on the favorite button

  return (
    <div class='MovieItem'>
      <h2>{title}</h2>
      <h3>Director: {director}</h3>
      <h5>Released: {released}</h5>
      <button type='button'>Add to favorites</button>
      <div>
        <img src={poster} alt={title} />
      </div>
    </div>
  );
}

export default MovieItem;
