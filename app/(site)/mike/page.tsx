import Image from "next/image";
import Link from "next/link";
import { MotionFade } from "@/components/motion-fade";
import { PageHeading } from "@/components/page-heading";
import { getMikeImage } from "@/lib/gallery-data";

const credentials = [
  "NYU ’27",
  "16 years of Fine Arts experience",
  "Fast turnaround",
  "Direction for solo / couple / group",
  "NYC location scouting"
];

export default function MikePage() {
  const mikeImage = getMikeImage();

  return (
    <MotionFade className="max-w-6xl">
      <PageHeading title="MIKE" subline="behind the lens" />

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-10">
        <Image
          src={mikeImage}
          alt="Portrait of Mike Chen"
          width={1600}
          height={2000}
          priority
          className="h-auto w-full object-cover"
          sizes="(max-width: 1024px) 100vw, 50vw"
        />
        <div className="max-w-xl">
          <p className="text-sm font-medium leading-relaxed text-ink/78">
            <strong>A lifelong artist</strong>, Mike began his professional training in the arts at the age of <strong>4</strong>, starting
            with traditional graphite drawing and oil painting. But it didn't just stop there: this interest in the arts led
            to visits to some of the greatest museums in the world, from <strong>The Met</strong> to <strong>Mauritshuis</strong>, where Mike was
            exposed to the works of the best artists in history. Eventually, these pieces inspired explorations of graphic
            design and photography, with some of his works on display on this website. The remnants of this classically
            trained background in art can be seen in Mike's photography, where careful compositions inspired by the works
            of artists like <strong>Rembrandt van Rijn</strong> and a nuanced understanding of lighting that stemmed from studying
            <strong> Caravaggio</strong>'s works are on display. Outside of his interest in art, Mike enjoys playing table tennis and
            is a die-hard fan of <strong>FC Barcelona</strong> and <strong>Lionel Messi</strong>.
          </p>
          <ul className="mt-5 space-y-2 text-xs text-ink/82">
            {credentials.map((item) => (
              <li key={item} className="flex items-start gap-2">
                <span aria-hidden="true" className="mt-[6px] h-[3px] w-[3px] rounded-full bg-accent/60" />
                <span className="font-semibold">{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="mt-10">
        <Link href="/contact" className="text-xs uppercase tracking-[0.14em] text-ink/75 hover:text-accent">
          Start a conversation
        </Link>
      </div>
    </MotionFade>
  );
}
