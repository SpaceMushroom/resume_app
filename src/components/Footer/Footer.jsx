import Github from "../Github/Github";
import Linkedin from "../Linkedin/Linkedin";
import Mail from "../Mail/Mail";
import "./Footer.scss";

const Footer = () => {
  const currentDate = new Date();
  const currentYear = currentDate.getFullYear();

  return (
    <footer>
      <div className="social">
        <div className="social-title">
          <h2>Conect with me</h2>
        </div>
        <div className="social-body">
          <Github github={"https://github.com/SpaceMushroom"} />
          <Linkedin linkedin={"https://github.com/SpaceMushroom"} />
        </div>
        <Mail link={"mailto:igrinius@gmail.com"} />
        <div className="footer">
          © Copyright {currentYear}, All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
