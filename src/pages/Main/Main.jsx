import Skills from "../../components/Skills/Skills";
import Hero from "../../components/Hero/Hero";
import "./Main.scss";
import SlideShow from "../../components/SlideShow/SlideShow";

const Main = () => {
  return (
    <div className="home">
      <Hero />
      <Skills />
      <SlideShow />
    </div>
  );
};

export default Main;
