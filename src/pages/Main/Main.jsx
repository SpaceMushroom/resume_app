import Skills from "../../components/Skills/Skills";
import "./Main.scss";

const Main = () => {
  return (
    <div className="home">
      <div className="hero">
        <h1>Hero</h1>
        <img
          src="file:///C:/Users/IG/Downloads/png-transparent-programmer-computer-programming-software-programming-s-computer-computer-program-programming-language[1]_adobe_express.svg"
          alt="icon"
        />
      </div>
      <Skills />
    </div>
  );
};

export default Main;
