import SData from "../../data.json";
import VerticalCarousol from "../../components/vertical-carousol/Vertical-Carousol";
import NavBar from "../../layouts/nav/Nav";
import Footer from "../../layouts/footer/Footer";
import "./Experience.css";

export default function ExperiencePage() {
  const { ExperienceCarouselData, ExperienceFeatureData } = SData;
  return (
    <div>
      <VerticalCarousol data={ExperienceCarouselData}></VerticalCarousol>
      <NavBar></NavBar>
      <section className="exp-info">
        <div className="exp-info-title">
          <span>The Machan Experience</span>
          <hr></hr>
        </div>
        <div className="exp-info-imgs">
          {ExperienceFeatureData.map((d, index) => {
            return (
              <div
                className="exp-info-img"
                key={`exp-info-img-${index}`}
                style={{ backgroundImage: `url('${d.img}')` }}
              >
                <div className="exp-info-title">{d.header}</div>
              </div>
            );
          })}
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}
