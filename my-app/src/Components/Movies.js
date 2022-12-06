import {React, useContext, use } from "react";
import AnimeContext from "../context/context";
import Search from "./Search";

function  Movies () {
  const { moviesState, TheSearch }  = useContext(AnimeContext);
 console.log(moviesState)
  return (
    <>

    {TheSearch ? <Search /> : (
      <><div className="main">

          <h2 className="releasedh2">Movies</h2>
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
    )}
    </>

  );
}

export default Movies;