import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const buttonVariants = cva(
  "relative overflow-hidden px-6 py-1 rounded-2xl border border-white text-black \
   bg-gradient-to-r from-black via-black to-white transition-all duration-[1200ms] \
   hover:text-white hover:border-black",
  {
    variants: {},
    defaultVariants: {},
  }
);

// base style
const baseButtonStyles: React.CSSProperties = {
  backgroundImage: "linear-gradient(to right, black 50%, white 50%)",
  backgroundSize: "400% auto",
  backgroundPosition: "right",
  backgroundColor: "black", // fallback color
  transition: "all 1200ms ease-in-out",
};


export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const SlowButton = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, asChild, style, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    const [hovered, setHovered] = React.useState(false);

    return (
      <Comp
        ref={ref}
        className={cn("wavy-ui", buttonVariants(), className)}
        style={{
          ...baseButtonStyles,
          backgroundPosition: hovered ? "left" : "right",
          ...style, // allow user to override if needed
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        {...props}
      />
    );
  }
);

SlowButton.displayName = "SlowButton";

export { SlowButton, buttonVariants };
