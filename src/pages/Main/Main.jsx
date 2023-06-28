import Skills from "../../components/Skills/Skills";
import "./Main.scss";

const Main = () => {
  const hiddenElements = document.querySelectorAll(".hidden");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      } else {
        entry.target.classList.remove("show");
      }
    });
  });

  hiddenElements.forEach((el) => observer.observe(el));
  return (
    <div className="home">
      <div className="hero">
        <h1>Hero</h1>
      </div>
      <Skills />
    </div>
  );
};

export default Main;
