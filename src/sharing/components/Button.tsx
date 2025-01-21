import { ButtonProps } from "../types";

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className = "",
  onClick,
}) => {
  const baseStyles = "gap-2.5 self-stretch px-5 py-2.5 rounded-[50px]";
  const variantStyles =
    variant === "primary"
      ? "text-white bg-blue-600"
      : "text-zinc-950 border-2 border-solid border-zinc-950";

  return (
    <button
      onClick={onClick}
      className={`${baseStyles} ${variantStyles} ${className}`}
    >
      {children}
    </button>
  );
};
