"use client";

import Image from "next/image";
import { Icon, SocialIcon } from "@/shared";
import {
  CONTACT_INFO,
  CONTACT_SOCIAL_LINKS,
  CONTACT_SUBJECTS,
  IMAGES,
} from "@/utils/constants";
import { useContact } from "./useHook";

const inputClassName =
  "neon-border-focus rounded-lg border border-outline-variant/50 bg-surface-container-low p-4 text-base text-on-surface transition-all duration-300 placeholder:text-on-surface-variant/40";

const labelClassName =
  "text-sm font-semibold uppercase tracking-wider text-on-surface-variant group-focus-within:text-primary";

export default function ContactPage() {
  const {
    form,
    updateField,
    handleSubmit,
    isSubmitting,
    submitted,
    error,
    isEmailJsReady,
  } = useContact();

  return (
    <div className="relative mx-auto max-w-[1440px] px-margin-mobile pb-24 pt-32 md:px-margin-desktop">
      {/* Atmospheric glows */}
      <div className="absolute right-0 top-0 -z-10 h-[500px] w-[500px] rounded-full bg-primary/5 blur-[120px]" />
      <div className="absolute bottom-0 left-0 -z-10 h-[400px] w-[400px] rounded-full bg-secondary/5 blur-[100px]" />

      {/* Hero */}
      <header className="mb-20">
        <h1 className="font-display text-5xl font-extrabold leading-none tracking-tighter text-on-surface md:text-[80px] md:leading-[88px]">
          MOVE TO THE <br />
          <span className="bg-gradient-to-r from-primary via-primary-container to-secondary bg-clip-text text-transparent">
            VIBE
          </span>
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-7 text-on-surface-variant">
          Ready to take center stage? Whether you&apos;re a seasoned pro or
          just finding your rhythm, our doors are open. Get in touch and
          let&apos;s make magic happen.
        </p>
      </header>

      {/* Main grid */}
      <div className="asymmetric-grid">
        {/* Left: Contact details + map */}
        <div className="col-span-12 flex flex-col gap-12 lg:col-span-5">
          <div className="space-y-8">
            <div>
              <span className="mb-2 block text-sm font-semibold uppercase tracking-widest text-primary">
                Studio Base
              </span>
              <div className="flex items-start gap-4">
                <Icon name="location_on" className="mt-1 text-primary" />
                <p className="font-display text-2xl font-bold text-on-surface">
                  {CONTACT_INFO.address.line1}
                  <br />
                  {CONTACT_INFO.address.line2}
                </p>
              </div>
            </div>

            <div>
              <span className="mb-2 block text-sm font-semibold uppercase tracking-widest text-primary">
                Hotline
              </span>
              <div className="flex items-center gap-4">
                <Icon name="call" className="text-primary" />
                <p className="font-display text-2xl font-bold text-on-surface">
                  {CONTACT_INFO.phone}
                </p>
              </div>
            </div>

            <div>
              <span className="mb-2 block text-sm font-semibold uppercase tracking-widest text-primary">
                Email
              </span>
              <div className="flex items-center gap-4">
                <Icon name="alternate_email" className="text-primary" />
                <p className="font-display text-2xl font-bold text-on-surface">
                  {CONTACT_INFO.email}
                </p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="group relative aspect-square w-full overflow-hidden rounded-xl border border-outline-variant/30 bg-surface-container">
            <Image
              src={IMAGES.contactMap}
              alt="Studio location map"
              fill
              className="object-cover opacity-40 grayscale transition-all duration-700 group-hover:scale-105 group-hover:opacity-60"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="flex h-16 w-16 animate-pulse items-center justify-center rounded-full border border-primary/30 bg-primary/10">
                <div className="h-4 w-4 rounded-full bg-primary shadow-[0_0_20px_#be0036]" />
              </div>
            </div>
            <div className="glass-panel absolute bottom-6 left-6 right-6 rounded-lg border border-white/50 p-4 shadow-sm">
              <span className="text-sm font-semibold text-on-surface">
                FIND US IN NEW YORK
              </span>
            </div>
          </div>
        </div>

        {/* Right: Form */}
        <div className="col-span-12 lg:col-span-7">
          <div className="relative overflow-hidden rounded-3xl border border-outline-variant/30 bg-surface-container-lowest p-10 shadow-xl md:p-16">
            <div className="absolute -right-32 -top-32 h-64 w-64 rounded-full bg-primary/5 blur-3xl" />

            <h2 className="font-display relative mb-10 text-[32px] font-bold leading-[38px] text-on-surface md:text-[40px] md:leading-[48px]">
              Drop a Beat
            </h2>

            <form onSubmit={handleSubmit} className="relative space-y-8">
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="group flex flex-col gap-2">
                  <label htmlFor="name" className={labelClassName}>
                    Your Name
                  </label>
                  <input
                    id="name"
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => updateField("name", e.target.value)}
                    placeholder="John Doe"
                    className={inputClassName}
                  />
                </div>

                <div className="group flex flex-col gap-2">
                  <label htmlFor="email" className={labelClassName}>
                    Email Address
                  </label>
                  <input
                    id="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => updateField("email", e.target.value)}
                    placeholder="john@example.com"
                    className={inputClassName}
                  />
                </div>
              </div>

              <div className="group flex flex-col gap-2">
                <label htmlFor="subject" className={labelClassName}>
                  Subject of Motion
                </label>
                <select
                  id="subject"
                  value={form.subject}
                  onChange={(e) => updateField("subject", e.target.value)}
                  className={`${inputClassName} appearance-none`}
                >
                  {CONTACT_SUBJECTS.map((subject) => (
                    <option key={subject} value={subject}>
                      {subject}
                    </option>
                  ))}
                </select>
              </div>

              <div className="group flex flex-col gap-2">
                <label htmlFor="message" className={labelClassName}>
                  Your Message
                </label>
                <textarea
                  id="message"
                  required
                  rows={5}
                  value={form.message}
                  onChange={(e) => updateField("message", e.target.value)}
                  placeholder="Share your vision..."
                  className={inputClassName}
                />
              </div>

              {!isEmailJsReady && (
                <p className="text-sm text-on-surface-variant">
                  Add EmailJS keys to <code className="text-primary">.env.local</code> to
                  enable form submissions.
                </p>
              )}

              {error && (
                <p className="text-sm text-primary" role="alert">
                  {error}
                </p>
              )}

              {submitted && (
                <p className="text-sm text-primary">
                  Transmission sent! We&apos;ll get back to you soon.
                </p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="flex w-full items-center justify-center gap-3 rounded-full bg-primary py-5 text-sm font-semibold uppercase tracking-[0.2em] text-on-primary shadow-lg transition-all duration-300 hover:scale-[1.01] hover:shadow-primary/30 active:scale-95 disabled:opacity-60"
              >
                {isSubmitting ? "Sending..." : "Send Transmission"}
                <Icon name="send" />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Social */}
      <section className="mt-32 border-t border-outline-variant/30 pt-16">
        <div className="flex flex-col items-center justify-between gap-8 md:flex-row">
          <div>
            <h3 className="font-display mb-2 text-2xl font-bold text-on-surface">
              Connect with the Community
            </h3>
            <p className="text-base text-on-surface-variant">
              Follow our rhythm across all platforms.
            </p>
          </div>

          <div className="flex items-center gap-6">
            {CONTACT_SOCIAL_LINKS.map(({ platform, label, href }) => (
              <a
                key={platform}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="flex h-14 w-14 items-center justify-center rounded-full border border-outline-variant/30 bg-surface-container-low text-on-surface-variant shadow-sm transition-all duration-300 hover:border-primary/50 hover:text-primary"
              >
                <SocialIcon platform={platform} size={22} />
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
