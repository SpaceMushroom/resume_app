import { Link } from "react-router-dom";
import { LuMailPlus } from "react-icons/lu";
import "./Mail.scss";

const Mail = ({ link }) => {
  return (
    <div className="social-mail">
      <Link to={link}>
        <div className="link">
          <p>Send email!</p>
          <div className="icon">
            <LuMailPlus />
          </div>
        </div>
      </Link>
    </div>
  );
};

export default Mail;
