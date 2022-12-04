import { React, useContext  } from "react";
import { Link } from "react-router-dom";
import AnimeContext from "../context/context";






function Header (){
  const { search, setSearch }  = useContext (AnimeContext);

  const seaching = (thevalue) => {
   setSearch(thevalue);
  }

  const reset = () => {
    setSearch('');

  }

  return(
    <div className="headerContainer">
    <h2 className="headerTitle">
      ANIMEFLIX
    </h2>
    <nav className="nav1">
      <Link to="/" className="nav2" onClick={ reset } >Home</Link>
      <Link to="/popular" className="nav2" >Popular animes</Link>
      <Link to="/movies" className="nav2" >Movies</Link>
      
    </nav>
    <div className="searchBarContent">
      <label htmlFor="srch" > Search:
      <input type="text" className="searchBar" id="srch" placeholder="Search anime" value={ search } onChange={({target})=> seaching(target.value) } />

      </label>
    </div>
 
    
    </div>

  )
}

export default Header;