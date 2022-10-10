import { Link } from "react-router-dom";
import "./Footer.css";

export default function Footer() {
  return (
    <section className="footer">
      <section className="footer-links">
        <div className="footer-links-container">
          <div className="footer-aboutus" id="aboutUs">
            <h2>About The Machan</h2>
            <p>
              The dandelion is an exclusive eco-resort with its unique
              multi-cultural blend, offering a serene get-away into the forest.
              <br></br>
              The property has been designed to offer its inhabitants
              spectacular view in luxurious comfort.
            </p>
          </div>
          <div className="footer-links-1">
            <ul className="nav-list">
              <li>
                <Link to="/faq">FAQ</Link>
              </li>
              <li><Link to="/contact">Contact Us</Link></li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="footer-links-2">
            <ul className="nav-list">
              <li>
                <Link to="/tnc">Terms & Conditions</Link>
              </li>
              <li><Link to="/directions">Directions</Link></li>
              <li><Link to="/privacy">Privacy Policy</Link></li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
}
