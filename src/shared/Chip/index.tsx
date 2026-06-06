import { HTMLAttributes } from "react";
import { cn } from "@/utils";

type ChipVariant =
  | "primary"
  | "secondary"
  | "tertiary"
  | "primary-container"
  | "tertiary-container";

export interface ChipProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: ChipVariant;
}

const variantStyles: Record<ChipVariant, string> = {
  primary: "bg-primary text-on-primary",
  secondary: "bg-secondary-container text-on-secondary-container",
  tertiary: "bg-tertiary text-on-tertiary",
  "primary-container": "bg-primary-container text-on-primary-container",
  "tertiary-container": "bg-tertiary-container text-on-tertiary-container",
};

export function Chip({
  variant = "primary",
  className = "",
  children,
  ...props
}: ChipProps) {
  return (
    <span
      className={cn(
        "inline-block rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wide",
        variantStyles[variant],
        className,
      )}
      {...props}
    >
      {children}
    </span>
  );
}
