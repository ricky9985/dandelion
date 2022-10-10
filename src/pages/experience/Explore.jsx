import SData from "../../data.json";
export default function Explore() {
  const { ExperienceExploreData } = SData;

  return (
    <section className="exp-info explore">
      <div className="exp-info-title">
        <span>Explore</span>
        <hr style={{ width: "65px" }}></hr>
      </div>
      <div className="para-container">
        We encourage our guests to detach themselves from all forms of
        electronic devices eg. Mobile, TV, Laptops, etc and enjoy the peaceful
        beauty and serenity the place has to offer. Our resort is surrounded on
        three sides by forest land, which you can take time to explore e.g. the
        forest has a small waterfall which forms a pond at its foot and can be
        reached by following a trail of 1.5 kms.
        <br />
        <br />
        We have a range of activities based on offerings of the resort on the
        surroundings.
      </div>
      <div className="exp-info-imgs" style={{ marginTop: "3rem" }}>
        {ExperienceExploreData.map((d, index) => {
          return (
            <div
              className="exp-info-img"
              key={`exp-info-img-${index}`}
              // style={{
              //   backgroundImage: `url('${d.img}')`,
              //   backgroundPosition: "center",
              //   backgroundRepeat: "no-repeat",
              // }}
            >
              <div
                className="exp-info-title info-card-title"
              >
                {d.header}
              </div>
              <div className="info-card-img">
                <img src={d.img} alt="" />
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
