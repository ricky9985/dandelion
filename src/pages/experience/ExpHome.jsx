import SData from "../../data.json";
// import VerticalCarousol from "../../components/vertical-carousol/Vertical-Carousol";
// import NavBar from "../../layouts/nav/Nav";
// import Footer from "../../layouts/footer/Footer";
import "./Experience.css";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
import { useNavigate, useLocation } from "react-router-dom";

export default function ExpHome() {
  const { ExperienceFeatureData } = SData;
  let navigate = useNavigate();
  const location = useLocation();
  return (
    <section className="exp-info">
      <div className="exp-info-title">
        <span>The Machan Experience</span>
        <hr></hr>
      </div>
      <div className="exp-info-imgs">
        {ExperienceFeatureData.map((d, index) => {
          return (
            <div
              className="exp-info-img click-cursor"
              key={`exp-info-img-${index}`}
              // style={{
              //   backgroundImage: `url('${d.img}')`,
              // }}
              onClick={() => navigate(`${location.pathname}${d.link}`)}
            >
              <div className="exp-info-title info-card-title">{d.header}</div>
              <div className="info-card-img">
                <img src={d.img} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
