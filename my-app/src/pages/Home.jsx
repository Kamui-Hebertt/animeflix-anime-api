import {React, useContext } from "react";
import AnimeContext from "../context/context";
function Home() {
  const { releaseState }  = useContext(AnimeContext);
  return (
    <div className="main">
    <>home</>
    <h2>Release Animes</h2>
<div className="released">
    
    {releaseState.map((element)=> (
      <div className="content">
      <p>{element.animeTitle}</p>
      
      <a target="_blank" href={element.episodeUrl} ><img src={element.animeImg} alt={element.animeTitle} /></a>
     <a target="_blank" href={element.episodeUrl}> <p>Episode: {element.episodeNum}</p></a>
      </div>
    ))}
    </div>
    </div>
  );
}

export default Home; // animeTitle