
import { Switch, Route } from "react-router-dom"
import Home from './pages/Home';
import {React, useEffect, useState,} from 'react';
import AnimeContext from '../src/context/context';
import './Main.css';


function App() {
  const [ releaseState, setReleaseState ] = useState([])


  const requestApi  = async () => {
    const url = 'https://gogoanime.consumet.org/recent-release';
        const request  = await fetch (url);
       const  reJson = await request.json();
       console.log(reJson)
      setReleaseState(reJson);
  
  
  }
  useEffect(()=>{
  requestApi()
  }, [releaseState] )

  const contextObj = {
    releaseState, setReleaseState
}
    

  return (

   
 <AnimeContext.Provider value = { contextObj }>

      <Switch>
      <Route exact path="/" component={ Home } />
      
    </Switch>
    
    </AnimeContext.Provider>
  );
}

export default App;
