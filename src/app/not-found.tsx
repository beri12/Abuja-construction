import Link from "next/link";
import type { Metadata } from "next";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";

export const metadata: Metadata = {
  title: "Page Not Found",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <Container className="flex min-h-[70vh] flex-col items-center justify-center py-24 text-center">
      <p className="font-display text-7xl font-bold text-primary">404</p>
      <h1 className="mt-4 text-2xl font-bold sm:text-3xl">Page not found</h1>
      <p className="mt-3 max-w-md text-muted-foreground">
        The page you&apos;re looking for doesn&apos;t exist or has been moved.
      </p>
      <div className="mt-8 flex gap-3">
        <ButtonLink href="/">Back to Home</ButtonLink>
        <Link
          href="/#contact"
          className="inline-flex h-11 items-center rounded-md border border-border px-5 text-sm font-semibold transition-colors hover:bg-muted"
        >
          Contact Us
        </Link>
      </div>
    </Container>
  );
}
