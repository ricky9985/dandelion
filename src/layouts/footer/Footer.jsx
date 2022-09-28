import "./Footer.css";

export default function Footer() {
  return (
    <section className="footer">
      <section className="footer-links">
        <div className="footer-links-container">
          <div className="footer-aboutus">
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
            <ul>
              <li>FAQ</li>
              <li>Contact Us</li>
              <li>Careers</li>
            </ul>
          </div>
          <div className="footer-links-2">
            <ul>
              <li>Terms & Consitions</li>
              <li>Directions</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
        </div>
      </section>
    </section>
  );
}
