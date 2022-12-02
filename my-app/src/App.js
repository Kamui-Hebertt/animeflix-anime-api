
import { Switch, Route } from "react-router-dom"
import Home from './pages/Home';
import Popular from "./Components/Popular";
import Movies from "./Components/Movies";
import {React, useEffect, useState,} from 'react';
import AnimeContext from '../src/context/context';
import './Main.css';


function App() {
  const [ releaseState, setReleaseState ] = useState([]);
  const [ popularState, setPopularState ] = useState([]);
  const [ moviesState, setMoviesState ] = useState([]);

  const requestApi  = async () => {
    const url = 'https://gogoanime.consumet.org/recent-release';
        const request  = await fetch (url);
       const  reJson = await request.json();
      // console.log(reJson)
      setReleaseState(reJson);
  
  
  }

  const requestApiPopular  = async () => {
    const url = 'https://gogoanime.consumet.org/popular';
        const request  = await fetch (url);
       const  reJson = await request.json();
       console.log(reJson)
      setPopularState(reJson);
  
  
  }


  
  const requestApiMovies  = async () => {
    const url = 'https://gogoanime.consumet.org/anime-movies';
        const request  = await fetch (url);
       const  reJson = await request.json();
       console.log(reJson)
      setMoviesState(reJson);
  
  
  }
  

  useEffect(()=>{
  requestApi();
  requestApiPopular();
  requestApiMovies();
  }, [] )

  const contextObj = {
    releaseState, setReleaseState,
    popularState, setPopularState,
    moviesState, setMoviesState,
}
    

  return (

   
 <AnimeContext.Provider value = { contextObj }>

      <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/popular" component={ Popular } />
      <Route  exact path="/movies" component={ Movies } />
      
    </Switch>
    
    </AnimeContext.Provider>
  );
}

export default App;
