"use client";

import Image from "next/image";
import Link from "next/link";
import { Button, Icon } from "@/shared";
import { cn } from "@/utils";
import { useAbout } from "./useHook";

export default function AboutPage() {
  const { heroImage, storyImage, philosophy, instructors } = useAbout();

  return (
    <>
      {/* Hero */}
      <section className="relative flex h-screen items-center justify-center overflow-hidden bg-surface-container-highest">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt="Abstract motion of a dancer with streaks of light in a dark studio"
            fill
            priority
            className="object-cover opacity-40 mix-blend-multiply"
            sizes="100vw"
          />
          <div className="hero-gradient absolute inset-0" />
        </div>

        <div className="relative z-10 px-margin-mobile text-center">
          <h1 className="font-display mb-4 animate-pulse text-5xl font-extrabold tracking-tighter text-on-surface md:text-[80px] md:leading-[88px]">
            DEFINING THE <span className="text-primary">NEW PULSE</span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg leading-7 text-on-surface-variant">
            Where raw energy meets refined technique. We don&apos;t just teach
            steps; we curate movement experiences that resonate with the modern
            soul.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="mx-auto max-w-[1440px] px-margin-mobile py-32 md:px-margin-desktop">
        <div className="grid grid-cols-1 items-center gap-gutter md:grid-cols-12">
          <div className="space-y-8 md:col-span-5">
            <div className="inline-block rounded-full border border-primary px-4 py-1 text-sm font-semibold uppercase tracking-wide text-primary">
              Our Story
            </div>
            <h2 className="font-display text-[32px] font-bold leading-[38px] text-on-surface md:text-[40px] md:leading-[48px]">
              A Legacy of <br />
              <span className="text-primary italic">Kinetic Excellence</span>
            </h2>
            <p className="text-lg leading-7 text-on-surface-variant">
              Founded in 2018, Rhythm Studio emerged from a vision to bridge the
              gap between street energy and professional stage performance. We
              believe that dance is the ultimate expression of human intent.
            </p>
            <p className="text-base text-on-surface-variant/80">
              Our space in the heart of the city serves as a laboratory for
              movement, where world-class instructors and passionate students
              converge to push the boundaries of contemporary choreography and
              classical foundations.
            </p>
          </div>

          <div className="relative md:col-span-7">
            <div className="relative aspect-[4/5] overflow-hidden rounded-xl border border-outline-variant/30 shadow-2xl">
              <Image
                src={storyImage}
                alt="Professional dancer captured mid-leap in dramatic studio lighting"
                fill
                className="object-cover contrast-125 grayscale"
                sizes="(max-width: 768px) 100vw, 58vw"
              />
            </div>
            <div className="glass-panel absolute -bottom-8 -left-8 hidden max-w-xs rounded-xl border border-primary/10 p-8 shadow-xl md:block">
              <span className="font-display block text-[80px] font-extrabold leading-none text-primary">
                12+
              </span>
              <span className="mt-2 block text-sm font-semibold uppercase tracking-widest text-on-surface">
                Global Awards won for experimental choreography
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy of Movement */}
      <section className="overflow-hidden bg-surface-container-low py-32">
        <div className="mx-auto max-w-[1440px] px-margin-mobile md:px-margin-desktop">
          <div className="mb-20 text-center">
            <h2 className="font-display mb-4 text-[32px] font-bold leading-[38px] text-on-surface md:text-[40px] md:leading-[48px]">
              Philosophy of Movement
            </h2>
            <div className="mx-auto h-1 w-24 bg-primary" />
          </div>

          <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
            {philosophy.map((item) => (
              <article
                key={item.id}
                className={cn(
                  "group rounded-xl p-10 transition-all duration-500",
                  item.featured
                    ? "neon-glow-primary border border-primary/20 bg-white shadow-xl shadow-primary/5"
                    : "glass-panel border-transparent bg-white/40 hover:border-primary/30",
                )}
              >
                <Icon
                  name={item.icon}
                  className="mb-6 block text-primary transition-transform group-hover:scale-110"
                  size={48}
                />
                <h3 className="font-display mb-4 text-2xl font-bold uppercase text-on-surface">
                  {item.title}
                </h3>
                <p className="text-base text-on-surface-variant">
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Meet our Instructors */}
      <section className="mx-auto max-w-[1440px] px-margin-mobile py-32 md:px-margin-desktop">
        <div className="mb-16 flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div>
            <h2 className="font-display text-[32px] font-bold leading-[38px] text-on-surface md:text-[40px] md:leading-[48px]">
              Meet our <span className="text-primary italic">Instructors</span>
            </h2>
            <p className="mt-4 text-lg text-on-surface-variant">
              Industry veterans defining the next generation of movement.
            </p>
          </div>
          <Button variant="ghost" size="faculty" className="active:scale-95">
            View All Faculty
          </Button>
        </div>

        <div className="grid grid-cols-1 gap-gutter sm:grid-cols-2 lg:grid-cols-4">
          {instructors.map((instructor) => (
            <article
              key={instructor.id}
              className="group relative aspect-[3/4] overflow-hidden rounded-xl bg-surface-container-highest shadow-lg transition-all duration-500 hover:shadow-2xl"
            >
              <Image
                src={instructor.image}
                alt={instructor.name}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 w-full p-6">
                <h4 className="font-display text-2xl font-bold text-white">
                  {instructor.name}
                </h4>
                <span className="mt-1 block text-sm font-bold uppercase text-primary">
                  {instructor.role}
                </span>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-primary py-24 text-on-primary shadow-inner">
        <div className="absolute right-0 top-0 h-96 w-96 translate-x-1/2 -translate-y-1/2 rounded-full bg-white/10 blur-[100px]" />

        <div className="relative z-10 mx-auto max-w-[1440px] px-margin-mobile text-center md:px-margin-desktop">
          <h2 className="font-display mb-8 text-4xl font-extrabold uppercase text-white md:text-5xl lg:text-[80px] lg:leading-[88px]">
            Ready to find your rhythm?
          </h2>
          <div className="flex flex-col justify-center gap-4 sm:flex-row">
            <Link href="/contact">
              <Button variant="cta-white" size="cta">
                Join the Movement
              </Button>
            </Link>
            <Link href="/contact">
              <Button variant="cta-outline-white" size="cta">
                Trial Session
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
