import Image from "next/image";
import { Quote, Star } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/Heading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/motion/Reveal";
import { getTestimonials } from "@/lib/content";

export async function Testimonials() {
  const testimonials = await getTestimonials();

  return (
    <Section id="testimonials" surface>
      <SectionHeading
        eyebrow="Testimonials"
        title="What our clients say"
        description="We measure our success by the trust our clients place in us — project after project."
      />
      <ul className="mt-14 grid gap-6 md:grid-cols-2">
        {testimonials.map((t, i) => (
          <Reveal as="li" key={t.id} from="up" delay={(i % 2) * 0.08}>
            <Card className="flex h-full flex-col p-6 sm:p-8">
              <Quote className="h-8 w-8 text-primary/40" aria-hidden="true" />
              <div className="mt-2 flex gap-0.5" aria-label={`Rated ${t.rating} out of 5`}>
                {Array.from({ length: 5 }).map((_, idx) => (
                  <Star
                    key={idx}
                    className={
                      idx < t.rating
                        ? "h-4 w-4 fill-accent text-accent"
                        : "h-4 w-4 text-border"
                    }
                    aria-hidden="true"
                  />
                ))}
              </div>
              <blockquote className="mt-4 flex-1 text-pretty leading-relaxed text-muted-foreground">
                “{t.review}”
              </blockquote>
              <div className="mt-6 flex items-center gap-3 border-t border-border pt-5">
                <div className="relative h-11 w-11 overflow-hidden rounded-full">
                  <Image
                    src={t.image}
                    alt={`Portrait of ${t.name}`}
                    fill
                    sizes="44px"
                    className="object-cover"
                  />
                </div>
                <div>
                  <p className="text-sm font-semibold">{t.name}</p>
                  <p className="text-xs text-muted-foreground">{t.role}</p>
                </div>
              </div>
            </Card>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
