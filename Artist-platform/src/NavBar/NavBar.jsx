import { Link } from "react-router-dom";
import "../NavBar/NavBar.css";

const NavBar = () => {
  return (
    <>
      <header>
        <div className="header-container">
          <div className="nav-menu">
            <nav>
              <div className="hamburger-left">
                <div className="nav-logo">
                  <p>Chromatic Studio</p>
                </div>

                {/* hamburger  */}
                <div className="hamburger-container">
                  <span className="hamburger">0</span>
                </div>

                <div className="hamburger-close">
                  <span>X</span>
                </div>
              </div>
              <div className="line"></div>

              {/* links */}

              <ul>
                <p className="text-header">MENU</p>
                <li>
                  <div className="li-container">
                    <span>01</span>
                    <Link to="/user"> Artists</Link>
                  </div>
                </li>

                <li>
                  <div className="li-container">
                    <span>02</span>
                    <Link to="/exhibition"> Exhibitions</Link>
                  </div>
                </li>

                <li>
                  <div className="li-container">
                    <span>03</span>
                    <Link to="/artworks"> Artworks</Link>
                  </div>
                </li>
                <li>
                  <div className="li-container">
                    <span>04</span>
                    <Link to="/contact"> Services</Link>
                  </div>
                </li>

                <li>
                  <div className="li-container">
                    <span>05</span>
                    <Link to="/contact"> Contact</Link>
                  </div>
                </li>

                {/* bottom  */}
              </ul>

              {/* Right  */}
              <div className="line"></div>

              <div className="right-container">
                <button className="inquiry-btn">Inquiry</button>
                <button className="login-btn">Login</button>

                <p> Where Art Meets Identity </p>
              </div>
            </nav>
          </div>
        </div>
      </header>
    </>
  );
};
export default NavBar;
