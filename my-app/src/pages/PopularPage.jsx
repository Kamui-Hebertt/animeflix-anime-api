import { useContext, React } from "react";
import Header from '../Components/Header';

import AnimeContext from "../context/context";
import Loading from "../Components/Loading";
import Popular from "../Components/Popular";




function PopularPage() {
  const { isLoading  }  = useContext(AnimeContext);
  return (
    <>
    <Header />
    {isLoading ? <Loading /> : (<Popular />)}
    
     
     
       </>
  );
}

export default PopularPage;