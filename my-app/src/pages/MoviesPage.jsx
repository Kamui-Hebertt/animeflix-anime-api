import { useContext, React } from "react";
import Header from '../Components/Header';
import AnimeContext from "../context/context";
import Loading from "../Components/Loading";
import Movies from "../Components/Movies";



function MoviesPage() {
  const { isLoading  }  = useContext(AnimeContext);
  return (
    <>
    <Header />
    {isLoading ? <Loading /> : (<Movies/>)}
    
     
     
       </>
  );
}

export default MoviesPage;