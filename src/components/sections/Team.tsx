import Image from "next/image";
import { Facebook, Instagram, Linkedin, Youtube } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/Heading";
import { Card } from "@/components/ui/Card";
import { Reveal } from "@/components/motion/Reveal";
import { getTeam } from "@/lib/content";

const socialIcons: Record<string, LucideIcon> = {
  Facebook,
  LinkedIn: Linkedin,
  Instagram,
  YouTube: Youtube,
};

export async function Team() {
  const team = await getTeam();

  return (
    <Section id="team" surface>
      <SectionHeading
        eyebrow="Our Team"
        title="The people behind every build"
        description="A dedicated team of engineers, technicians and coordinators committed to bringing your vision to life."
      />
      <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {team.map((member, i) => (
          <Reveal as="li" key={member.id} from="up" delay={(i % 4) * 0.06}>
            <Card interactive className="h-full overflow-hidden">
              <div className="relative aspect-square">
                <Image
                  src={member.image}
                  alt={`Portrait of ${member.name}, ${member.title}`}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className="object-cover"
                />
              </div>
              <div className="p-5">
                <h3 className="font-semibold">{member.name}</h3>
                <p className="text-sm text-primary">{member.title}</p>
                <ul className="mt-3 flex gap-2">
                  {member.social.map((social) => {
                    const Icon = socialIcons[social.name] ?? Facebook;
                    return (
                      <li key={social.name}>
                        <a
                          href={social.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`${member.name} on ${social.name}`}
                          className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border text-muted-foreground transition-colors hover:bg-primary hover:text-primary-foreground"
                        >
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </Card>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
