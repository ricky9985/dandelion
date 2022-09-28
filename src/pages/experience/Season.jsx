import SData from "../../data.json";
import "./Experience.css";

export default function Seasons() {
  const { ExperienceSeasonsData } = SData;
  return (
    <section className="exp-info seasons">
      <div className="exp-info-title">
        <span>SEASONS</span>
        <hr style={{ width: "65px" }}></hr>
      </div>
      <div className="exp-info-imgs">
        {ExperienceSeasonsData.map((d, index) => {
          return (
            <div className="exp-info-img" key={`exp-info-img-${index}`}>
              <div
                className="season-bk"
                // style={{
                //   backgroundImage: `url('${d.img}')`,
                //   backgroundRepeat: "no-repeat",
                // }}
              >
                <div className="exp-info-title" info-card-title>
                  {d.header}
                </div>
                <div className="info-card-img">
                  <img src={d.img} alt="" style={{ height: "58vh" }} />
                </div>
              </div>
              <div className="season-txt">
                <div style={{ margin: "30px" }}>
                  <span style={{ fontSize: "1.5rem" }}>{d.body.title}</span>
                  <br></br>
                  {d.body.desc}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
