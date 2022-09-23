import InfoTile from "../info-tile/Info-Tile";
import "./Info-Tiles.css";

export default function InfoTiles(props) {
  const { data } = props;
  return (
    <div className="info-tiles">
      {data.map((d) => {
        return (
          <InfoTile title={d.header} bkImg={d.img}>
            <div className="info-tile-desc">{d.body}</div>
          </InfoTile>
        );
      })}
    </div>
  );
}
