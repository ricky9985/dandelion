import DataImage from "../../components/image-with-link/Data-Image";
import InfoTiles from "../../components/Info-Tiles/Info-Tiles";
import VerticalCarousol from "../../components/vertical-carousol/Vertical-Carousol";
import Footer from "../../layouts/footer/Footer";
import NavBar from "../../layouts/nav/Nav";
import "./Home.css";

import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";
import { useState } from "react";
import SData from "../../data.json";

export default function HomePage() {
  const { HomeCarousel, InfoTilesData } = SData;
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  return (
    <div>
      <div className="home-booking-section">
        <div className="home-booking-form">
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
            placeholderText="Check In"
          />

          <DatePicker
            selected={endDate}
            onChange={(date) => setEndDate(date)}
            placeholderText="Check Out"
          />
        </div>
      </div>
      <VerticalCarousol data={HomeCarousel}></VerticalCarousol>
      <NavBar></NavBar>
      <section>
        <h2>THE MACHAN - A TREE HOUSE RESORT IN LONAVALA</h2>
        <img
          className="h10"
          src={window.location.origin + "/assets/images/quote-left-solid.svg"}
          alt=""
        ></img>
        <p>
          AT THE MACHAN WE’RE NOT JUST SELLING YOU A ROOM … WE’RE IN THE
          BUSINESS OF CURATING EXPERIENCES THAT LAST A LIFETIME
        </p>
      </section>
      {HomeCarousel.map((d, dIn) => {
        return (
          <DataImage
            backgroundUrl={d.img}
            title={d.header}
            key={`data-image-${dIn}`}
          ></DataImage>
        );
      })}
      <section className="home-info">
        <InfoTiles data={InfoTilesData}></InfoTiles>
        <div className="uniqeness">
          <div className="uniqeness-img">
            <img
              src={window.location.origin + "/assets/images/stargazzing.jpg"}
              alt=""
            ></img>
          </div>
          <div className="uniqness-desc">
            <h2>WHAT SETS THE MACHAN APART?</h2>
            <p>
              Whether you are seeking India's most renowned treehouse resort or
              simply a treehouse in Lonavala, The Machan is the answer to both
              the needs. Our focus on sustainability, ecological responsibility
              and being one with nature is what guests find unique about our
              property. Acclaimed and awarded for our hospitality standards by
              customers, critics and media alike, your search for the finest
              ends at The Machan Experience.
            </p>
          </div>
        </div>
      </section>
      <Footer></Footer>
    </div>
  );
}
