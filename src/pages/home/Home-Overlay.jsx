import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleDown } from "@fortawesome/free-solid-svg-icons";
export default function Overlay({ navRef }) {
  const handleOverlayClick = () => {
    console.log("clicked", navRef);
    navRef.current.scrollIntoView();
  };
  return (
    <div
      className="carousol-overlay"
      onClick={handleOverlayClick}
      style={{ cursor: "pointer" }}
    >
      <div id="homeLogo">
        <img src={window.location.origin + "/black_logo.png"} alt=""></img>
      </div>
      <div className="bounceY">
        <FontAwesomeIcon icon={faAngleDown} />
      </div>
    </div>
  );
}
