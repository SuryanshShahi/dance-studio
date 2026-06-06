"use client";

import Image from "next/image";
import { Button, Chip, Icon } from "@/shared";
import { cn } from "@/utils";
import {
  EVENT_FILTERS,
  type StudioEvent,
  useEvents,
} from "./useHook";

function MetaItem({
  icon,
  text,
}: {
  icon: StudioEvent["meta"][number]["icon"];
  text: string;
}) {
  return (
    <span className="flex items-center gap-2 text-sm font-semibold uppercase tracking-wide text-on-surface-variant">
      <Icon name={icon} className="text-primary" size={18} />
      {text}
    </span>
  );
}

function FeaturedEventCard({ event }: { event: StudioEvent }) {
  return (
    <article
      className={cn(
        "group relative flex min-h-[450px] flex-col justify-end overflow-hidden rounded-xl border border-outline-variant/30 p-8 transition-transform duration-500 hover:-translate-y-2",
        "glass-card neon-glow-card md:col-span-8",
      )}
    >
      <div className="absolute inset-0 -z-10">
        <Image
          src={event.image}
          alt={event.imageAlt}
          fill
          className={cn(
            "object-cover transition-transform duration-700 group-hover:scale-110",
            event.imageOpacity,
          )}
          sizes="(max-width: 768px) 100vw, 66vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/60 to-transparent" />
      </div>

      <div className="mb-4 flex gap-3">
        {event.badges.map((badge) => (
          <Chip
            key={badge.label}
            variant={badge.variant}
            className="text-xs font-bold tracking-wider"
          >
            {badge.label}
          </Chip>
        ))}
      </div>

      <h2 className="font-display mb-2 text-[32px] font-bold leading-[38px] text-on-surface md:text-[40px] md:leading-[48px]">
        {event.title}
      </h2>

      <div className="mb-6 flex flex-wrap items-center gap-6">
        {event.meta.map((item) => (
          <MetaItem key={item.text} icon={item.icon} text={item.text} />
        ))}
      </div>

      <p className="mb-8 max-w-lg text-on-surface-variant">{event.description}</p>

      <div className="flex items-center justify-between">
        {event.price && (
          <span className="font-display text-2xl font-bold text-primary">
            {event.price}
          </span>
        )}
        <Button variant="register" size="register">
          {event.cta}
          <Icon name="arrow_forward" />
        </Button>
      </div>
    </article>
  );
}

function CardEvent({ event }: { event: StudioEvent }) {
  return (
    <article className="group relative flex min-h-[450px] flex-col overflow-hidden rounded-xl border border-outline-variant/30 p-8 transition-transform duration-500 hover:-translate-y-2 glass-card md:col-span-4">
      <div className="absolute inset-0 -z-10">
        <Image
          src={event.image}
          alt={event.imageAlt}
          fill
          className={cn(
            "object-cover transition-transform duration-700 group-hover:scale-110",
            event.imageOpacity,
          )}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
      </div>

      <div className="mb-auto">
        {event.badges.map((badge) => (
          <Chip
            key={badge.label}
            variant={badge.variant}
            className="text-xs font-bold tracking-wider"
          >
            {badge.label}
          </Chip>
        ))}
      </div>

      <div className="mt-auto">
        <h2 className="font-display mb-2 text-2xl font-bold text-on-surface">
          {event.title}
        </h2>

        <div className="mb-6 flex flex-col gap-2">
          {event.meta.map((item) => (
            <MetaItem key={item.text} icon={item.icon} text={item.text} />
          ))}
        </div>

        <p className="mb-8 line-clamp-3 text-on-surface-variant">
          {event.description}
        </p>

        <Button variant="event-outline" size="event" fullWidth>
          {event.cta}
        </Button>
      </div>
    </article>
  );
}

function ListEvent({ event }: { event: StudioEvent }) {
  return (
    <article className="group flex flex-col overflow-hidden rounded-xl border border-outline-variant/30 transition-transform duration-500 hover:-translate-y-2 glass-card md:col-span-8 md:flex-row">
      <div className="relative h-64 overflow-hidden md:h-auto md:w-1/3">
        <Image
          src={event.image}
          alt={event.imageAlt}
          fill
          className={cn(
            "object-cover transition-transform duration-700 group-hover:scale-110",
            event.imageOpacity,
          )}
          sizes="(max-width: 768px) 100vw, 33vw"
        />
        <div className="absolute inset-0 hidden bg-gradient-to-r from-transparent to-surface-container md:block" />
      </div>

      <div className="flex flex-col justify-center p-8 md:w-2/3">
        {event.listLabel && (
          <span className="mb-2 text-sm font-semibold uppercase tracking-widest text-primary">
            {event.listLabel}
          </span>
        )}
        <h2 className="font-display mb-4 text-2xl font-bold text-on-surface">
          {event.title}
        </h2>
        <p className="mb-6 text-on-surface-variant">{event.description}</p>

        {event.listDetails && (
          <div className="mb-6 flex flex-wrap items-center gap-8">
            {event.listDetails.map((detail) => (
              <div key={detail.label} className="flex flex-col">
                <span className="text-[10px] uppercase tracking-widest text-on-surface-variant">
                  {detail.label}
                </span>
                <span
                  className={cn(
                    "text-sm font-semibold",
                    detail.label === "Price"
                      ? "text-primary"
                      : "text-on-surface",
                  )}
                >
                  {detail.value}
                </span>
              </div>
            ))}
          </div>
        )}

        <Button variant="secure" size="faculty" className="w-fit px-8">
          {event.cta}
        </Button>
      </div>
    </article>
  );
}

