import NavBar from "../../layouts/nav/Nav";
import SData from "../../data.json";
import "./Accomodations.css";
import Footer from "../../layouts/footer/Footer";
import DataImage from "../../components/image-with-link/Data-Image";
import Attributes from "./Attributes";
import "./Accomodations.css";
import { useState } from "react";

export default function AccomodationPage() {
  const { AccomodationData } = SData;
  const [toggle, setToggle] = useState(Array(AccomodationData.length).fill(false));
  return (
    <div className="about-us">
      <NavBar></NavBar>
      {AccomodationData.map((d, dIn) => {
        return (
          <DataImage
            backgroundUrl={d.img}
            title={d.header}
            key={`data-image-${dIn}`}
          >
            <Attributes attributes={d.attributes}></Attributes>
            <div
              className="content-more click-cursor close-content"
              toggle={toggle[dIn].toString()}
              inview="img"
              onClick={() => {
                toggle[dIn] = !toggle[dIn];
                setToggle([...toggle]);
              }}
            >
              Close
            </div>
          </DataImage>
        );
      })}
      <Footer></Footer>
    </div>
  );
}
