"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ExplorationProject } from "@/lib/types";

type ExplorationDetailProps = {
  project: ExplorationProject;
  previousSlug: string;
  nextSlug: string;
};

export function ExplorationDetail({ project, previousSlug, nextSlug }: ExplorationDetailProps) {
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const lightboxImages = useMemo(
    () => [{ src: project.cover, alt: `${project.title} hero image` }, ...project.images],
    [project.cover, project.images, project.title]
  );

  return (
    <section>
      <header className="mb-8">
        <h1 className="font-sans text-3xl font-bold tracking-editorial sm:text-4xl">{project.title}</h1>
        {project.intro ? <p className="mt-4 max-w-2xl text-sm leading-relaxed text-ink/70">{project.intro}</p> : null}
      </header>

      <button type="button" onClick={() => setLightboxIndex(0)} className="group mb-4 block w-full text-left sm:mb-6">
        <Image
          src={project.cover}
          alt={`${project.title} hero image`}
          width={2000}
          height={1300}
          className="h-auto w-full object-cover transition duration-500 group-hover:opacity-90"
          sizes="100vw"
          priority
        />
      </button>

      <div className="space-y-4 sm:space-y-6">
        {project.images.map((image, index) => {
          const twoUp = index > 0 && index % 3 === 1 && index < project.images.length - 1;

          if (twoUp) {
            const nextImage = project.images[index + 1];
            return (
              <div key={`${image.src}-pair`} className="grid grid-cols-1 gap-4 lg:grid-cols-2 lg:gap-6">
                {[image, nextImage].map((current, offset) => (
                  <button
                    key={current.src}
                    type="button"
                    onClick={() => setLightboxIndex(index + offset + 1)}
                    className="group block text-left"
                  >
                    <Image
                      src={current.src}
                      alt={current.alt}
                      width={1400}
                      height={1800}
                      className="h-auto w-full object-cover transition duration-500 group-hover:opacity-90"
                      sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                  </button>
                ))}
              </div>
            );
          }

          if (index > 0 && (index - 1) % 3 === 1) {
            return null;
          }

          return (
            <button key={image.src} type="button" onClick={() => setLightboxIndex(index + 1)} className="group block w-full text-left">
              <Image
                src={image.src}
                alt={image.alt}
                width={1800}
                height={1200}
                className="h-auto w-full object-cover transition duration-500 group-hover:opacity-90"
                sizes="100vw"
              />
            </button>
          );
        })}
      </div>

      <div className="mt-12 flex flex-wrap items-center gap-6 border-t border-ink/10 pt-6">
        <Link href={`/explorations/${previousSlug}`} className="text-xs uppercase tracking-[0.14em] text-ink/75 hover:text-accent">
          Previous Project
        </Link>
        <Link href="/explorations" className="text-xs uppercase tracking-[0.14em] text-ink/75 hover:text-accent">
          Back to Explorations
        </Link>
        <Link href={`/explorations/${nextSlug}`} className="text-xs uppercase tracking-[0.14em] text-ink/75 hover:text-accent">
          Next Project
        </Link>
      </div>

      <AnimatePresence>
        {lightboxIndex !== null ? (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIndex(null)}
          >
            <button
              type="button"
              className="absolute right-6 top-6 text-xs uppercase tracking-[0.14em] text-white/80"
              onClick={() => setLightboxIndex(null)}
            >
              Close
            </button>
            <button
              type="button"
              className="absolute left-6 top-1/2 -translate-y-1/2 text-xs uppercase tracking-[0.14em] text-white/80"
              onClick={(event) => {
                event.stopPropagation();
                setLightboxIndex((prev) =>
                  prev === null ? 0 : (prev - 1 + lightboxImages.length) % lightboxImages.length
                );
              }}
            >
              Prev
            </button>
            <button
              type="button"
              className="absolute right-6 top-1/2 -translate-y-1/2 text-xs uppercase tracking-[0.14em] text-white/80"
              onClick={(event) => {
                event.stopPropagation();
                setLightboxIndex((prev) => (prev === null ? 0 : (prev + 1) % lightboxImages.length));
              }}
            >
              Next
            </button>
            <motion.div
              key={lightboxImages[lightboxIndex].src}
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.25 }}
              className="max-h-[92vh] max-w-[90vw]"
              onClick={(event) => event.stopPropagation()}
            >
              <Image
                src={lightboxImages[lightboxIndex].src}
                alt={lightboxImages[lightboxIndex].alt}
                width={2200}
                height={1400}
                className="max-h-[92vh] w-auto object-contain"
                sizes="90vw"
                priority
              />
            </motion.div>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </section>
  );
}
