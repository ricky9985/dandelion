import NavBar from "../../layouts/nav/Nav";
import SData from "../../data.json";
import "./Accomodations.css";
import Footer from "../../layouts/footer/Footer";
import DataImage from "../../components/image-with-link/Data-Image";

export default function AccomodationPage() {
  const { AccomodationData } = SData;
  return (
    <div className="about-us">
      <NavBar></NavBar>
      {AccomodationData.map((d, dIn) => {
        return (
          <DataImage
            backgroundUrl={d.img}
            title={d.header}
            key={`data-image-${dIn}`}
          ></DataImage>
        );
      })}
      <Footer></Footer>
    </div>
  );
}
