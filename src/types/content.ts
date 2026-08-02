/** Domain content types shared by the local content layer and the Sanity layer. */

export type IconName =
  | "blueprint"
  | "design"
  | "management"
  | "renovation"
  | "site"
  | "specialty";

export interface NavItem {
  name: string;
  href: string;
}

export interface Service {
  id: string;
  name: string;
  icon: IconName;
  description: string;
}

export interface SocialLink {
  name: string;
  href: string;
}

export interface TeamMember {
  id: string;
  name: string;
  title: string;
  image: string;
  social: SocialLink[];
}

export interface Project {
  id: string;
  title: string;
  image: string;
  category: string;
  description: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  image: string;
  rating: number;
  review: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  image: string;
  category: string;
  excerpt: string;
  date: string;
  author: string;
  tags: string[];
}

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  address: string;
}
