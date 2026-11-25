// React Dom
import { Routes, Route } from "react-router-dom";

// use state
import { useState } from "react";

// import heroImg from "./assets/hero.png";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "./assets/vite.svg";
// import Artwork from "./pages/artwork-pages/Artworks";
// import "./App.css";
// import

//====== Pages
import { useFetchData } from "../useFetchData";
import NavBar from "./NavBar/NavBar";
import SingleArtwork from "./pages/artwork-pages/SingleArtwork";
import Artworks from "./pages/artwork-pages/Artworks";
import SingleArtist from "./pages/artists-pages/SingleArtist";
import Home from "./pages/Home";
import Contact from "./pages/artwork-pages/Contact";
import ArtistsUser from "./pages/artists-pages/ArtistsUser";
import Exhibition from "./pages/Exhibition-pages/Exhibition";
import SingleExhibition from "./pages/Exhibition-pages/SingleExhibition";

const artworkURL = `/api/artist-web/artwork`;

function App() {
  // const { data } = useFetchData(artworkURL);
  const { data, isLoading, fetchError } = useFetchData(artworkURL);

  if (isLoading) return <p>Loading...</p>;
  return (
    <>
      {/* nav outside */}
      <h1>Hello World</h1>
      <NavBar />
      <Routes>
        {/*===== Home =====*/}
        <Route path="/" element={<Home data={data} />} />
        {/* artwork */}
        <Route path="/artworks" element={<Artworks data={data} />} />
        {/* ====== 
         attention artworks plural  
         ======*/}
        <Route path="/artwork/:id" element={<SingleArtwork />} />
        {/*==== Artist  =====*/}
        <Route path="/user" element={<ArtistsUser />} />
        <Route path="/user/:id" element={<SingleArtist />} />

        {/*==== Exhibition  =====*/}
        <Route path="/exhibition" element={<Exhibition />} />
        <Route path="/exhibition/:id" element={<SingleExhibition />} />

        {/*==== contact ====*/}
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </>
  );
}

export default App;
