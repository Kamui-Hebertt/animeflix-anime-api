
import { Switch, Route } from "react-router-dom"
import Home from './pages/Home';
import {React, useEffect, useState,} from 'react';
import AnimeContext from '../src/context/context';
import './Main.css';
import MoviesPage from "./pages/MoviesPage";
import PopularPage from "./pages/PopularPage";


function App() {
  const [ releaseState, setReleaseState ] = useState([]);
  const [ popularState, setPopularState ] = useState([]);
  const [ moviesState, setMoviesState ] = useState([]);
  const [searchComponent, setSearchComponent] = useState([]);
  const [ search, setSearch ] = useState('');
  const [ isLoading, setLoading ] = useState(false);
  const [ TheSearch, setTheSearch] = useState(false);

  const requestApi  = async () => {
    const url = 'https://gogoanime.consumet.org/recent-release';
         setLoading(true);
        const request  = await fetch (url);
       const  reJson = await request.json();
    
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


  const requestSearching = async () =>{
  const request = await fetch(`https://gogoanime.consumet.org/search?keyw=${search}`);
  const jsonResponse = await request.json();
  search === '' ? setTheSearch(false) : setTheSearch(true);
  setSearchComponent(jsonResponse);


  }

  

  useEffect(()=>{
    
  requestApi();
  requestApiPopular();
  requestApiMovies();
  requestSearching();
  search === '' ? setTheSearch(false) : setTheSearch(true);
  }, [search, TheSearch] )

  const contextObj = {
    releaseState, setReleaseState,
    popularState, setPopularState,
    moviesState, setMoviesState,
    isLoading, setLoading,
    search, setSearch,
    searchComponent, setSearchComponent,
    TheSearch, setTheSearch,

}
    

  return (

   
 <AnimeContext.Provider value = { contextObj }>

      <Switch>
      <Route exact path="/" component={ Home } />
      <Route exact path="/popular" component={ PopularPage } />
      <Route  exact path="/movies" component={ MoviesPage } />
      
    </Switch>
    
    </AnimeContext.Provider>
  );
}

export default App;