function EventCard({ event }: { event: StudioEvent }) {
  if (event.layout === "featured") return <FeaturedEventCard event={event} />;
  if (event.layout === "list") return <ListEvent event={event} />;
  return <CardEvent event={event} />;
}

export default function EventsPage() {
  const {
    heroImage,
    activeFilter,
    setActiveFilter,
    filteredEvents,
    email,
    setEmail,
    subscribed,
    handleSubscribe,
  } = useEvents();

  return (
    <>
      {/* Hero */}
      <section className="relative flex h-[550px] items-center overflow-hidden bg-surface-container-low px-margin-mobile md:px-margin-desktop">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt="Professional dance studio floor with dramatic stage lighting"
            fill
            priority
            className="object-cover opacity-20 mix-blend-multiply"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1440px]">
          <span className="mb-6 inline-block rounded-full border border-primary/30 bg-primary/5 px-4 py-1 text-sm font-semibold uppercase tracking-[0.2em] text-primary">
            Live Performances &amp; Training
          </span>
          <h1 className="font-display mb-4 text-5xl font-extrabold leading-tight text-on-surface md:text-[80px] md:leading-[88px]">
            EVENTS &amp;
            <br />
            <span className="text-primary">SESSIONS</span>
          </h1>
          <p className="max-w-xl text-lg leading-7 text-on-surface-variant">
            Join our high-intensity workshops and world-class showcases.
            Experience the raw energy of rhythm in an immersive, professional
            environment.
          </p>
        </div>
      </section>

      {/* Filters & Events Grid */}
      <section className="mx-auto max-w-[1440px] px-margin-mobile py-12 md:px-margin-desktop">
        <div className="no-scrollbar mb-16 flex items-center gap-4 overflow-x-auto pb-4">
          {EVENT_FILTERS.map((filter) => {
            const isActive = activeFilter === filter.id;

            return (
              <button
                key={filter.id}
                type="button"
                onClick={() => setActiveFilter(filter.id)}
                className={cn(
                  "rounded-full px-8 py-3 text-sm font-semibold uppercase tracking-widest transition-all",
                  isActive
                    ? "bg-primary text-on-primary shadow-md"
                    : "border border-outline-variant bg-surface-container-high text-on-surface hover:border-primary/50",
                )}
              >
                {filter.label}
              </button>
            );
          })}

          <div className="ml-auto flex shrink-0 items-center gap-2 text-on-surface-variant">
            <Icon name="filter_list" />
            <span className="text-sm font-semibold uppercase">Sort by Date</span>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-gutter md:grid-cols-12">
          {filteredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="mt-12 border-t border-outline-variant/30 bg-surface-container py-20">
        <div className="mx-auto max-w-4xl px-margin-mobile text-center">
          <h3 className="font-display mb-4 text-[32px] font-bold leading-[38px] text-on-surface md:text-[40px] md:leading-[48px]">
            Don&apos;t Miss a Beat
          </h3>
          <p className="mb-10 text-lg text-on-surface-variant">
            Subscribe to get notified about early-bird registrations and secret
            pop-up sessions.
          </p>

          <form
            onSubmit={handleSubscribe}
            className="flex flex-col gap-4 md:flex-row"
          >
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Your email address"
              required
              className="flex-grow rounded-full border border-outline-variant bg-surface-container-lowest px-8 py-4 text-on-surface outline-none transition-all placeholder:text-on-surface-variant/40 focus:border-transparent focus:ring-2 focus:ring-primary"
            />
            <Button
              type="submit"
              variant="primary"
              size="subscribe"
              className="hover:scale-105"
            >
              Subscribe
            </Button>
          </form>

          {subscribed && (
            <p className="mt-4 text-sm text-primary">
              You&apos;re subscribed. We&apos;ll keep you in the loop.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
