import Image from "next/image";
import Link from "next/link";
import { MotionFade } from "@/components/motion-fade";
import { PageHeading } from "@/components/page-heading";
import { getExplorationProjects } from "@/lib/gallery-data";

export default function ExplorationsPage() {
  const explorationProjects = getExplorationProjects();

  return (
    <MotionFade className="max-w-6xl">
      <PageHeading title="ARTISTIC EXPLORATIONS" subline="projects you can step into" />
      <div className="grid grid-cols-1 gap-6 lg:grid-cols-2">
        {explorationProjects.map((project, index) => (
          <Link key={project.slug} href={`/explorations/${project.slug}`} className="group block">
            <div className="relative aspect-[4/5] w-full overflow-hidden">
              <Image
                src={project.cover}
                alt={`${project.title} cover image`}
                fill
                priority={index === 0}
                className="object-cover transition duration-500 group-hover:opacity-90"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <h2 className="mt-4 text-sm font-bold uppercase tracking-[0.14em] text-ink/90">{project.title}</h2>
            <p className="mt-1 font-sans text-base italic text-ink/65">{project.subline}</p>
          </Link>
        ))}
      </div>
    </MotionFade>
  );
}
