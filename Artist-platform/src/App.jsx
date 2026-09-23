// React Dom
import { Routes, Route } from "react-router-dom";

// use state
import { useState } from "react";

// import heroImg from "./assets/hero.png";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
import Artwork from "./pages/artwork-pages/Artworks";
// import "./App.css";
// import

//====== Fetch Hooker
import useFetchData from "../useFetchData";

const artworkURL = `/api/artist-web/artwork`;

function App() {
  // const { data } = useFetchData(artworkURL);
  const { data, loading } = useFetchData(artworkURL);

  if (loading) return <p>Loading...</p>;
  return (
    <>
      {/* {loading && } */}
      <h1>Hello World</h1>
      {/* <Home /> */}
      {/* <Exhibition  /> */}

      <Artwork data={data} />
    </>
  );
}

export default App;
