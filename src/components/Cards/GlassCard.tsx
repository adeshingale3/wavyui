import * as React from "react";
import { cn } from "../../lib/utils"; // className merge helper

export interface RotationCardProps
  extends React.HTMLAttributes<HTMLDivElement> {
  title?: string;
  description?: string;
  rotateOnHover?: boolean;
  glow?: boolean;
}

const GlassCard = React.forwardRef<HTMLDivElement, RotationCardProps>(
  (
    {
      className,
      title = "Glossy Card",
      description = "This is a beautiful card with glass effects. Customize me!",
      rotateOnHover = true,
      glow = true,
      ...props
    },
    ref
  ) => {
    return (
      
        <div
          ref={ref}
          className={cn(
            "relative w-80 rounded-xl bg-black/10 backdrop-blur-md text-wrap border border-white/20 shadow-lg overflow-hidden transition-transform duration-500 ease-in-out cursor-pointer",
            rotateOnHover && "hover:rotate-[20deg]",
            glow && "shadow-[0_0_40px_rgba(255,255,255,0.15)]",
            className
          )}
          {...props}
        >
          {/* Glassy overlay */}
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-white/60 to-transparent opacity-20 pointer-events-none" />

          {/* Content area */}
          <div className="relative z-10 p-4 text-white font-inter break-words">
            <h2 className="text-lg font-semibold py-4 ml-2">{title}</h2>
            <p className="text-white/80 py-2 px-2 ml-2 text-sm">{description}</p>
          </div>
        </div>
    );
  }
);

GlassCard.displayName = "RotationCard";

export { GlassCard };
