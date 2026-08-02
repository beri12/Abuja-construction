import { ArrowRight } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { ButtonLink } from "@/components/ui/Button";
import { Reveal } from "@/components/motion/Reveal";

/** Full-width call-to-action band above the footer. */
export function CTA() {
  return (
    <section className="bg-primary text-primary-foreground">
      <Container>
        <Reveal from="up">
          <div className="flex flex-col items-center gap-6 py-16 text-center lg:flex-row lg:justify-between lg:text-left">
            <div>
              <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
                Ready to start your next project?
              </h2>
              <p className="mt-3 max-w-xl text-primary-foreground/85">
                Get a free, no-obligation consultation with our team. Let&apos;s
                turn your vision into a structure that lasts.
              </p>
            </div>
            <ButtonLink
              href="#contact"
              size="lg"
              variant="secondary"
              className="shrink-0"
            >
              Request a Consultation
              <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </ButtonLink>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
