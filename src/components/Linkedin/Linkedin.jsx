import { Link } from "react-router-dom";
import { FaLinkedin } from "react-icons/fa";
import "./Linkedin.scss";

const Linkedin = ({ linkedin }) => {
  return (
    <Link to={linkedin}>
      <div className="linkedin-box">
        <div className="icon">
          <FaLinkedin />
        </div>
        <p>Linkedin</p>
      </div>
    </Link>
  );
};

export default Linkedin;
