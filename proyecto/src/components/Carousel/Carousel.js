import AwesomeSlider from "react-awesome-slider";
import "./Carousel.css";

function Galeria() {
  return (
    <AwesomeSlider>
      <div data-src="/../proyecto/src/components/ItemsList/img/2080.jpg">
        <p>I want to see what you got.</p>
      </div>
      <div data-src="/../proyecto/src/components/ItemsList/img/2080.jpg">
        <p>The answer is -- Don't think about it.</p>
      </div>
      <div data-src="/../proyecto/src/components/ItemsList/img/2080.jpg">
        <p>Sometimes science is more art than science.</p>
      </div>
      <div data-src="/../proyecto/src/components/ItemsList/img/2080.jpg">
        <p>Love, connection, experience.</p>
      </div>
    </AwesomeSlider>
  );
}

export default Galeria;
