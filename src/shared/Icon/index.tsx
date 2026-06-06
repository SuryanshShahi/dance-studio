import { cn } from "@/utils";

type IconProps = {
  name: string;
  className?: string;
  size?: number;
  filled?: boolean;
};

export function Icon({ name, className, size = 24, filled = false }: IconProps) {
  return (
    <span
      className={cn("material-symbols-outlined", filled && "filled", className)}
      style={{ fontSize: size }}
      aria-hidden="true"
    >
      {name}
    </span>
  );
}
