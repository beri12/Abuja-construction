import { Mail, MapPin, Phone } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/Heading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/motion/Reveal";
import { contactInfo } from "@/constants/site";
import { ContactForm } from "./ContactForm";

const details = [
  { icon: Mail, label: "Email", value: contactInfo.email, href: `mailto:${contactInfo.email}` },
  { icon: Phone, label: "Phone", value: contactInfo.phone, href: `tel:${contactInfo.phone}` },
  { icon: MapPin, label: "Address", value: contactInfo.address, href: null },
];

export function Contact() {
  return (
    <Section id="contact" surface>
      <div className="grid gap-12 lg:grid-cols-2">
        <div>
          <SectionHeading
            eyebrow="Get In Touch"
            title="Let's build something together"
            description="Tell us about your project and our team will get back to you with a tailored plan and quote."
            align="left"
          />
          <ul className="mt-8 space-y-4">
            {details.map((detail) => (
              <li key={detail.label}>
                <div className="flex items-start gap-4">
                  <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <detail.icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <div>
                    <p className="text-sm font-medium text-muted-foreground">
                      {detail.label}
                    </p>
                    {detail.href ? (
                      <a
                        href={detail.href}
                        className="font-medium transition-colors hover:text-primary"
                      >
                        {detail.value}
                      </a>
                    ) : (
                      <p className="font-medium">{detail.value}</p>
                    )}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <Reveal from="left">
          <Card className="p-6 sm:p-8">
            <ContactForm />
          </Card>
        </Reveal>
      </div>
    </Section>
  );
}
