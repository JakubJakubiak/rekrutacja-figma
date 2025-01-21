import { NavLinkProps } from "../types";

export const NavLink: React.FC<NavLinkProps> = ({ text, href = "#" }) => (
  <a href={href} className="self-stretch my-auto">
    {text}
  </a>
);
