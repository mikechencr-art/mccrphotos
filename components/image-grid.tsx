"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { GalleryImage } from "@/lib/types";

type ImageGridProps = {
  images: GalleryImage[];
  columns?: "two" | "three";
};

const MotionImage = motion(Image);

export function ImageGrid({ images, columns = "three" }: ImageGridProps) {
  return (
    <div
      className={`grid gap-4 sm:gap-5 ${
        columns === "two" ? "grid-cols-1 lg:grid-cols-2" : "grid-cols-1 sm:grid-cols-2 xl:grid-cols-3"
      }`}
    >
      {images.map((image, idx) => (
        <motion.figure
          key={image.src}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.45, delay: Math.min(idx * 0.015, 0.25) }}
          className="overflow-hidden"
        >
          <MotionImage
            src={image.src}
            alt={image.alt}
            width={1400}
            height={1800}
            className="h-auto w-full object-cover transition duration-500 hover:opacity-90"
            sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
          />
        </motion.figure>
      ))}
    </div>
  );
}
