import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import "./Horizontal-Carousel.css"

export default function HorizontalCarousel(props) {
  const { data } = props;
  return (
    <Carousel>
      {data.map((d, index) => {
        return (
          <div key={index}>
            <img src={d.img} alt="" />
          </div>
        );
      })}
    </Carousel>
  );
}
