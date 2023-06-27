import "./Button.scss";

const Button = ({ children }) => {
  return (
    <div className="button-wrap">
      <button className="button">{children}</button>
    </div>
  );
};

export default Button;
