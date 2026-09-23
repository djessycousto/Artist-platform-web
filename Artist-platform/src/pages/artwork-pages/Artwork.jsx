import { Routes, Route } from "react-router-dom";

const Artwork = ({ artworkList }) => {
  return (
    // top blog same as the rest of the page

    <article>
      {/* here we got 
      
      picture -->   tag ---> view more => contact 
    
      title 
      author
      reference or synopsy 
      
      
      */}

      <div>
        <p>{artworkList.title}</p>
        <p>{artworkList.year}</p>
      </div>
      <p>{artworkList.artist}</p>
      <p>{artworkList.medium}</p>
    </article>
  );
};
export default Artwork;
