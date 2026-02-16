import "server-only";

import fs from "node:fs";
import path from "node:path";
import { ExplorationProject, GalleryImage } from "@/lib/types";

const PUBLIC_DIR = path.join(process.cwd(), "public");

const IMAGE_EXTENSIONS = new Set([".jpg", ".jpeg", ".png", ".webp", ".avif"]);

const collator = new Intl.Collator(undefined, { numeric: true, sensitivity: "base" });

const toPublicSrc = (...segments: string[]) =>
  `/${segments.map((segment) => encodeURIComponent(segment)).join("/")}`;

const isImageFile = (fileName: string) => IMAGE_EXTENSIONS.has(path.extname(fileName).toLowerCase());

const fileExists = (filePath: string) => {
  try {
    return fs.statSync(filePath).isFile();
  } catch {
    return false;
  }
};

const withVersion = (src: string, filePath: string) => {
  try {
    const version = Math.floor(fs.statSync(filePath).mtimeMs);
    return `${src}?v=${version}`;
  } catch {
    return src;
  }
};

const listImageFiles = (dir: string) => {
  if (!fs.existsSync(dir)) {
    return [] as string[];
  }

  return fs
    .readdirSync(dir)
    .filter((name) => !name.startsWith(".") && isImageFile(name))
    .sort((a, b) => collator.compare(a, b));
};

const titleFromFolderName = (folderName: string) =>
  folderName
    .replace(/[-_]+/g, " ")
    .trim()
    .toUpperCase();

const slugFromFolderName = (folderName: string) =>
  folderName
    .trim()
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

const defaultAlt = (section: string, fileName: string) =>
  `${section} image ${path.parse(fileName).name.replace(/[-_]+/g, " ")}`;

const buildGalleryFromFolder = (folder: string, sectionLabel: string): GalleryImage[] => {
  const dir = path.join(PUBLIC_DIR, folder);

  return listImageFiles(dir).map((fileName) => ({
    src: toPublicSrc(folder, fileName),
    alt: defaultAlt(sectionLabel, fileName)
  }));
};

type ExplorationMeta = {
  subline?: string;
  intro?: string;
};

const explorationMetaBySlug: Record<string, ExplorationMeta> = {
  "old-shanghai": {
    subline: "nostalgia and texture",
    intro: "Portraits shaped by memory, styling, and cinematic light."
  },
  joie: {
    subline: "joy in motion",
    intro: "A bright, kinetic study of gesture and expression."
  },
  "select-artworks": {
    subline: "pieces and process",
    intro: "A curated set of visual studies from Mike's fine arts archive."
  },
  "hong-kong": {
    subline: "streets, light, and pace",
    intro: "A city study built around density, rhythm, and color."
  }
};

export const getGradImages = () => buildGalleryFromFolder("grad", "NYC graduation photo by Mike Chen");

export const getStudioImages = () => buildGalleryFromFolder("studio", "Studio portrait by Mike Chen");

export const getOtherImages = () => buildGalleryFromFolder("other", "Editorial work by Mike Chen");

export const getExplorationProjects = (): ExplorationProject[] => {
  const explorationsDir = path.join(PUBLIC_DIR, "explorations");

  if (!fs.existsSync(explorationsDir)) {
    return [];
  }

  const folders = fs
    .readdirSync(explorationsDir, { withFileTypes: true })
    .filter((entry) => entry.isDirectory() && !entry.name.startsWith("."))
    .map((entry) => entry.name)
    .sort((a, b) => collator.compare(a, b));

  return folders
    .map((folderName) => {
      const folderPath = path.join(explorationsDir, folderName);
      const files = listImageFiles(folderPath);

      if (files.length === 0) {
        return null;
      }

      const slug = slugFromFolderName(folderName);
      const title = titleFromFolderName(folderName);

      const coverFile = files.find((name) => /^cover\./i.test(name)) ?? files[0];
      const detailFiles = files.filter((name) => name !== coverFile);

      const meta = explorationMetaBySlug[slug];

      return {
        slug,
        title,
        subline: meta?.subline ?? "a visual chapter",
        intro: meta?.intro,
        cover: toPublicSrc("explorations", folderName, coverFile),
        images: detailFiles.map((fileName) => ({
          src: toPublicSrc("explorations", folderName, fileName),
          alt: defaultAlt(title, fileName)
        }))
      } as ExplorationProject;
    })
    .filter((project): project is ExplorationProject => project !== null);
};

export const getMikeImage = () => {
  const preferred = path.join(PUBLIC_DIR, "mike", "mike-01.JPG");
  if (fileExists(preferred)) {
    return withVersion(toPublicSrc("mike", "mike-01.JPG"), preferred);
  }

  const fallback = path.join(PUBLIC_DIR, "mike", "mike-01.jpg");
  if (fileExists(fallback)) {
    return withVersion(toPublicSrc("mike", "mike-01.jpg"), fallback);
  }

  const mikeDir = path.join(PUBLIC_DIR, "mike");
  const firstImage = listImageFiles(mikeDir)[0];
  if (firstImage) {
    return withVersion(toPublicSrc("mike", firstImage), path.join(mikeDir, firstImage));
  }

  return toPublicSrc("mike", "mike-01.JPG");
};
