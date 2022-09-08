// import React from "react";
import React, {useState} from "react";

function MovieItem(props) {
  const { title, released, director, poster } = props;

  // create a "favorite" state, default value : false
  const [favorite, setfavorite] = useState(false)

  // and add an action when clicking on the favorite button

  function toggleFavorite() {
    // alert("ca marche"); le alert fonctionne
    // console.log(favorite);
    if (favorite === false) {
      setfavorite(true)
      // console.log(favorite);
    }else{
      setfavorite(false)
      // console.log(favorite);
    }
    console.log(favorite);
  }
  
  return (
    <div className='MovieItem'>
      <h2>{title}</h2>
      <h3>Director: {director}</h3>
      <h5>Released: {released}</h5>
      <button onClick={toggleFavorite} type='button'>
        {favorite ? "Enlever des favoris" : "Ajouter aux favoris"}
      </button>
      <div>
        <img src={poster} alt={title} />
      </div>
    </div>
  );
}

export default MovieItem;