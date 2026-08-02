import { createClient, type SanityClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from '@sanity/image-url'
import { apiVersion, dataset, projectId } from "./env";

const isSanityConfigured = Boolean(projectId && dataset && apiVersion);

/**
 * Sanity client. Returns null when the project is not configured so callers can
 * transparently fall back to bundled content.
 */
export const sanityClient: SanityClient | null = isSanityConfigured
  ? createClient({
      projectId,
      dataset,
      apiVersion,
      useCdn: true,
      token: process.env.SANITY_API_READ_TOKEN,
    })
  : null;

const builder = sanityClient ? imageUrlBuilder(sanityClient) : null;

/** Build an optimized image URL from a Sanity image reference. */
export function urlForImage(source: SanityImageSource): string {
  if (!builder) return "";
  return builder.image(source).auto("format").fit("max").url();
}
