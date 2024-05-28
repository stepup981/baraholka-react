import button from "@components/UI/button/button.scss";

const Button = ({ children, onClick }) => {
  return <button className="btn" onClick={onClick}>{children}</button>;
};

export default Button;
