import NavBar from "../../layouts/nav/Nav";
import Footer from "../../layouts/footer/Footer";
import "./Pages.css";

export default function ContactPage() {
  return (
    <div className="contact mb-50">
      <NavBar></NavBar>
      <section className="mb-50">
        <div className="exp-info-title">
          <span>CONTACT INFORMATION</span>
          <hr></hr>
        </div>
        <div className="content para-container">
          <p>
            For assistance or enquiry please feel free to reach out to us
            between the following hours 10:00 am to 7:00 pm IST, Monday -
            Sunday.
          </p>
          <p>
            <span style={{ color: "#694a35" }}>Email:</span>
            <a
              href="mailto:reservations@thedandelion.in"
              style={{ textDecoration: "none", color: "inherit" }}
            >
              reservations@thedandelion.in
            </a>
          </p>{" "}
          <p>
            <span style={{ color: "#694a35" }}>Phone:</span> 7764006404
          </p>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}
