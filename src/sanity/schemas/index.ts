import type { SchemaDocument, SchemaField } from "./types";

const seoFields: SchemaField[] = [
  { name: "metaTitle", title: "Meta Title", type: "string" },
  { name: "metaDescription", title: "Meta Description", type: "text" },
  { name: "ogImage", title: "Social Share Image", type: "image" },
];

const service: SchemaDocument = {
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string", validation: (r) => r.required() },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "name" },
      validation: (r) => r.required(),
    },
    {
      name: "icon",
      title: "Icon",
      type: "string",
      options: {
        list: ["blueprint", "design", "management", "renovation", "site", "specialty"],
      },
    },
    { name: "description", title: "Description", type: "text", validation: (r) => r.required() },
    { name: "order", title: "Display Order", type: "number", initialValue: 0 },
  ],
};

const project: SchemaDocument = {
  name: "project",
  title: "Project",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string", validation: (r) => r.required() },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" } },
    { name: "category", title: "Category", type: "string" },
    { name: "image", title: "Image", type: "image", options: { hotspot: true } },
    { name: "description", title: "Description", type: "text" },
    { name: "order", title: "Display Order", type: "number", initialValue: 0 },
  ],
};

const teamMember: SchemaDocument = {
  name: "teamMember",
  title: "Team Member",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string", validation: (r) => r.required() },
    { name: "title", title: "Role", type: "string" },
    { name: "image", title: "Photo", type: "image", options: { hotspot: true } },
    {
      name: "social",
      title: "Social Links",
      type: "array",
      of: [{ type: "socialLink" }],
    },
    { name: "order", title: "Display Order", type: "number", initialValue: 0 },
  ],
};

const testimonial: SchemaDocument = {
  name: "testimonial",
  title: "Testimonial",
  type: "document",
  fields: [
    { name: "name", title: "Name", type: "string", validation: (r) => r.required() },
    { name: "role", title: "Role", type: "string" },
    { name: "image", title: "Photo", type: "image", options: { hotspot: true } },
    { name: "rating", title: "Rating", type: "number", validation: (r) => r.min(1).max(5) },
    { name: "review", title: "Review", type: "text", validation: (r) => r.required() },
  ],
};

const post: SchemaDocument = {
  name: "post",
  title: "Blog Post",
  type: "document",
  fields: [
    { name: "title", title: "Title", type: "string", validation: (r) => r.required() },
    { name: "slug", title: "Slug", type: "slug", options: { source: "title" }, validation: (r) => r.required() },
    { name: "category", title: "Category", type: "string" },
    { name: "image", title: "Cover Image", type: "image", options: { hotspot: true } },
    { name: "excerpt", title: "Excerpt", type: "text" },
    { name: "body", title: "Body", type: "array", of: [{ type: "block" }] },
    { name: "author", title: "Author", type: "string" },
    { name: "date", title: "Published Date", type: "datetime" },
    { name: "tags", title: "Tags", type: "array", of: [{ type: "string" }] },
    ...seoFields,
  ],
};

const siteSettings: SchemaDocument = {
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    { name: "title", title: "Site Title", type: "string" },
    { name: "description", title: "Description", type: "text" },
    { name: "tagline", title: "Tagline", type: "string" },
    { name: "email", title: "Email", type: "string", validation: (r) => r.email() },
    { name: "phone", title: "Phone", type: "string" },
    { name: "address", title: "Address", type: "string" },
    { name: "social", title: "Social Links", type: "array", of: [{ type: "socialLink" }] },
    ...seoFields,
  ],
};

/** Every document type registered for the Sanity schema. */
export const schemaTypes: SchemaDocument[] = [
  siteSettings,
  service,
  project,
  teamMember,
  testimonial,
  post,
];
