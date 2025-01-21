import * as React from "react";
import { NavLink } from "./components/NavLink";
import { Button } from "./components/Button";
import { FeatureCard } from "./components/FeatureCard";
import { FooterLinkGroup } from "./components/FooterLinkGroup";

const navLinks = [
  "Solutions",
  "Features",
  "Examples",
  "Prices",
  "Help",
  "Blog",
];

const footerGroups = [
  {
    title: "PUBLUU",
    links: ["Home", "Reviews", "Price plan", "Try for free", "Site Map"],
  },
  {
    title: "Features",
    links: ["Virtual Bookshelf", "Flipbook App", "Statistics", "PDF tracking"],
  },
  // ... other footer groups
];

export const SharingPage: React.FC = () => {
  return (
    <div className="flex overflow-hidden flex-col bg-white">
      {/* Navigation */}
      <nav className="flex flex-wrap gap-10 items-center pt-5 pb-16 w-full text-base font-semibold">
        <div className="flex gap-8">
          {navLinks.map((link, index) => (
            <NavLink key={index} text={link} />
          ))}
        </div>

        <div className="flex gap-5">
          <Button variant="primary">Try for free</Button>
          <Button variant="secondary">Login</Button>
        </div>
      </nav>

      {/* Main Content */}
      <main>
        <section className="bg-zinc-100">
          <FeatureCard
            title="Share with a Custom link"
            description="Add a personal touch to your flipbook links. Share your flipbooks with a custom link that reflects your brand."
            imageSrc="https://cdn.builder.io/api/v1/image/assets/TEMP/934643a1b42ca4f2b5cb0a10dd5a0adffbe340fa0035b2e0974079d91bbe749d?placeholderIfAbsent=true&apiKey=828b96a4fc524786aa89a4666dea1553"
            imageAlt="Custom link sharing feature demonstration"
            learnMoreText="Sharing with Custom Link"
          />
          {/* Other feature cards */}
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-zinc-950 text-white px-20 py-16">
        <div className="flex flex-wrap gap-10">
          {footerGroups.map((group, index) => (
            <FooterLinkGroup
              key={index}
              title={group.title}
              links={group.links}
            />
          ))}
        </div>
      </footer>
    </div>
  );
};
