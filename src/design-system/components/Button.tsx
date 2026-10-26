import React from "react";

export type ButtonVariant =
  | "primary"     // Ember background + Midnight text (Main action per view, WCAG AA compliant 5.7:1)
  | "secondary"   // Midnight background + White text
  | "outline"     // White/Paper background + Mist border + Midnight text
  | "ghost"       // Transparent + Midnight text (hover subtle mist)
  | "danger"      // Rose background + White text (alerts / destructive)
  | "widget-stop" // Dark widget Ember stop button
  | "widget-sub"  // Dark widget Dusk secondary action (e.g. Private Time)

export type ButtonSize = "sm" | "md" | "lg";

export interface ButtonProps
  extends Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, "className" | "children"> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  className?: string;
  children: React.ReactNode;
}

const variantStyles: Record<ButtonVariant, string> = {
  // Brand Primary: Ember (#FF5A36) background with Midnight (#0F1730) text! Strict WCAG AA.
  primary:
    "bg-[#FF5A36] text-[#0F1730] font-semibold hover:bg-[#E94A27] active:bg-[#C2361A] active:text-white shadow-sm disabled:bg-[#FFA994] disabled:text-[#0F1730]/60",
  // Brand Secondary: Midnight (#0F1730) background with White text
  secondary:
    "bg-[#0F1730] text-white font-semibold hover:bg-[#24305A] active:bg-[#172348] shadow-sm disabled:bg-[#4A5370] disabled:text-white/60",
  // Brand Outline: Mist (#E6E2D8) border with Midnight text
  outline:
    "border border-[#E6E2D8] bg-white text-[#0F1730] font-semibold hover:bg-[#F7F4EE] hover:border-[#D6D1C5] active:bg-[#EDE9E0] disabled:border-[#E6E2D8] disabled:text-[#4A5370]/60",
  // Brand Ghost:
  ghost:
    "text-[#0F1730] font-medium hover:bg-[#FFE6DF]/60 hover:text-[#C2361A] active:bg-[#FFE6DF] disabled:text-[#4A5370]/40",
  // Brand Danger (Unproductive/Alert):
  danger:
    "bg-[#E5484D] text-white font-semibold hover:bg-[#D63E43] active:bg-[#C2361A] disabled:bg-[#9AA1B2]",
  // Desktop widget Stop action:
  "widget-stop":
    "bg-[#FF5A36] text-[#0F1730] font-bold hover:bg-[#E94A27] active:bg-[#C2361A]",
  // Desktop widget Private Time action:
  "widget-sub":
    "bg-[#24305A] text-white font-medium hover:bg-[#334173] active:bg-[#1B2446]",
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: "h-9 px-3.5 text-[13px] rounded-[10px]",
  // Official standard height: 48px, 12px radius per Page 16
  md: "h-12 px-6 text-[15px] rounded-[12px]",
  lg: "h-14 px-8 text-[16px] rounded-[12px]",
};

export function Button({
  variant = "primary",
  size = "md",
  href,
  className = "",
  children,
  ...rest
}: ButtonProps) {
  const baseClasses =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap transition-all duration-150 ease-out focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5A36] focus-visible:ring-offset-2 disabled:cursor-not-allowed select-none";
  const classes = `${baseClasses} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href) {
    return (
      <a href={href} className={classes}>
        {children}
      </a>
    );
  }

  return (
    <button type="button" className={classes} {...rest}>
      {children}
    </button>
  );
}
