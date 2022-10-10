import SData from "../../data.json";
import VerticalCarousol from "../../components/vertical-carousol/Vertical-Carousol";
import NavBar from "../../layouts/nav/Nav";
import Footer from "../../layouts/footer/Footer";
import "./Corporate.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import Content from "./Content";

export default function CorporatePage() {
  const { ExperienceCarouselData } = SData;
  return (
    <div className="corporate">
      <div className="top-carousol">
        <VerticalCarousol data={ExperienceCarouselData}></VerticalCarousol>
        <div className="bounceY">
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
      </div>
      <NavBar></NavBar>
      <section className="">
        <div className="exp-info-title">
          <span>CORPORATE & EVENTS</span>
          <hr></hr>
        </div>
        <Content />
      </section>
      <Footer></Footer>
    </div>
  );
}
