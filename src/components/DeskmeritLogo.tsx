import React from "react";
import { PulseTrackLogo } from "../design-system/components/PulseTrackLogo";

export interface DeskmeritLogoProps {
  variant?: "horizontal" | "reverse" | "stacked" | "symbol";
  className?: string;
  size?: "sm" | "md" | "lg";
  endorsement?: boolean;
}

/**
 * Brand Logo component.
 * Adheres strictly to the PulseTrack Brand Guidelines (v1.0):
 * - Live Loop symbol (64x64 grid geometry with 8.5 stroke and Ember pulse dot)
 * - Wordmark in Inter Display Bold, tracked -3%, lowercase
 */
export function DeskmeritLogo({
  variant = "horizontal",
  className = "",
  size = "md",
  endorsement = false,
}: DeskmeritLogoProps) {
  let logoVariant:
    | "primary"
    | "reverse"
    | "stacked"
    | "symbol"
    | "endorsed" = "primary";

  if (variant === "reverse") {
    logoVariant = "reverse";
  } else if (variant === "stacked") {
    logoVariant = "stacked";
  } else if (variant === "symbol") {
    logoVariant = "symbol";
  } else if (endorsement) {
    logoVariant = "endorsed";
  }

  return (
    <PulseTrackLogo
      variant={logoVariant}
      size={size}
      className={className}
      asLink={true}
    />
  );
}
