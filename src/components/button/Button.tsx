import type React from "react";

import "./button.css";

type ButtonProps = {
  isLoading: boolean | "pending";
  type: "submit" | "button" | "reset";
  children: React.ReactNode;
};

const Button = ({ isLoading, type, children }: ButtonProps) => {
  return (
    <button className="button" type={type} disabled={isLoading === "pending"}>
      {children}
    </button>
  );
};

export default Button;
