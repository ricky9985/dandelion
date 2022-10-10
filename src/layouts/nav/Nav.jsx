import { Link } from "react-router-dom";
import "./Nav.css";

const NavList = [
  // { title: "About Us", path: "/about-us" },
  { title: "Accomodation", path: "/accom" },
  { title: "Experience", path: "/exp" },
  // { title: "Spa", path: "" },
  // { title: "360 Tour", path: "" },
  // { title: "News", path: "" },
  { title: "Corporate", path: "/corporate" },
];

export default function NavBar(props) {
  return (
    <nav className="nav-bar" ref={props.refProp}>
      <a href="/" className="nav-logo">
        <img
          id="navLogo"
          src={window.location.origin + "/black_logo.png"}
          alt=""
        ></img>
      </a>
      <ul className="no-bullets nav-list">
        <li key={`nav-bar-${4}`}>
          <div
            onClick={() => {
              window.scrollTo({ top: document.documentElement.scrollHeight });
            }}
          >
            About Us
          </div>
        </li>
        {NavList.map((el, navIn) => {
          return (
            <li key={`nav-bar-${navIn}`}>
              <Link to={el.path}>{el.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
