import Image from "next/image";
import { ArrowUpRight, CalendarDays } from "lucide-react";
import { Section } from "@/components/ui/Section";
import { SectionHeading } from "@/components/ui/Heading";
import { Card } from "@/components/ui/Card";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/motion/Reveal";
import { formatDate } from "@/lib/utils";
import { getBlogPosts } from "@/lib/content";

export async function Blog() {
  const posts = await getBlogPosts();

  return (
    <Section id="blog">
      <SectionHeading
        eyebrow="Insights"
        title="From our blog"
        description="Ideas, trends and lessons from the field — written by the people who build."
      />
      <ul className="mt-14 grid gap-6 md:grid-cols-3">
        {posts.map((post, i) => (
          <Reveal as="li" key={post.id} from="up" delay={(i % 3) * 0.08}>
            <Card interactive className="group flex h-full flex-col overflow-hidden">
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105 motion-reduce:transform-none"
                />
                <Badge variant="primary" className="absolute left-4 top-4 bg-background/90">
                  {post.category}
                </Badge>
              </div>
              <div className="flex flex-1 flex-col p-6">
                <p className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <CalendarDays className="h-3.5 w-3.5" aria-hidden="true" />
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                  <span aria-hidden="true">·</span>
                  <span>{post.author}</span>
                </p>
                <h3 className="mt-3 text-lg font-semibold leading-snug">
                  {post.title}
                </h3>
                <p className="mt-2 line-clamp-3 flex-1 text-sm leading-relaxed text-muted-foreground">
                  {post.excerpt}
                </p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-primary">
                  Read article
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 motion-reduce:transform-none" aria-hidden="true" />
                </span>
              </div>
            </Card>
          </Reveal>
        ))}
      </ul>
    </Section>
  );
}
