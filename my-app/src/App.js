
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
  const [ isLoading, setLoading ] = useState(false);

  const requestApi  = async () => {
    const url = 'https://gogoanime.consumet.org/recent-release';
         setLoading(true);
        const request  = await fetch (url);
       const  reJson = await request.json();
      // console.log(reJson)
      setTimeout(() => {
        setReleaseState(reJson);
        
      }, 3000);
      
      setTimeout(() => {
        
        setLoading(true);
      }, 3000);
  
  
  }

  const requestApiPopular  = async () => {
    const url = 'https://gogoanime.consumet.org/popular';
    setLoading(true)
        const request  = await fetch (url);
       const  reJson = await request.json();
       console.log(reJson)
       setTimeout(() => {
        setPopularState(reJson);
        
      }, 2000);
      
  
      setTimeout(() => {
        
        setLoading(false);
      }, 3000);
  }


  
  const requestApiMovies  = async () => {
    const url = 'https://gogoanime.consumet.org/anime-movies';
        setLoading(true);
        const request  = await fetch (url);
       const  reJson = await request.json();
       setTimeout(() => {
        setMoviesState(reJson);
        
      }, 500);
      setTimeout(() => {
        
        setLoading(false);
      }, 3000);
      
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
    isLoading, setLoading,
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
