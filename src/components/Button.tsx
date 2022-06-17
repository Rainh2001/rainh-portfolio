import "./Button.scss";

interface ButtonProps {
  children: string;
}

const Button = ({ children }: ButtonProps) => {
  return (
    <button className="button">
      <span className="text">{children}</span>
    </button>
  );
};

export default Button;
