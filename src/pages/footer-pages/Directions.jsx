import NavBar from "../../layouts/nav/Nav";
import Footer from "../../layouts/footer/Footer";
import "./Pages.css";

export default function DirectionsPage() {
  return (
    <div className="directions mb-50">
      <NavBar></NavBar>
      <section className="mb-50">
        <div className="exp-info-title">
          <span>DIRECTIONS</span>
          <hr></hr>
        </div>
        <div className="content para-container">
          <iframe
            title="directions"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3436.7504050926336!2d77.96602471425574!3d30.52809610251903!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3908cdc7ba1ab609%3A0x44dd33e4858896!2sDandelion%20by%20the%20Hills!5e0!3m2!1sen!2sin!4v1665427455413!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: "0" }}
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}
