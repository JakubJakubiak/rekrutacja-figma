import { FooterLinkGroupProps } from "../types";

export const FooterLinkGroup: React.FC<FooterLinkGroupProps> = ({
  title,
  links,
}) => (
  <div className="flex flex-col grow shrink w-[121px]">
    <div className="font-bold text-white uppercase">{title}</div>
    <div className="mt-2.5 font-semibold text-white text-opacity-40">
      {links.map((link, index) => (
        <React.Fragment key={index}>
          {link}
          <br />
        </React.Fragment>
      ))}
    </div>
  </div>
);
