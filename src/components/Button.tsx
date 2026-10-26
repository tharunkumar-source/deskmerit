import React from "react";
import { Button as DsButton, ButtonVariant as DsButtonVariant, ButtonSize as DsButtonSize } from "../design-system/components/Button";

type ButtonVariant = "primary" | "secondary" | "ghost" | "danger" | "inverse" | "outline";
type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
  children: React.ReactNode;
} & Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children">;

export function Button({
  variant = "primary",
  size = "md",
  href,
  className = "",
  children,
  ...rest
}: ButtonProps) {
  // Map legacy variants to official Design System variants
  let dsVariant: DsButtonVariant = "primary";
  if (variant === "secondary") dsVariant = "secondary";
  else if (variant === "ghost") dsVariant = "ghost";
  else if (variant === "danger") dsVariant = "danger";
  else if (variant === "inverse") dsVariant = "outline";
  else if (variant === "outline") dsVariant = "outline";

  return (
    <DsButton
      variant={dsVariant}
      size={size}
      href={href}
      className={className}
      {...rest}
    >
      {children}
    </DsButton>
  );
}