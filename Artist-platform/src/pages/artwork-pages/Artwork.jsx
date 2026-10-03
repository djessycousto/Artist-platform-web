import { Outlet, Link } from "react-router-dom";

const Artwork = ({ artworkList }) => {
  return (
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
      {/* <Link to={`/artworks/${artworkList.id}`}>click for more </Link> */}
      {/* <Link to={`/artwork/${artworkList.id}`}>
        , This is the link{artworkList.title}
      </Link> */}

      {/* <Link to={`/api/artist-web/artwork/${artworkList.id}`}></Link> */}
      {/* <Link to={`/api/artist-web/artwork/${artworkList.id}`}>Click me</Link> */}
      <Link to={`/${artworkList.id}`}>Click me</Link>
    </article>
  );
};
export default Artwork;

//  <Link to={`/${artworkList.id}`}>Click me</Link> this how my link is suppose to be
