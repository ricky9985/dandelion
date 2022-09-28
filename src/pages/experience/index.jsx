import SData from "../../data.json";
import VerticalCarousol from "../../components/vertical-carousol/Vertical-Carousol";
import NavBar from "../../layouts/nav/Nav";
import Footer from "../../layouts/footer/Footer";
import "./Experience.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { Link, Outlet } from "react-router-dom";

export default function ExperiencePage() {
  const { ExperienceCarouselData, ExperienceFeatureData } = SData;
  return (
    <div>
      <div className="top-carousol">
        <VerticalCarousol data={ExperienceCarouselData}></VerticalCarousol>
        <div className="bounceY">
          <FontAwesomeIcon icon={faAngleDown} />
        </div>
      </div>
      <NavBar></NavBar>
      <Outlet />
      <Footer></Footer>
    </div>
  );
}
