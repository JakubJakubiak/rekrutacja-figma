import { LearnMoreLinkProps } from "../types";

export const LearnMoreLink: React.FC<LearnMoreLinkProps> = ({
  text,
  href = "#",
}) => (
  <div className="flex gap-1.5 items-center self-start mt-10 font-semibold">
    <div className="self-stretch my-auto text-center text-zinc-950">
      Learn more about{" "}
    </div>
    <div className="flex gap-1.5 items-center self-stretch my-auto text-blue-600">
      <div className="self-stretch my-auto">{text}</div>
      <img
        loading="lazy"
        src="https://cdn.builder.io/api/v1/image/assets/TEMP/7bf087c82bbcb4f05cd57b6f3ae2d8f9928318ee61eedcf721b552231de018c9?placeholderIfAbsent=true&apiKey=828b96a4fc524786aa89a4666dea1553"
        className="object-contain shrink-0 self-stretch my-auto w-4 aspect-[0.94]"
        alt=""
      />
    </div>
  </div>
);
