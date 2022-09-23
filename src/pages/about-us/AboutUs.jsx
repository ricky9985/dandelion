import HorizontalCarousel from "../../components/horizontal-carousel/Horizontal-Carousel";
import NavBar from "../../layouts/nav/Nav";
import SData from "../../data.json";
import InfoTiles from "../../components/Info-Tiles/Info-Tiles";
import "./AboutUs.css";
import Footer from "../../layouts/footer/Footer";

export default function AboutUsPage() {
  const { HomeCarousel, PhilosophyData, NatureFriendlyData } = SData;
  return (
    <div className="about-us">
      <NavBar></NavBar>
      <HorizontalCarousel data={HomeCarousel}></HorizontalCarousel>
      <section className="philosophy">
        <hr></hr>
        <h2 className="heading">Our Philosophy</h2>
        <InfoTiles data={PhilosophyData}></InfoTiles>
        <hr></hr>
      </section>
      <div className="nf">
        {NatureFriendlyData.map((d) => {
          return (
            <div className="nf-elem">
              <img src={window.location.origin + d.img} alt=""></img>
              <p>{d.desc}</p>
            </div>
          );
        })}
      </div>
      <Footer></Footer>
    </div>
  );
}
