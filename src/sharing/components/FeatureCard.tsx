import { FeatureCardProps } from "../types";
import { LearnMoreLink } from "./LearnMoreLink";

export const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  imageSrc,
  imageAlt,
  learnMoreText,
}) => (
  <div className="flex flex-col items-start self-stretch my-auto min-w-[240px] w-[519px] max-md:max-w-full">
    <img
      loading="lazy"
      src={imageSrc}
      alt={imageAlt}
      className="object-contain max-w-full aspect-[1.18] w-[410px]"
    />
    <div className="flex flex-col self-stretch mt-10 w-full text-zinc-950 max-md:max-w-full">
      <div className="text-3xl font-black max-md:max-w-full">{title}</div>
      <div className="mt-5 text-lg leading-8 max-md:max-w-full">
        {description}
      </div>
    </div>
    <LearnMoreLink text={learnMoreText} />
  </div>
);
