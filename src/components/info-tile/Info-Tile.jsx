import "./Info-Tile.css";

export default function InfoTile(props) {
  return (
    <div className="info-tile">
      <img className="info-tile-img" src={props.bkImg} alt=""></img>
      <div className="info-tile-title">
        <div>{props.title}</div>
      </div>
      {props.children}
    </div>
  );
}
