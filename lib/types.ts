export type NavItem = {
  label: string;
  href: string;
};

export type GalleryImage = {
  src: string;
  alt: string;
};

export type ExplorationProject = {
  slug: string;
  title: string;
  subline: string;
  cover: string;
  intro?: string;
  images: GalleryImage[];
};
