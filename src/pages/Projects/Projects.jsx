import Project from "../../components/Project/Project";
import "./Projects.scss";
import { MAIN_ROUTE as main } from "../../routes/const";

const Projects = () => {
  return (
    <div className="work">
      <div className="work-header">
        <span className="curly">{"{"}</span>
        <span>
          <h2>My Works</h2>
        </span>
        <span className="curly">{"}"}</span>
      </div>
      <div className="projects">
        <Project
          image={
            "https://1.bp.blogspot.com/-i78iKr_P9Pk/X9ohjXyc5eI/AAAAAAAAA_4/8UauxZaOgUshGK7MXwW1gZqts7Zrf_AewCLcBGAsYHQ/s1280/Todo%2BList%2BApp%2Busing%2BHTML%2BCSS%2B%2526%2BJavaScript.webp"
          }
          title={"Todos app"}
          subtitle={
            <>
              <span>Todos app </span>
              subtitle Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Illum sunt eum eos porro ratione ipsum eaque culpa reiciendis .
            </>
          }
          url={main}
        />
        <Project
          reverse={"reverse"}
          image={
            "https://1.bp.blogspot.com/-i78iKr_P9Pk/X9ohjXyc5eI/AAAAAAAAA_4/8UauxZaOgUshGK7MXwW1gZqts7Zrf_AewCLcBGAsYHQ/s1280/Todo%2BList%2BApp%2Busing%2BHTML%2BCSS%2B%2526%2BJavaScript.webp"
          }
          title={"Todos app"}
          subtitle={"Todos app subtitle"}
          url={main}
        />
      </div>
    </div>
  );
};

export default Projects;
