/**
 * Minimal, dependency-free schema typings.
 *
 * These mirror the subset of Sanity's schema shape this project uses, so the
 * schema definitions stay readable and version-controlled without pulling in the
 * full `sanity` Studio package. When you scaffold a Studio (`npm create sanity`),
 * import these objects and wrap each with `defineType` — the fields are identical.
 */

export interface SchemaField {
  name: string;
  title: string;
  type: string;
  description?: string;
  options?: Record<string, unknown>;
  to?: { type: string }[];
  of?: { type: string }[];
  fields?: SchemaField[];
  validation?: (rule: SchemaRule) => unknown;
  initialValue?: unknown;
}

export interface SchemaRule {
  required: () => SchemaRule;
  min: (n: number) => SchemaRule;
  max: (n: number) => SchemaRule;
  email: () => SchemaRule;
}

export interface SchemaDocument {
  name: string;
  title: string;
  type: "document";
  fields: SchemaField[];
}
