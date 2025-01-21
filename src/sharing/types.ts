export interface NavLinkProps {
  text: string;
  href?: string;
}

export interface ButtonProps {
  children: React.ReactNode;
  variant?: "primary" | "secondary";
  className?: string;
  onClick?: () => void;
}

export interface LearnMoreLinkProps {
  text: string;
  href?: string;
}

export interface FeatureCardProps {
  title: string;
  description: string;
  imageSrc: string;
  learnMoreText: string;
  imageAlt: string;
}

export interface FooterLinkGroupProps {
  title: string;
  links: string[];
}
