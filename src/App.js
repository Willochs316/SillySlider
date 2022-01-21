import "./styles.css";
import ImageSlider from "./Components/ImageSlider";
import ImageSlides from "./Components/ImageSlides";

export default function App() {
  return (
    <div className="App">
      <ImageSlider slides={ImageSlides} />
    </div>
  );
}
