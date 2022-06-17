import "./Button.scss";

interface ButtonProps {
  children: string;
}

const Button = ({ children }: ButtonProps) => {
  return (
    <div className="wrapper" style={{ position: "relative" }}>
      <button className="button">
        <span className="text">{children}</span>
      </button>
      <div className="hidden-bg"></div>
    </div>
  );
};

export default Button;
