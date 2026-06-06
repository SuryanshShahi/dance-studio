import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/utils";

type ButtonVariant =
  | "primary"
  | "outline"
  | "card-outline"
  | "card-primary"
  | "ghost"
  | "cta-white"
  | "cta-outline-white"
  | "event-outline"
  | "register"
  | "secure";
type ButtonSize = "nav" | "hero" | "card" | "subscribe" | "cta" | "faculty" | "event" | "register";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    "bg-primary text-on-primary hover:shadow-lg hover:shadow-primary/20 active:scale-95",
  outline:
    "border-2 border-primary text-primary backdrop-blur-md hover:bg-primary/10",
  "card-outline":
    "border-2 border-primary text-primary hover:bg-primary hover:text-on-primary rounded-lg",
  "card-primary":
    "bg-primary text-on-primary shadow-lg shadow-primary/20 rounded-lg",
  ghost:
    "border border-outline text-on-surface hover:border-primary hover:bg-primary hover:text-on-primary",
  "cta-white":
    "bg-white text-primary shadow-2xl hover:scale-105 active:scale-95 font-bold",
  "cta-outline-white":
    "border-2 border-white/40 text-white hover:bg-white/10 font-bold",
  "event-outline":
    "border border-primary text-primary hover:bg-primary hover:text-on-primary",
  register:
    "bg-primary text-on-primary shadow-lg shadow-primary/30 hover:bg-on-primary-container gap-2",
  secure:
    "border border-primary/40 bg-primary/10 text-primary hover:bg-primary hover:text-on-primary",
};

const sizeStyles: Record<ButtonSize, string> = {
  nav: "px-6 py-2 text-sm",
  hero: "px-10 py-5 text-sm hover:scale-105 shadow-xl shadow-primary/20",
  card: "py-4 text-sm tracking-widest",
  subscribe: "px-10 py-4 text-sm hover:shadow-lg hover:shadow-primary/30 active:scale-95",
  cta: "px-12 py-5 text-sm",
  faculty: "px-8 py-3 text-sm",
  event: "py-4 text-sm tracking-widest",
  register: "px-10 py-4 text-sm tracking-widest",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = "primary",
      size = "nav",
      fullWidth = false,
      className = "",
      type = "button",
      children,
      ...props
    },
    ref,
  ) => {
    const isCard = variant === "card-outline" || variant === "card-primary";
    const isHero = size === "hero";

    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          "inline-flex items-center justify-center font-semibold uppercase tracking-wider transition-all duration-300",
          "disabled:pointer-events-none disabled:opacity-50",
          isCard ? "" : "rounded-full",
          isHero && variant === "primary" && "duration-300",
          variantStyles[variant],
          sizeStyles[size],
          fullWidth && "w-full",
          className,
        )}
        {...props}
      >
        {children}
      </button>
    );
  },
);

Button.displayName = "Button";
