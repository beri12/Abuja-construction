import type { NavItem, ContactInfo } from "@/types/content";

export const siteConfig = {
  name: "Abuja Construction",
  shortName: "Abuja Construction",
  description:
    "Abuja Construction delivers general contracting, design-build, project management and renovation services with a commitment to quality craftsmanship and on-time delivery.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://Abujaconstruction.com",
  tagline: "Building with precision, delivering with trust.",
  locale: "en_US",
} as const;

export const contactInfo: ContactInfo = {
  email: "mradinuba@gmail.com",
  phone: "+2348149121918",
  address: "Gwarinpa, Abuja, Nigeria",
};

export const socialLinks: NavItem[] = [
  { name: "Facebook", href: "https://facebook.com" },
  { name: "LinkedIn", href: "https://linkedin.com" },
  { name: "Instagram", href: "https://instagram.com" },
  {
    name: "YouTube",
    href: "https://www.youtube.com/channel/UCEtnsPZQEd0l1tbr_nDQd5Q?sub_confirmation=1",
  },
];

export const navItems: NavItem[] = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Services", href: "#services" },
  { name: "Team", href: "#team" },
  { name: "Projects", href: "#projects" },
  { name: "Testimonials", href: "#testimonials" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];
