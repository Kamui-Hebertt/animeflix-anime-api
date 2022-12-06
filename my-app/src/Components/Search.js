import { React, useContext } from "react";
import AnimeContext from "../context/context";



function  Search () {
  const { searchComponent }  = useContext(AnimeContext);
  console.log(searchComponent)
  return (
    <>

<><div className="main">

          <h2 className="releasedh2">Movies</h2>
          <div className="released">

            {searchComponent.map((element) => (
              <div className="content">
                <p>{element.animeTitle}</p>

                <a target="_blank" rel="" href={element.animeUrl}>
                  <img className="only" src={element.animeImg} alt={element.animeTitle} />
                </a>
                <a target="_blank" href={element.animeUrl} className="linkText">
                  <p>Release Date: {element.status}</p></a>
              </div>
            ))}
          </div>
        </div></>

    
   
    </>

  );
}

export default Search;