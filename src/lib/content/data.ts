import type {
  BlogPost,
  Project,
  Service,
  Stat,
  TeamMember,
  Testimonial,
} from "@/types/content";
import { socialLinks } from "@/constants/site";

/**
 * Bundled content, migrated from the original hardcoded data source.
 * This is the fallback when Sanity is not configured. The shapes match the
 * Sanity schemas exactly, so switching sources requires no component changes.
 */

export const services: Service[] = [
  {
    id: "general-contracting",
    name: "General Contracting",
    icon: "blueprint",
    description:
      "We oversee the entire construction project from start to finish — hiring and coordinating subcontractors, managing the budget and schedule, and ensuring the work meets every specification and regulation.",
  },
  {
    id: "design-build",
    name: "Design-Build Services",
    icon: "design",
    description:
      "A single contract that unites design and construction, streamlining the process and keeping communication tight between the design and build teams from concept to completion.",
  },
  {
    id: "project-management",
    name: "Project Management",
    icon: "management",
    description:
      "Planning, coordinating and overseeing projects so they are completed on time, within budget, and to the required quality standards — with clear reporting at every stage.",
  },
  {
    id: "renovation-remodeling",
    name: "Renovation & Remodeling",
    icon: "renovation",
    description:
      "Updating and improving existing structures, from minor repairs to major overhauls of residential, commercial and industrial properties.",
  },
  {
    id: "site-preparation",
    name: "Site Preparation",
    icon: "site",
    description:
      "Land clearing, excavation, grading and utility installation to make sure the site is fully ready before building begins.",
  },
  {
    id: "specialty-construction",
    name: "Specialty Construction",
    icon: "specialty",
    description:
      "Specialized trades including roofing, concrete work, steel erection, plumbing and electrical work for the specific demands of each project.",
  },
];

export const stats: Stat[] = [
  { label: "Projects Completed", value: 250, suffix: "+" },
  { label: "Years of Experience", value: 18 },
  { label: "Expert Team Members", value: 45 },
  { label: "Client Satisfaction", value: 98, suffix: "%" },
];

export const team: TeamMember[] = [
  {
    id: "oluoma-james",
    name: "Oluoma James",
    title: "Site Technician",
    image: "/images/member-1.jpeg",
    social: socialLinks,
  },
  {
    id: "mary-brown",
    name: "Mary Brown",
    title: "Project Engineer",
    image: "/images/member-2.jpeg",
    social: socialLinks,
  },
  {
    id: "lawrence-onu",
    name: "Lawrence Onu",
    title: "Structural Foreman",
    image: "/images/member-3.jpeg",
    social: socialLinks,
  },
  {
    id: "joy-eze",
    name: "Joy Eze",
    title: "Design Coordinator",
    image: "/images/member-4.jpeg",
    social: socialLinks,
  },
];

export const projects: Project[] = [
  {
    id: "residential-development",
    title: "Residential Development Project",
    image: "/images/building-5.jpeg",
    category: "Residential",
    description:
      "A comprehensive residential development involving the construction of a new housing community, from initial site clearing and preparation to final home construction and landscaping.",
  },
  {
    id: "commercial-office-building",
    title: "Commercial Office Building",
    image: "/images/building-6.jpeg",
    category: "Commercial",
    description:
      "A multi-story office building including all architectural and structural design, coordination of specialized trades for HVAC and electrical systems, and complete project oversight.",
  },
  {
    id: "retail-space-renovation",
    title: "Retail Space Renovation",
    image: "/images/building-7.jpeg",
    category: "Renovation",
    description:
      "Transforming an outdated retail store into a modern commercial space with interior demolition, a new layout, fresh fixtures and fully updated utilities.",
  },
  {
    id: "industrial-warehouse",
    title: "Industrial Warehouse Construction",
    image: "/images/building-8.jpeg",
    category: "Industrial",
    description:
      "A large-scale industrial warehouse including land clearing, foundation work, steel structure erection and complete construction management from start to finish.",
  },
  {
    id: "historic-building-restoration",
    title: "Historic Building Restoration",
    image: "/images/building-9.jpeg",
    category: "Restoration",
    description:
      "Restoring a historic building to preserve its architectural integrity while updating it to modern standards through meticulous craftsmanship and specialized techniques.",
  },
  {
    id: "educational-facility-expansion",
    title: "Educational Facility Expansion",
    image: "/images/building-10.jpeg",
    category: "Institutional",
    description:
      "Expanding an existing school with new classrooms and facilities, covering everything from initial design and site preparation to construction and final project management.",
  },
];

export const testimonials: Testimonial[] = [
  {
    id: "samuel-eze",
    name: "Samuel Eze",
    role: "Homeowner",
    image: "/images/profile-2.jpeg",
    rating: 5,
    review:
      "Zelalem Construction handled our home build with remarkable professionalism. Every milestone was communicated clearly, the site stayed clean and safe, and the final result exceeded what we imagined. They delivered on time and on budget.",
  },
  {
    id: "emmanuel-joseph",
    name: "Emmanuel Joseph",
    role: "Property Developer",
    image: "/images/profile-3.jpeg",
    rating: 5,
    review:
      "We have worked with several contractors over the years and none matched this level of coordination. Their project management kept every trade aligned and the quality of the finish speaks for itself.",
  },
  {
    id: "gloria-chiwendu",
    name: "Gloria Chiwendu",
    role: "Retail Business Owner",
    image: "/images/profile-4.jpeg",
    rating: 5,
    review:
      "They renovated our retail space with zero disruption to the neighbouring units. The team was responsive, transparent about costs, and genuinely cared about getting the details right. Highly recommended.",
  },
  {
    id: "precious-stone",
    name: "Precious Stone",
    role: "Facilities Manager",
    image: "/images/member-1.jpeg",
    rating: 5,
    review:
      "From site preparation to handover, the process was seamless. Their craftsmanship and attention to safety gave us complete confidence throughout the project. We will absolutely work with them again.",
  },
];

export const blogPosts: BlogPost[] = [
  {
    id: "sustainable-construction",
    slug: "sustainable-construction-building-for-the-future",
    title: "Sustainable Construction: Building for the Future",
    image: "/images/blog-1.jpeg",
    category: "Building",
    excerpt:
      "As the construction industry evolves, the focus on sustainability has never been more critical. We explore the principles of sustainable construction, the benefits it offers, and how we lead with eco-friendly building practices.",
    date: "2024-01-10",
    author: "Johnson",
    tags: ["Sustainability", "Green Building", "Innovation"],
  },
  {
    id: "quality-craftsmanship",
    slug: "importance-of-quality-craftsmanship-in-construction",
    title: "The Importance of Quality Craftsmanship in Construction",
    image: "/images/blog-2.jpeg",
    category: "Construction",
    excerpt:
      "Quality craftsmanship is the cornerstone of any successful construction project. We look at why it matters and how we uphold the highest standards on every project we undertake.",
    date: "2023-12-15",
    author: "Bissi",
    tags: ["Craftsmanship", "Quality", "Standards"],
  },
  {
    id: "innovative-technologies",
    slug: "innovative-technologies-transforming-construction",
    title: "Innovative Technologies Transforming the Construction Industry",
    image: "/images/blog-3.jpeg",
    category: "Innovation",
    excerpt:
      "The construction industry is undergoing a revolution driven by new technology. We explore the advancements making projects more efficient, cost-effective and sustainable.",
    date: "2023-07-20",
    author: "Abisola",
    tags: ["Technology", "Efficiency", "Future"],
  },
];
