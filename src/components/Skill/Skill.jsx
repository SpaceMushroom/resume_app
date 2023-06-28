import "./Skill.scss";

const Skill = ({ title, icon }) => {
  return (
    <div className="box-content">
      <div className="box-icon">{icon}</div>
      <div className="box-text">
        <p>{title}</p>
      </div>
    </div>
  );
};

export default Skill;

//fix proptypes
