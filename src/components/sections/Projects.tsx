import Image from "next/image";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/Heading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/motion/Reveal";
import { getProjects } from "@/lib/content";

export async function Projects() {
  const projects = await getProjects();

  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Our Work"
        title="Projects that speak for themselves"
        description="A selection of residential, commercial and industrial projects delivered with precision and care."
      />
      <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
          <Reveal as="li" key={project.id} from="up" delay={(i % 3) * 0.08}>
            <Card
              interactive
              className="group h-full overflow-hidden"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transform-none"
                />
                <Badge variant="primary" className="absolute left-4 top-4 bg-background/90">
                  {project.category}
                </Badge>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-semibold">{project.title}</h3>
                <p className="mt-2 line-clamp-3 text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </div>
            </Card>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
