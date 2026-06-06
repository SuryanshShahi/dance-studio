"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/shared";
import { cn } from "@/utils";
import { NAV_LINKS, SITE_NAME } from "@/utils/constants";

export function Header() {
  const pathname = usePathname();
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let lastScroll = 0;

    const onScroll = () => {
      const currentScroll = window.pageYOffset;

      if (currentScroll <= 0) {
        setHidden(false);
        setScrolled(false);
      } else if (currentScroll > lastScroll && currentScroll > 80) {
        setHidden(true);
        setScrolled(true);
      } else {
        setHidden(false);
        setScrolled(true);
      }

      lastScroll = currentScroll;
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={cn(
        "fixed top-0 z-50 w-full border-b border-outline-variant/30 backdrop-blur-xl transition-transform duration-300",
        hidden ? "-translate-y-full" : "translate-y-0",
        scrolled ? "bg-white/95 shadow-md" : "bg-white/80 shadow-sm",
      )}
    >
      <div className="mx-auto flex max-w-[1440px] items-center justify-between px-margin-mobile py-4 md:px-margin-desktop">
        <Link
          href="/"
          className="font-display text-2xl font-extrabold text-primary"
        >
          {SITE_NAME}
        </Link>

        <div className="hidden items-center gap-10 md:flex">
          {NAV_LINKS.map(({ href, label }) => {
            const isActive =
              href === "/" ? pathname === "/" : pathname.startsWith(href);

            return (
              <Link
                key={href}
                href={href}
                className={cn(
                  "text-sm font-semibold uppercase tracking-wider transition-colors",
                  isActive
                    ? "border-b-2 border-primary pb-1 text-primary"
                    : "text-on-surface-variant hover:text-primary",
                )}
              >
                {label}
              </Link>
            );
          })}
        </div>

        <Link href="/contact">
          <Button variant="primary" size="nav" className="active:scale-95">
            Book a Class
          </Button>
        </Link>
      </div>
    </nav>
  );
}
