import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <header>
        <nav>
          <div className="nav-logo">
            {" "}
            <p>Logo</p>
          </div>

          {/* hamburger  */}

          <div className="hamburger-container">
            <span>0</span>
          </div>

          <div className="">
            <span>X</span>
          </div>

          {/* links */}

          <ul>
            <li>
              <span>o1</span>
              <Link> Artists</Link>
            </li>

            <li>
              <span>o1</span>
              <Link> Exhibition</Link>
            </li>

            <li>
              <span>o1</span>
              <Link> Services</Link>
            </li>

            <li>
              <span>o1</span>
              <Link> Contact</Link>
            </li>

            {/* bottom  */}
            <div className="line"></div>

            <div className="right-container">
              <p>signIn</p>
              <button>INQUIRE</button>
            </div>

            <p> ART. Rep.... </p>
          </ul>
        </nav>
      </header>
    </>
  );
};
export default NavBar;
