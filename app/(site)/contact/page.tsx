import { MotionFade } from "@/components/motion-fade";
import { PageHeading } from "@/components/page-heading";

export default function ContactPage() {
  return (
    <MotionFade className="max-w-2xl">
      <PageHeading title="CONTACT" subline="available for NYC and nearby" />
      <div className="space-y-5 text-sm text-ink/80">
        <p>Feel free to reach out:</p>
        <p>
          Email: <a href="mailto:mike.chen@stern.nyu.edu" className="text-ink hover:text-accent">mike.chen@stern.nyu.edu</a>
        </p>
        <p>
          Instagram: <a href="https://www.instagram.com/mccrphotos" className="text-ink hover:text-accent">@mccrphotos</a>
        </p>
      </div>
    </MotionFade>
  );
}
