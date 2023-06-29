import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import "./Github.scss";

const Github = ({ github }) => {
  return (
    <Link to={github}>
      <div className="github-box">
        <div className="icon">
          <FaGithub />
        </div>
        <p>Github</p>
      </div>
    </Link>
  );
};

export default Github;
