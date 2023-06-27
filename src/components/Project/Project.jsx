import { Link } from "react-router-dom";
import Button from "../Button/Button";
import "./Project.scss";

const Project = ({ image, title, subtitle, reverse, url }) => {
  return (
    <div className={`project ${reverse}`}>
      <div className="project-img">
        <img src={image} alt={title} />
      </div>
      <div className="project-detail">
        <h4>{title}</h4>
        <p>{subtitle}</p>
        <Link to={url} key={title}>
          <Button>Visit</Button>
        </Link>
      </div>
    </div>
  );
};

export default Project;

// write proptypes fix
