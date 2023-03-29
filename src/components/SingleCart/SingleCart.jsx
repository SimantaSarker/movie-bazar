import React, { useState } from "react";

const SingleCart = ({ movie, handleWatchTime }) => {
  // const [disabled, setDisabled] = useState(false);
  return (
    // <div className="col-md-6">
    <div className="movie-cart card col-md-6">
      <div className="movie-poster w-25 m-auto">
        <img src={movie.poster} className="w-75" alt="" />
      </div>
      <h3>{movie.movieName}</h3>
      <p>{movie.description}</p>
      <div className="timeAndRating d-flex justify-content-around">
        <p>WatchTime: {movie.watchTime}</p>
        <p>Rating:{movie.imdbRating}</p>
      </div>
      <button type="button" onClick={() => handleWatchTime(movie.watchTime)}>
        Book Now
      </button>
      {/*------------ button disabled after one click ------*/}
      {/* <button type="button" disabled={disabled} onClick={()=>setDisabled(true)}>
        Book Now
      </button> */}
    </div>
    // </div>
  );
};

export default SingleCart;
