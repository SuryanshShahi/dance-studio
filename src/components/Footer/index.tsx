import Link from "next/link";
import { Icon } from "@/shared";
import {
  FOOTER_LINKS,
  FOOTER_TAGLINE,
  SITE_NAME,
  SITE_TAGLINE,
} from "@/utils/constants";

const SOCIAL_ICONS = ["public", "share", "movie"] as const;

export function Footer() {
  return (
    <footer className="mt-auto w-full border-t border-outline-variant/30 bg-surface-container-low">
      <div className="mx-auto grid max-w-[1440px] grid-cols-1 gap-gutter px-margin-mobile py-16 md:grid-cols-4 md:px-margin-desktop">
        <div>
          <h3 className="font-display mb-6 text-2xl font-bold text-primary">
            {SITE_NAME}
          </h3>
          <p className="mb-6 text-base text-on-surface-variant">
            {FOOTER_TAGLINE}
          </p>
          <div className="flex gap-4">
            {SOCIAL_ICONS.map((icon) => (
              <a
                key={icon}
                href="#"
                aria-label={icon}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-outline-variant text-on-surface-variant transition-all hover:border-primary hover:bg-primary hover:text-on-primary"
              >
                <Icon name={icon} size={20} />
              </a>
            ))}
          </div>
        </div>

        {Object.values(FOOTER_LINKS).map(({ title, links }) => (
          <div key={title}>
            <h4 className="mb-6 text-sm font-semibold uppercase tracking-wider text-on-surface">
              {title}
            </h4>
            <ul className="space-y-4">
              {links.map(({ label, href }) => (
                <li key={label}>
                  <Link
                    href={href}
                    className="text-base text-on-surface-variant transition-colors hover:text-primary"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mx-auto flex max-w-[1440px] flex-col items-center justify-between gap-4 border-t border-outline-variant/10 px-margin-mobile py-8 md:flex-row md:px-margin-desktop">
        <span className="text-sm text-on-surface-variant">
          &copy; {new Date().getFullYear()} {SITE_NAME}. {SITE_TAGLINE}
        </span>
        <div className="flex items-center gap-2">
          <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
          <span className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant">
            Live in the Beat
          </span>
        </div>
      </div>
    </footer>
  );
}
