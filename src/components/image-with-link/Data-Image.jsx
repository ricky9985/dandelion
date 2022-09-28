import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import React, { useRef, useState } from "react";
import "./Data-Image.css";
import { Link } from "react-router-dom";

export default function DataImage(props) {
  const [state, setState] = useState({ inView: "img" });
  const { backgroundUrl, title } = props;
  const containerRef = useRef(null);
  const style = {
    // backgroundImage: `url('${backgroundUrl}')`,
  };
  const toggleInfo = () => {
    console.log(containerRef);
    if (state.inView === "img") {
      // containerRef.current.scrollLeft +=
      //   containerRef.current.scrollWidth - containerRef.current.offsetWidth;
      setState({ ...state, inView: "ctn" });
    } else {
      // containerRef.current.scrollLeft -=
      //   containerRef.current.scrollWidth - containerRef.current.offsetWidth;
      setState({ ...state, inView: "img" });
    }
  };
  return (
    <section ref={containerRef} className="data-image-container">
      <div
        className={`data-image click-cursor h350 ${
          state.inView === "img" ? "open" : "closed"
        }`}
        onClick={toggleInfo}
      >
        <img src={backgroundUrl} alt=""></img>
        <div className="data-image-text">
          <span className="title">{title}</span>
          <div className="bounceX right-arrow">
            <FontAwesomeIcon icon={faAngleRight} />
          </div>
        </div>
      </div>

      <div
        className={`slide-content h350 ${
          state.inView === "ctn" ? "open" : "closed"
        }`}
      >
        <div className="content">
          <p>
            The Machan is an exclusive eco-resort with unique tree houses rising
            30 - 45 feet above the forest, offering complete serenity to those
            looking to escape into nature. Located in Jambulne, one of 25
            biological hotspots of the world and a mere 2.5 hours drive from
            Mumbai or 1.5 hours drive from Pune, the Machan makes for an
            accessible weekend getaway.
          </p>
        </div>
        {props.children}
      </div>
    </section>
  );
}
