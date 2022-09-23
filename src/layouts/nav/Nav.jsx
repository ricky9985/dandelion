import { Link } from "react-router-dom";
import "./Nav.css";

const NavList = [
  { title: "About Us", path: "/about-us" },
  { title: "Machans", path: "/accom" },
  { title: "Experience", path: "/exp" },
  { title: "Spa", path: "" },
  { title: "360 Tour", path: "" },
  { title: "News", path: "" },
  // { title: "Corporate", path: "" },
];

export default function NavBar() {
  return (
    <nav className="nav-bar">
      <a href="" className="nav-logo">
        <img
          id="navLogo"
          src={window.location.origin + "/logo.png"}
          alt=""
        ></img>
      </a>
      <ul className="no-bullets nav-list">
        {NavList.map((el, navIn) => {
          return (
            <li key={`bav-bar-${navIn}`}>
              <Link to={el.path}>{el.title}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
