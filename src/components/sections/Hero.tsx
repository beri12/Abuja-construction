"use client";

import { useRef } from "react";
import Image from "next/image";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ButtonLink } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { siteConfig } from "@/constants/site";

gsap.registerPlugin(useGSAP);

const highlights = [
  "Licensed & insured",
  "On-time delivery",
  "Transparent pricing",
];

export function Hero() {
  const containerRef = useRef<HTMLElement>(null);
  const badgeRef = useRef<HTMLSpanElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const paraRef = useRef<HTMLParagraphElement>(null);
  const buttonsRef = useRef<HTMLDivElement>(null);
  const listRef = useRef<HTMLUListElement>(null);
  const imageWrapRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const listItems = listRef.current?.children
        ? Array.from(listRef.current.children)
        : [];

      const tl = gsap.timeline({
        defaults: { ease: "power3.out" },
      });

      tl.from(badgeRef.current, {
        y: 20,
        opacity: 0,
        duration: 0.6,
      })
        .from(
          headingRef.current,
          {
            y: 30,
            opacity: 0,
            duration: 0.8,
          },
          "-=0.4"
        )
        .from(
          paraRef.current,
          {
            y: 24,
            opacity: 0,
            duration: 0.7,
          },
          "-=0.5"
        )
        .from(
          buttonsRef.current ? Array.from(buttonsRef.current.children) : [],
          {
            y: 20,
            opacity: 0,
            duration: 0.6,
            stagger: 0.1,
          },
          "-=0.4"
        )
        .from(
          listItems,
          {
            y: 14,
            opacity: 0,
            duration: 0.5,
            stagger: 0.08,
          },
          "-=0.3"
        )
        .from(
          imageWrapRef.current,
          {
            x: 60,
            opacity: 0,
            scale: 0.96,
            duration: 0.9,
            ease: "power2.out",
          },
          "-=0.9"
        );
    },
    { scope: containerRef }
  );

  return (
    <section
      id="home"
      ref={containerRef}
      className="relative overflow-hidden bg-secondary text-secondary-foreground"
    >
      <div
        className="absolute inset-0 -z-10 opacity-20"
        aria-hidden="true"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 20%, var(--color-primary) 0, transparent 40%)",
        }}
      />
      <Container>
        <div className="grid items-center gap-12 py-20 lg:grid-cols-2 lg:py-28">
          <div>
            <span
              ref={badgeRef}
              className="inline-flex items-center rounded-full border border-secondary-foreground/20 px-3 py-1 text-xs font-semibold uppercase tracking-wider"
            >
              Trusted construction partner
            </span>

            <h1
              ref={headingRef}
              className="mt-5 text-balance text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl"
            >
              Building with precision, delivering with{" "}
              <span className="text-primary">trust</span>.
            </h1>

            <p
              ref={paraRef}
              className="mt-6 max-w-xl text-pretty text-base leading-relaxed text-secondary-foreground/80 sm:text-lg"
            >
              {siteConfig.description}
            </p>

            <div ref={buttonsRef} className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ButtonLink href="#contact" size="lg">
                Start Your Project
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </ButtonLink>
              <ButtonLink href="#projects" size="lg" variant="outline">
                View Our Work
              </ButtonLink>
            </div>

            <ul ref={listRef} className="mt-8 flex flex-wrap gap-x-6 gap-y-2">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-2 text-sm">
                  <CheckCircle2 className="h-4 w-4 text-primary" aria-hidden="true" />
                  {item}
                </li>
              ))}
            </ul>
          </div>

          <div
            ref={imageWrapRef}
            className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-elevated"
          >
            <Image
              src="/images/hero-image.png"
              alt="Construction professionals reviewing plans on an active build site"
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </div>
      </Container>
    </section>
  );
}