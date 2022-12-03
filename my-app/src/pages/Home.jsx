import { useContext, React } from "react";

import Header from '../Components/Header';
import Releases from "../Components/Releases";
import AnimeContext from "../context/context";
import Loading from "../Components/Loading";

function Home() {
  const { isLoading }  = useContext(AnimeContext);
  return (
    <>
    <Header />
    {isLoading ? <Loading /> : (<Releases />)}
     
     
       </>
  );
}

export default Home;