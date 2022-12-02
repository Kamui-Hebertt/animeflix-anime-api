import React from "react";
import { Link } from "react-router-dom";



function Header (){
  return(
    <div className="headerContainer">
    <h2 className="headerTitle">
      ANIMEFLIX
    </h2>
    <nav className="nav1">
      <Link to="/" className="nav2" >Home</Link>
      <Link to="/popular" className="nav2" >Popular animes</Link>
      <Link to="/movies" className="nav2" >Movies</Link>
      
    </nav>
    
    </div>

  )
}

export default Header;