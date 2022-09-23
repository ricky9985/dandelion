import React, { useRef, useState } from "react";
import "./Data-Image.css";

export default function DataImage(props) {
  const [state, setState] = useState({ inView: "img" });
  const { backgroundUrl, title } = props;
  const containerRef = useRef(null);
  const style = {
    backgroundImage: `url('${backgroundUrl}')`,
  };
  const toggleInfo = () => {
    console.log(containerRef);
    if (state.inView === "img") {
      containerRef.current.scrollLeft +=
        containerRef.current.scrollWidth - containerRef.current.offsetWidth;
      setState({ ...state, inView: "ctn" });
    } else {
      containerRef.current.scrollLeft -=
        containerRef.current.scrollWidth - containerRef.current.offsetWidth;
      setState({ ...state, inView: "img" });
    }
  };
  return (
    <section ref={containerRef} className="data-image-container">
      <div className="data-image h300" style={style} onClick={toggleInfo}>
        <div className="data-image-text">
          <h2 style={{ margin: 0 }}>
            <span>{title}</span>
          </h2>
        </div>
      </div>
      <div className="slide-content h300">
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
      </div>
    </section>
  );
}
