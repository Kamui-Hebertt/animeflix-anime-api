import {React, useContext } from "react";
import AnimeContext from "../context/context";
import Header from "./Header";

function  Movies () {
  const { moviesState }  = useContext(AnimeContext);
 console.log(moviesState)
  return (
    <><Header /><div className="main">

      <h2 className="releasedh2">Popular Animes</h2>
      <div className="released">

        {moviesState.map((element) => (
          <div className="content">
            <p>{element.animeTitle}</p>

            <a target="_blank" rel="" href={element.animeUrl}>
              <img className="only" src={element.animeImg} alt={element.animeTitle} />
            </a>
            <a target="_blank" href={element.animeUrl} className="linkText">
              <p>Release Date: {element.releasedDate}</p></a>
          </div>
        ))}
      </div>
    </div></>

  );
}

export default Movies;