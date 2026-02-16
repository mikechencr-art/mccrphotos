import { ImageGrid } from "@/components/image-grid";
import { MotionFade } from "@/components/motion-fade";
import { PageHeading } from "@/components/page-heading";
import { getOtherImages } from "@/lib/gallery-data";

export default function OtherPage() {
  const otherImages = getOtherImages();

  return (
    <MotionFade className="max-w-7xl">
      <PageHeading title="OTHER WORKS" subline="a wider archive" />
      <ImageGrid images={otherImages} columns="three" />
    </MotionFade>
  );
}
