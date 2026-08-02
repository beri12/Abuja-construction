import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/Heading";
import { Card } from "@/components/ui/Card";
import { ServiceIcon } from "@/components/ui/ServiceIcon";
import { Reveal } from "@/components/motion/Reveal";
import { getServices } from "@/lib/content";

export async function Services() {
  const services = await getServices();

  return (
    <Section id="services">
      <SectionHeading
        eyebrow="What We Do"
        title="Comprehensive construction services"
        description="From the first blueprint to the final inspection, we provide end-to-end services tailored to your project."
      />
      <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map((service, i) => (
          <Reveal as="li" key={service.id} from="up" delay={(i % 3) * 0.08}>
            <Card interactive className="h-full p-6">
              <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <ServiceIcon name={service.icon} className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-semibold">{service.name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {service.description}
              </p>
            </Card>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
