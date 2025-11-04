import React from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "md", children, ...props },
    ref
  ) => {
    const baseStyles =
      "inline-flex items-center justify-center rounded-full font-semibold transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";

    const variants = {
      primary:
        "bg-white text-[var(--primary-blue)] hover:bg-gray-50 shadow-lg hover:shadow-xl hover:-translate-y-1 focus:ring-[var(--aqua)]",
      secondary:
        "bg-transparent text-white border-2 border-white hover:bg-white hover:text-[var(--primary-blue)] focus:ring-white",
      outline:
        "bg-transparent text-[var(--primary-blue)] border-2 border-[var(--primary-blue)] hover:bg-[var(--primary-blue)] hover:text-white focus:ring-[var(--aqua)]",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-8 py-4 text-base",
      lg: "px-10 py-5 text-lg",
    };

    return (
      <button
        ref={ref}
        className={cn(baseStyles, variants[variant], sizes[size], className)}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";
