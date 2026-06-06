import { type ReactNode } from "react";
import { cn } from "@/utils";

export type SocialPlatform = "instagram" | "tiktok" | "facebook" | "youtube";

type SocialIconProps = {
  platform: SocialPlatform;
  className?: string;
  size?: number;
};

const icons: Record<SocialPlatform, ReactNode> = {
  instagram: (
    <path
      fill="currentColor"
      d="M7.8 2h8.4A5.8 5.8 0 0 1 22 7.8v8.4A5.8 5.8 0 0 1 16.2 22H7.8A5.8 5.8 0 0 1 2 16.2V7.8A5.8 5.8 0 0 1 7.8 2m-.2 2A3.6 3.6 0 0 0 4 7.6v8.8A3.6 3.6 0 0 0 7.6 20h8.8a3.6 3.6 0 0 0 3.6-3.6V7.6A3.6 3.6 0 0 0 16.4 4H7.6m9.65 1.5a1.08 1.08 0 0 1 1.08 1.08 1.08 1.08 0 0 1-1.08 1.08 1.08 1.08 0 0 1-1.08-1.08 1.08 1.08 0 0 1 1.08-1.08M12 7a5 5 0 0 1 5 5 5 5 0 0 1-5 5 5 5 0 0 1-5-5 5 5 0 0 1 5-5m0 2a3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3 3 3 0 0 0-3-3z"
    />
  ),
  tiktok: (
    <path
      fill="currentColor"
      d="M16.6 5.82s.51.5 0 0A4.28 4.28 0 0 1 15.54 3h-3.09v12.4a2.59 2.59 0 0 1-2.59 2.5c-1.42 0-2.6-1.16-2.6-2.6 0-1.72 1.66-3.01 3.37-2.48V9.66c-3.45-.46-6.47 2.22-6.47 5.64 0 3.33 2.76 5.7 5.69 5.7 3.14 0 5.69-2.55 5.69-5.7V9.01a7.35 7.35 0 0 0 4.3 1.38V7.3a4.1 4.1 0 0 1-1-.48z"
    />
  ),
  facebook: (
    <path
      fill="currentColor"
      d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.16-9.9c0-5.53-4.5-10.02-10-10.02z"
    />
  ),
  youtube: (
    <path
      fill="currentColor"
      d="M10 15l5.19-3L10 9v6m11.56-7.83c.09.46.17 1.34.22 2.57.05 1.23.08 2.3.08 3.22 0 .92-.03 1.99-.08 3.22-.05 1.23-.13 2.11-.22 2.57-.12.55-.47 1.02-1 1.15-1.12.28-5.58.43-5.58.43s-4.46-.15-5.58-.43c-.53-.13-.88-.6-1-1.15-.09-.46-.17-1.34-.22-2.57-.05-1.23-.08-2.3-.08-3.22 0-.92.03-1.99.08-3.22.05-1.23.13-2.11.22-2.57.12-.55.47-1.02 1-1.15 1.12-.28 5.58-.43 5.58-.43s4.46.15 5.58.43c.53.13.88.6 1 1.15z"
    />
  ),
};

export function SocialIcon({ platform, className, size = 24 }: SocialIconProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width={size}
      height={size}
      className={cn("shrink-0", className)}
      aria-hidden="true"
    >
      {icons[platform]}
    </svg>
  );
}
