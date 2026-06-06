"use client";

import Image from "next/image";
import { Icon } from "@/shared";
import { cn } from "@/utils";
import {
  GALLERY_FILTERS,
  type GalleryItem,
  useGallery,
} from "./useHook";

function FeaturedVideoCard({ item }: { item: GalleryItem }) {
  return (
    <article
      className={cn(
        "group neon-glow relative cursor-pointer overflow-hidden rounded-xl border border-outline-variant/10 bg-surface-container-low transition-all duration-500",
        item.colSpan,
      )}
    >
      <div className="absolute inset-0 z-0">
        <Image
          src={item.image}
          alt={item.alt}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-110"
          sizes="(max-width: 768px) 100vw, 66vw"
          priority
        />
        <div className="absolute inset-0 z-10 bg-gradient-to-t from-on-background/80 via-transparent to-transparent" />
      </div>

      <div className="relative z-20 flex min-h-[400px] items-end justify-between p-8 md:min-h-[480px]">
        <div>
          <span className="mb-4 inline-flex items-center gap-2 rounded-full border border-white/30 bg-white/20 px-3 py-1 text-[10px] font-semibold uppercase text-white backdrop-blur-md">
            <Icon name="play_circle" size={16} filled className="text-white" />
            Featured Video
          </span>
          <h3 className="font-display text-[32px] font-bold leading-[38px] text-white md:text-[40px] md:leading-[48px]">
            {item.title}
          </h3>
          {item.subtitle && (
            <p className="mt-2 text-base text-white/80">{item.subtitle}</p>
          )}
        </div>
        <button
          type="button"
          aria-label="Play video"
          className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-primary text-on-primary shadow-xl transition-transform hover:scale-110"
        >
          <Icon name="play_arrow" size={30} filled className="text-on-primary" />
        </button>
      </div>
    </article>
  );
}

function PortraitCard({ item }: { item: GalleryItem }) {
  return (
    <article
      className={cn(
        "group neon-glow relative cursor-pointer overflow-hidden rounded-xl border border-outline-variant/10 bg-surface-container-low transition-all duration-500",
        item.colSpan,
        item.aspectClass,
      )}
    >
      <Image
        src={item.image}
        alt={item.alt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-primary/30 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
        <Icon name="fullscreen" className="text-white" size={40} />
      </div>
      <div className="absolute bottom-0 left-0 z-20 w-full translate-y-4 p-6 opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
        <div className="glass-card rounded-lg p-4">
          {item.categoryLabel && (
            <p className="text-xs font-semibold uppercase text-primary">
              {item.categoryLabel}
            </p>
          )}
          <h4 className="font-display text-2xl font-bold text-on-surface">
            {item.title}
          </h4>
        </div>
      </div>
    </article>
  );
}

function SquareCard({ item }: { item: GalleryItem }) {
  return (
    <article
      className={cn(
        "group neon-glow relative cursor-pointer overflow-hidden rounded-xl border border-outline-variant/10 bg-surface-container-low transition-all duration-500",
        item.colSpan,
        item.aspectClass,
      )}
    >
      <Image
        src={item.image}
        alt={item.alt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, 33vw"
      />
      <div className="absolute inset-0 bg-primary/10 opacity-0 backdrop-blur-[2px] transition-opacity duration-300 group-hover:opacity-100" />
    </article>
  );
}

function HorizontalCard({ item }: { item: GalleryItem }) {
  return (
    <article
      className={cn(
        "group neon-glow relative cursor-pointer overflow-hidden rounded-xl border border-outline-variant/10 bg-surface-container-low transition-all duration-500",
        item.colSpan,
        item.aspectClass,
      )}
    >
      <Image
        src={item.image}
        alt={item.alt}
        fill
        className="object-cover transition-transform duration-700 group-hover:scale-110"
        sizes="(max-width: 768px) 100vw, 66vw"
      />
      {item.tags && (
        <div className="absolute bottom-6 left-6 flex gap-2">
          {item.tags.map((tag) => (
            <span
              key={tag.label}
              className={cn(
                "rounded-full border px-3 py-1 text-[10px] font-semibold uppercase backdrop-blur-md",
                tag.variant === "primary"
                  ? "border-primary/20 bg-white/70 text-primary"
                  : "border-secondary/20 bg-white/70 text-secondary",
              )}
            >
              {tag.label}
            </span>
          ))}
        </div>
      )}
    </article>
  );
}

function GalleryGridItem({ item }: { item: GalleryItem }) {
  switch (item.layout) {
    case "featured-video":
      return <FeaturedVideoCard item={item} />;
    case "portrait":
      return <PortraitCard item={item} />;
    case "horizontal":
      return <HorizontalCard item={item} />;
    default:
      return <SquareCard item={item} />;
  }
}

export default function GalleryPage() {
  const { activeFilter, setActiveFilter, filteredItems } = useGallery();

  return (
    <div className="mx-auto w-full max-w-[1440px] px-margin-mobile pb-24 pt-32 md:px-margin-desktop">
      {/* Title & Filters */}
      <section className="mb-16 space-y-12">
        <h1 className="font-display text-5xl font-extrabold leading-none tracking-tighter text-on-surface md:text-[80px] md:leading-[88px]">
          GALLERY
        </h1>

        <div className="flex flex-wrap items-center gap-4">
          {GALLERY_FILTERS.map((filter) => {
            const isActive = activeFilter === filter.id;

            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                className={cn(
                  "rounded-full px-8 py-3 text-sm font-semibold uppercase tracking-widest transition-all duration-300",
                  isActive
                    ? "bg-primary text-on-primary shadow-lg shadow-primary/20"
                    : "border border-outline-variant/30 bg-surface-container-low text-on-surface-variant hover:border-primary hover:text-primary",
                )}
              >
                {filter.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Masonry Grid */}
      <div className="masonry-grid">
        {filteredItems.map((item) => (
          <GalleryGridItem key={item.id} item={item} />
        ))}
      </div>

      {/* Load More */}
      <div className="mt-20 flex justify-center">
        <button
          type="button"
          className="group flex items-center gap-4 rounded-full border border-primary/30 px-10 py-4 text-sm font-semibold uppercase tracking-widest text-primary transition-all duration-500 hover:bg-primary hover:text-on-primary"
        >
          Explore More
          <Icon
            name="arrow_forward"
            className="transition-transform group-hover:translate-x-2"
          />
        </button>
      </div>
    </div>
  );
}
