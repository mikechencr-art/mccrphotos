import Link from "next/link";
import { ImageGrid } from "@/components/image-grid";
import { MotionFade } from "@/components/motion-fade";
import { PageHeading } from "@/components/page-heading";
import { getGradImages } from "@/lib/gallery-data";

export default function GradPage() {
  const gradImages = getGradImages();

  return (
    <MotionFade className="max-w-7xl">
      <PageHeading title="GRAD PHOTOS" subline="proof it all happened" />
      <ImageGrid images={gradImages} columns="three" />

      <div className="mt-10">
        <Link href="/contact" className="text-xs uppercase tracking-[0.14em] text-ink/75 hover:text-accent">
          Reach out for your session
        </Link>
      </div>
    </MotionFade>
  );
}
