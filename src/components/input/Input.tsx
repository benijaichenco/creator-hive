import "./input.css";

type InputProps = {
  type: string;
  value?: string;
  name?: string;
  placeholder?: string;
  required?: boolean;
};

const Input = ({ type, value, name, placeholder, required }: InputProps) => {
  return (
    <input
      data-cursor="text"
      className="input"
      type={type}
      name={name}
      placeholder={placeholder}
      value={value}
      required={required}
    />
  );
};

export default Input;
