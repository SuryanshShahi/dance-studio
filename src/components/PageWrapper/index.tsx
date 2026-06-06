import { ReactNode } from "react";
import { cn } from "@/utils";

type PageWrapperProps = {
  children: ReactNode;
  className?: string;
};

export function PageWrapper({ children, className }: PageWrapperProps) {
  return (
    <div className={cn("mx-auto w-full max-w-6xl px-6", className)}>
      {children}
    </div>
  );
}
