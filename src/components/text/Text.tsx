import { type CSSProperties } from "react";

type TextProps = {
  children: React.ReactNode;
  size?: "sm" | "md" | "lg" | "xl";
  fontWeight?: "bold" | "light";
  color?: string;
  align?: "center" | "left" | "right";
  style?: CSSProperties;
};

const sizeMapping = {
  sm: "var(--font-xs)",
  md: "var(--font-md)",
  lg: "var(--font-2xl)",
  xl: "var(--font-4xl)",
};

const fontWeightMapping = {
  bold: 600,
  light: 300,
};

const Text = ({
  children,
  size = "md",
  color = "var(--white)",
  fontWeight = "bold",
  align = "left",
  style,
}: TextProps) => {
  return (
    <div
      className="text"
      style={{
        ...style,
        color: color,
        fontSize: sizeMapping[size],
        fontWeight: fontWeightMapping[fontWeight],
        textAlign: align,
      }}
    >
      {children}
    </div>
  );
};

export default Text;
