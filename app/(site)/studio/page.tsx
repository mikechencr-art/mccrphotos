import { ImageGrid } from "@/components/image-grid";
import { MotionFade } from "@/components/motion-fade";
import { PageHeading } from "@/components/page-heading";
import { getStudioImages } from "@/lib/gallery-data";

export default function StudioPage() {
  const studioImages = getStudioImages();

  return (
    <MotionFade className="max-w-7xl">
      <PageHeading title="STUDIO PORTRAITS" subline="controlled light, intentional frames" />
      <ImageGrid images={studioImages} columns="two" />
    </MotionFade>
  );
}
