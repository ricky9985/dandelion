import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleRight } from "@fortawesome/free-solid-svg-icons";
import React, { useEffect, useRef, useState } from "react";
import "./Data-Image.css";
import { Link } from "react-router-dom";

export default function DataImage(props) {
  const [state, setState] = useState({ inView: "img" });
  const { backgroundUrl, title } = props;
  const containerRef = useRef(null);
  const style = {
    // backgroundImage: `url('${backgroundUrl}')`,
  };
  useEffect(() => {
    setState({ ...state, inView: "img" });
  }, [props]);

  const toggleInfo = () => {
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
        {props.children}
      </div>
    </section>
  );
}
