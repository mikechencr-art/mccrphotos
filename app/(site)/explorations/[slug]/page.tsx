import { notFound } from "next/navigation";
import { ExplorationDetail } from "@/components/exploration-detail";
import { MotionFade } from "@/components/motion-fade";
import { getExplorationProjects } from "@/lib/gallery-data";

type ExplorationPageProps = {
  params: {
    slug: string;
  };
};

export function generateStaticParams() {
  return getExplorationProjects().map((project) => ({ slug: project.slug }));
}

export default function ExplorationProjectPage({ params }: ExplorationPageProps) {
  const projects = getExplorationProjects();
  const projectIndex = projects.findIndex((projectItem) => projectItem.slug === params.slug);

  if (projectIndex === -1) {
    notFound();
  }

  const project = projects[projectIndex];
  const previousSlug = projects[(projectIndex - 1 + projects.length) % projects.length].slug;
  const nextSlug = projects[(projectIndex + 1) % projects.length].slug;

  return (
    <MotionFade className="max-w-6xl">
      <ExplorationDetail project={project} previousSlug={previousSlug} nextSlug={nextSlug} />
    </MotionFade>
  );
}
