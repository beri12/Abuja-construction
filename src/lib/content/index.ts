import "server-only";

import { sanityClient, urlForImage } from "@/sanity/client";
import type {
  BlogPost,
  Project,
  Service,
  TeamMember,
  Testimonial,
} from "@/types/content";
import {
  blogPosts as localPosts,
  projects as localProjects,
  services as localServices,
  team as localTeam,
  testimonials as localTestimonials,
} from "./data";

/**
 * Single content API used by every server component. When Sanity is configured
 * it reads from the CMS; otherwise it returns the bundled content. Callers never
 * need to know which source is active.
 */

async function fromSanity<T>(
  query: string,
  map: (docs: unknown[]) => T[],
): Promise<T[] | null> {
  if (!sanityClient) return null;
  try {
    const docs = await sanityClient.fetch<unknown[]>(query);
    if (!Array.isArray(docs) || docs.length === 0) return null;
    return map(docs);
  } catch (error) {
    console.error("Sanity fetch failed, using local content:", error);
    return null;
  }
}

export async function getServices(): Promise<Service[]> {
  const remote = await fromSanity<Service>(
    `*[_type == "service"] | order(order asc){ "id": slug.current, name, icon, description }`,
    (docs) => docs as Service[],
  );
  return remote ?? localServices;
}

export async function getProjects(): Promise<Project[]> {
  const remote = await fromSanity<Project>(
    `*[_type == "project"] | order(order asc){ "id": slug.current, title, category, image, description }`,
    (docs) =>
      (docs as (Project & { image: unknown })[]).map((d) => ({
        ...d,
        image: urlForImage(d.image),
      })),
  );
  return remote ?? localProjects;
}

export async function getTeam(): Promise<TeamMember[]> {
  const remote = await fromSanity<TeamMember>(
    `*[_type == "teamMember"] | order(order asc){ "id": _id, name, title, image, social }`,
    (docs) =>
      (docs as (TeamMember & { image: unknown })[]).map((d) => ({
        ...d,
        image: urlForImage(d.image),
      })),
  );
  return remote ?? localTeam;
}

export async function getTestimonials(): Promise<Testimonial[]> {
  const remote = await fromSanity<Testimonial>(
    `*[_type == "testimonial"]{ "id": _id, name, role, image, rating, review }`,
    (docs) =>
      (docs as (Testimonial & { image: unknown })[]).map((d) => ({
        ...d,
        image: urlForImage(d.image),
      })),
  );
  return remote ?? localTestimonials;
}

export async function getBlogPosts(): Promise<BlogPost[]> {
  const remote = await fromSanity<BlogPost>(
    `*[_type == "post"] | order(date desc){ "id": _id, "slug": slug.current, title, category, image, excerpt, "date": date, author, tags }`,
    (docs) =>
      (docs as (BlogPost & { image: unknown })[]).map((d) => ({
        ...d,
        image: urlForImage(d.image),
      })),
  );
  return remote ?? localPosts;
}
