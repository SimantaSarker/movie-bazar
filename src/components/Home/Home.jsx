import React, { useEffect, useState } from "react";
import SingleCart from "../SingleCart/SingleCart";

const Home = ({handleWatchTime}) => {
const [movies,setMovies]=useState([]);

  useEffect(()=>{
    fetch('data.json')
    .then(res=>res.json())
    .then(data=>setMovies(data))
  },[])

  return (
    <div>
      <div className="movie-container row">
        {
          movies.map((m)=><SingleCart movie={m} handleWatchTime={handleWatchTime}></SingleCart>)
        }
      </div>
    </div>
  );
};

export { Home };
