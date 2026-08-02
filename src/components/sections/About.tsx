import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/Heading";
import { Reveal } from "@/components/motion/Reveal";
import { StatCounter } from "./StatCounter";
import { stats } from "@/lib/content/data";

const values = [
  {
    title: "Quality Craftsmanship",
    body: "Every project is built to the highest standards, with meticulous attention to detail at every phase.",
  },
  {
    title: "On-Time Delivery",
    body: "Disciplined scheduling and proactive project management keep your build on track and on budget.",
  },
];

export function About() {
  return (
    <Section id="about" surface>
      <div className="grid items-center gap-12 lg:grid-cols-2">
        <Reveal from="right">
          <div className="relative aspect-[4/3] overflow-hidden rounded-xl shadow-card">
            <Image
              src="/images/about-image.jpeg"
              alt="Zelalem Construction team collaborating on a project site"
              fill
              sizes="(max-width: 1024px) 100vw, 50vw"
              className="object-cover"
            />
          </div>
        </Reveal>

        <div>
          <SectionHeading
            eyebrow="About Us"
            title="A construction partner you can build on"
            description="For nearly two decades we have delivered residential, commercial and industrial projects with an unwavering commitment to safety, quality and client trust."
            align="left"
          />
          <div className="mt-8 grid gap-6 sm:grid-cols-2">
            {values.map((value, i) => (
              <Reveal key={value.title} from="up" delay={i * 0.08}>
                <div className="rounded-lg border border-border bg-background p-5">
                  <h3 className="font-semibold">{value.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                    {value.body}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>

      <div className="mt-16 grid grid-cols-2 gap-8 rounded-xl border border-border bg-background p-8 lg:grid-cols-4">
        {stats.map((stat) => (
          <StatCounter key={stat.label} stat={stat} />
        ))}
      </div>
    </Section>
  );
}
