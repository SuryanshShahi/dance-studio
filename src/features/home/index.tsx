"use client";

import Image from "next/image";
import Link from "next/link";
import { Button, Chip, Icon } from "@/shared";
import { cn } from "@/utils";
import { SITE_DESCRIPTION } from "@/utils/constants";
import { useHome } from "./useHook";

const numberColorMap = {
  tertiary: "text-tertiary",
  primary: "text-primary",
  secondary: "text-secondary",
} as const;

export default function HomePage() {
  const {
    heroImage,
    studentSpecials,
    danceStyles,
    email,
    setEmail,
    subscribed,
    handleSubscribe,
  } = useHome();

  return (
    <>
      {/* Hero */}
      <section className="relative flex h-screen items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={heroImage}
            alt="Dynamic dancer in mid-air motion with neon pink and blue stage lights"
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/40 to-transparent" />
        </div>

        <div className="relative z-10 mx-auto w-full max-w-[1440px] px-margin-mobile md:px-margin-desktop">
          <div className="max-w-4xl">
            <h1 className="font-display mb-8 text-5xl font-extrabold leading-none tracking-tighter text-white md:text-[80px] md:leading-[88px]">
              UNLEASH YOUR
              <br />
              <span className="text-primary italic">INNER RHYTHM</span>
            </h1>
            <p className="mb-12 max-w-2xl text-lg font-semibold leading-7 text-white/80">
              {SITE_DESCRIPTION}
            </p>
            <div className="flex flex-wrap gap-gutter">
              <Link href="/contact">
                <Button variant="primary" size="hero">
                  Book a Class
                </Button>
              </Link>
              <Link href="/events">
                <Button variant="outline" size="hero">
                  View Schedule
                </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 animate-bounce flex-col items-center gap-2">
          <span className="text-[10px] font-bold uppercase tracking-widest text-white/60">
            Scroll
          </span>
          <Icon name="expand_more" className="text-primary" />
        </div>
      </section>

      {/* Student Specials */}
      <section className="mx-auto max-w-[1440px] px-margin-mobile py-24 md:px-margin-desktop">
        <div className="mb-16 flex flex-col items-end justify-between gap-gutter md:flex-row">
          <div className="md:w-1/2">
            <h2 className="font-display mb-4 text-[32px] font-bold leading-[38px] text-primary md:text-[40px] md:leading-[48px]">
              STUDENT SPECIALS
            </h2>
            <p className="text-lg leading-7 text-on-surface-variant">
              Elevate your game with our exclusive introductory offers designed
              for every level of dancer.
            </p>
          </div>
          <div className="mx-8 mb-6 hidden h-px flex-grow bg-outline-variant/50 md:block" />
        </div>

        <div className="grid grid-cols-1 gap-gutter md:grid-cols-3">
          {studentSpecials.map((special) => (
            <article
              key={special.id}
              className={cn(
                "neon-glow group relative flex h-full flex-col rounded-xl p-8 transition-all duration-500 hover:-translate-y-2",
                special.featured
                  ? "overflow-hidden border-2 border-primary/20 bg-primary-container/20"
                  : "glass-card border-outline-variant/30",
              )}
            >
              {special.featured && (
                <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-primary/10 blur-3xl" />
              )}
              <div className="mb-8">
                <span
                  className={cn(
                    "font-display mb-2 block text-2xl font-bold opacity-50",
                    numberColorMap[special.numberColor],
                  )}
                >
                  {special.number}
                </span>
                <h3 className="font-display mb-2 text-2xl font-bold text-on-surface">
                  {special.title}
                </h3>
                <p className="text-base text-on-surface-variant">
                  {special.description}
                </p>
              </div>
              <div className="mt-auto">
                <div className="font-display mb-6 text-[40px] font-extrabold leading-[48px] text-primary">
                  ${special.price}
                </div>
                <Button
                  variant={special.ctaVariant}
                  size="card"
                  fullWidth
                  className="tracking-widest"
                >
                  {special.cta}
                </Button>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Explore Styles */}
      <section className="overflow-hidden bg-surface-container-low py-24">
        <div className="mx-auto mb-12 max-w-[1440px] px-margin-mobile md:px-margin-desktop">
          <h2 className="font-display text-[32px] font-bold leading-[38px] text-on-surface md:text-[40px] md:leading-[48px]">
            EXPLORE <span className="text-primary italic">STYLES</span>
          </h2>
        </div>

        <div className="no-scrollbar flex snap-x gap-gutter overflow-x-auto pb-12 px-margin-mobile md:px-margin-desktop">
          {danceStyles.map((style) => (
            <article
              key={style.id}
              className="group relative h-[550px] min-w-[400px] cursor-pointer snap-start overflow-hidden rounded-2xl shadow-lg"
            >
              <Image
                src={style.image}
                alt={style.title}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-110"
                sizes="400px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 w-full translate-y-4 border-t border-white/20 bg-white/10 p-8 backdrop-blur-md transition-transform duration-300 group-hover:translate-y-0">
                <div className="flex items-center justify-between">
                  <div>
                    <Chip variant={style.chipVariant} className="mb-3">
                      {style.chip}
                    </Chip>
                    <h4 className="font-display text-2xl font-bold text-white">
                      {style.title}
                    </h4>
                  </div>
                  <Icon name="arrow_forward" className="text-white" size={30} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* Newsletter */}
      <section className="mx-auto max-w-[1440px] px-margin-mobile py-24 text-center md:px-margin-desktop">
        <div className="relative mx-auto max-w-3xl overflow-hidden rounded-3xl border border-outline-variant/30 bg-white p-12 shadow-2xl shadow-primary/5">
          <div className="absolute -left-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-[100px]" />
          <div className="absolute -bottom-20 -right-20 h-64 w-64 rounded-full bg-secondary/5 blur-[100px]" />

          <h2 className="font-display relative mb-4 text-[32px] font-bold leading-[38px] text-on-surface md:text-[40px] md:leading-[48px]">
            JOIN THE CREW
          </h2>
          <p className="relative mb-10 px-8 text-base text-on-surface-variant">
            Stay ahead of the curve. Get notified about guest workshops,
            exclusive flash sales, and new class drops.
          </p>

          <form
            onSubmit={handleSubscribe}
            className="relative mx-auto flex max-w-lg flex-col gap-4 md:flex-row"
          >
            <input
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="Enter your email"
              required
              className="flex-grow rounded-full border border-outline-variant/30 bg-surface-container-low px-6 py-4 text-on-surface outline-none transition-all focus:border-transparent focus:ring-2 focus:ring-primary"
            />
            <Button type="submit" variant="primary" size="subscribe">
              Subscribe
            </Button>
          </form>

          {subscribed && (
            <p className="relative mt-4 text-sm text-primary">
              Welcome to the crew!
            </p>
          )}

          <p className="relative mt-6 text-xs font-bold uppercase tracking-widest text-on-surface-variant/60">
            No spam. Just pure rhythm.
          </p>
        </div>
      </section>
    </>
  );
}
