import React from "react";

const InfoSection: React.FC<{
  title: string;
  items: Array<{ icon: string; text: string }>;
  bgColor: string;
  textColor: string;
  iconColor: string;
}> = ({ title, items, bgColor, textColor, iconColor }) => {
  return (
    <div
      className={`p-8 rounded-lg shadow-lg hover:shadow-xl ${bgColor} ${textColor}`}
    >
      <h3 className="font-bold text-xl mb-6">{title}</h3>
      <ul className="space-y-3">
        {items.map((item, index) => (
          <li className="flex items-center" key={index}>
            <span className={`${iconColor} mr-2`}>{item.icon}</span>
            {item.text}
          </li>
        ))}
      </ul>
    </div>
  );
};

export const PlusAndMinus: React.FC = () => {
  const sections = [
    {
      title: "Challenges Without a Solution",
      items: [
        { icon: "\u2717", text: "Difficulty distinguishing whether an image is AI-generated or human-made" },
        { icon: "\u2717", text: "Misattribution of artwork authorship" },
        { icon: "\u2717", text: "Erosion of trust in visual content authenticity" },
        { icon: "\u2717", text: "Challenges in protecting intellectual property of artists" },
        { icon: "\u2717", text: "AI art saturating markets, overshadowing human art" },
      ],
      bgColor: "bg-red-900",
      textColor: "text-red-300",
      iconColor: "text-red-400",
    },
    {
      title: "Benefits of Human or Ai",
      items: [
        { icon: "\u2713", text: "Clarity on the origin of visual content" },
        { icon: "\u2713", text: "Preservation of artistic integrity and authorship" },
        { icon: "\u2713", text: "Empowered audiences to value human creativity" },
        { icon: "\u2713", text: "Ability to differentiate human skill from AI automation" },
        { icon: "\u2713", text: "Strengthened credibility for artists in digital spaces" },
      ],
      bgColor: "bg-green-900",
      textColor: "text-green-300",
      iconColor: "text-green-400",
    },
  ];
  

  return (
    <section
      className="text-white py-16"
      id="faq"
      style={{ backgroundColor: "#e5e7eb" }}
    >
      <div className="max-w-5xl mx-auto px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {sections.map((section, index) => (
            <InfoSection
              key={index}
              title={section.title}
              items={section.items}
              bgColor={section.bgColor}
              textColor={section.textColor}
              iconColor={section.iconColor}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
