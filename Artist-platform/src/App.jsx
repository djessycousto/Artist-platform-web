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
import { useFetchData } from "../useFetchData";
import SingleArtwork from "./pages/artwork-pages/SingleArtwork";
import Artworks from "./pages/artwork-pages/Artworks";

const artworkURL = `/api/artist-web/artwork`;

function App() {
  // const { data } = useFetchData(artworkURL);
  const { data, loading } = useFetchData(artworkURL);
  console.log(data);

  if (loading) return <p>Loading...</p>;
  return (
    <>
      {/* nav outside */}
      <h1>Hello World</h1>
      <Routes>
        {/* <Route path="/" element={<Artworks data={data} />}> */} working
        {/* <Route path="/artwork" element={<Artworks data={data} />}> */} //
        not working
        {/* <Route path=":id" element={<SingleArtwork />} /> */}
        {/* </Route> */}
        <Route path="/" element={<Artworks data={data} />} />
        <Route path="/:id" element={<SingleArtwork />} />
      </Routes>
    </>
  );
}

export default App;
