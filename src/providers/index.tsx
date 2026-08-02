"use client";

import { QueryProvider } from "./query-provider";
import { ThemeProvider } from "./theme-provider";

/** Composes all client-side providers into a single boundary. */
export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider>
      <QueryProvider>{children}</QueryProvider>
    </ThemeProvider>
  );
}
