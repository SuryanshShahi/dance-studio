import { useMemo, useState } from "react";
import { IMAGES } from "@/utils/constants";

export type GalleryFilter = "all" | "performances" | "rehearsals";

export type GalleryItemLayout =
  | "featured-video"
  | "portrait"
  | "square"
  | "horizontal";

export type GalleryItem = {
  id: string;
  layout: GalleryItemLayout;
  category: GalleryFilter | "all";
  image: string;
  alt: string;
  title?: string;
  subtitle?: string;
  categoryLabel?: string;
  tags?: { label: string; variant: "primary" | "secondary" }[];
  colSpan: string;
  aspectClass?: string;
};

export const GALLERY_FILTERS: { id: GalleryFilter; label: string }[] = [
  { id: "all", label: "All" },
  { id: "performances", label: "Performances" },
  { id: "rehearsals", label: "Rehearsals" },
];

const GALLERY_ITEMS: GalleryItem[] = [
  {
    id: "neon-pulse",
    layout: "featured-video",
    category: "rehearsals",
    image: IMAGES.galleryFeatured,
    alt: "Neon Pulse Rehearsal",
    title: "Neon Pulse Rehearsal",
    subtitle: "A raw, high-octane look at the choreographic process.",
    colSpan: "col-span-12 md:col-span-8",
  },
  {
    id: "echoes-silence",
    layout: "portrait",
    category: "performances",
    image: IMAGES.galleryPortrait,
    alt: "Solo Contemporary performance",
    title: "Echoes of Silence",
    categoryLabel: "Performance",
    colSpan: "col-span-12 md:col-span-4",
    aspectClass: "aspect-vertical",
  },
  {
    id: "hip-hop-workshop",
    layout: "square",
    category: "rehearsals",
    image: IMAGES.galleryHipHop,
    alt: "Hip Hop Workshop",
    colSpan: "col-span-12 md:col-span-4",
    aspectClass: "aspect-square",
  },
  {
    id: "stage-lighting",
    layout: "horizontal",
    category: "performances",
    image: IMAGES.galleryStage,
    alt: "Stage Lighting Collective",
    tags: [
      { label: "Stage", variant: "primary" },
      { label: "Live", variant: "secondary" },
    ],
    colSpan: "col-span-12 md:col-span-8",
    aspectClass: "aspect-horizontal",
  },
  {
    id: "feet-detail",
    layout: "square",
    category: "performances",
    image: IMAGES.galleryFeet,
    alt: "Detail shot of dancer feet",
    colSpan: "col-span-12 md:col-span-4",
    aspectClass: "aspect-square",
  },
  {
    id: "instructor-portrait",
    layout: "square",
    category: "rehearsals",
    image: IMAGES.galleryInstructor,
    alt: "Instructor portrait",
    colSpan: "col-span-12 md:col-span-4",
    aspectClass: "aspect-square",
  },
  {
    id: "rehearsal-moment",
    layout: "square",
    category: "rehearsals",
    image: IMAGES.galleryRehearsal,
    alt: "Rehearsal moment",
    colSpan: "col-span-12 md:col-span-4",
    aspectClass: "aspect-square",
  },
];

export function useGallery() {
  const [activeFilter, setActiveFilter] = useState<GalleryFilter>("all");

  const filteredItems = useMemo(() => {
    if (activeFilter === "all") return GALLERY_ITEMS;
    return GALLERY_ITEMS.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  return {
    activeFilter,
    setActiveFilter,
    filteredItems,
  };
}
