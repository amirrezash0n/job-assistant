import { ReactNode } from "react";
import { LucideIcon } from "lucide-react";

interface ButtonProps {
  children: ReactNode;
  icon?: LucideIcon;
  iconPosition?: "left" | "right";
  variant?:
    | "primary"
    | "secondary"
    | "outline"
    | "ghost"
    | "danger"
    | "success";
  size?: "xs" | "sm" | "md" | "lg" | "xl";
  rounded?: "none" | "sm" | "md" | "lg" | "full";
  disabled?: boolean;
  loading?: boolean;
  darkMode?: boolean;
  onClick?: () => void;
  href?: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  type?: "button" | "submit" | "reset";
  className?: string;
  fullWidth?: boolean;
}

export default function Button({
  children,
  icon: Icon,
  iconPosition = "left",
  variant = "primary",
  size = "md",
  rounded = "md",
  disabled = false,
  loading = false,
  darkMode = false,
  onClick,
  href,
  target = "_self",
  type = "button",
  className = "",
  fullWidth = false,
}: ButtonProps) {
  const baseStyles = "button";

  const variants = {
    primary: darkMode
      ? "bg-blue-500 text-white hover:bg-blue-600 focus:ring-blue-400"
      : "bg-blue-600 text-white hover:bg-blue-700 focus:ring-blue-500",

    secondary: darkMode
      ? "bg-gray-600 text-white hover:bg-gray-700 focus:ring-gray-400"
      : "bg-gray-500 text-white hover:bg-gray-600 focus:ring-gray-500",

    outline: darkMode
      ? "border border-gray-500 text-white hover:bg-gray-800 focus:ring-gray-400"
      : "border border-gray-300 text-gray-700 hover:bg-gray-50 focus:ring-blue-500",

    ghost: darkMode
      ? "text-gray-300 hover:bg-gray-800 hover:text-white focus:ring-gray-400"
      : "text-gray-600 hover:bg-gray-100 hover:text-gray-900 focus:ring-blue-500",

    danger: darkMode
      ? "bg-red-500 text-white hover:bg-red-600 focus:ring-red-400"
      : "bg-red-600 text-white hover:bg-red-700 focus:ring-red-500",

    success: darkMode
      ? "bg-green-500 text-white hover:bg-green-600 focus:ring-green-400"
      : "bg-green-600 text-white hover:bg-green-700 focus:ring-green-500",
  };

  const sizes = {
    xs: "px-2 py-1 text-xs gap-1",
    sm: "px-3 py-1.5 text-sm gap-1.5",
    md: "px-4 py-2 text-base gap-2",
    lg: "px-5 py-2.5 text-lg gap-2.5",
    xl: "px-6 py-3 text-xl gap-3",
  };

  const roundness = {
    none: "rounded-none",
    sm: "rounded-sm",
    md: "rounded-md",
    lg: "rounded-lg",
    full: "rounded-full",
  };

  const iconSizes = {
    xs: 14,
    sm: 16,
    md: 18,
    lg: 20,
    xl: 22,
  };

  const buttonClasses = [
    baseStyles,
    variants[variant],
    sizes[size],
    roundness[rounded],
    fullWidth ? "w-full" : "",
    darkMode ? "focus:ring-offset-gray-900" : "focus:ring-offset-white",
    className,
  ].join(" ");

  const buttonContent = (
    <>
      {loading ? (
        <div
          className="animate-spin rounded-full border-2 border-current border-t-transparent"
          style={{ width: iconSizes[size], height: iconSizes[size] }}
        />
      ) : (
        <>
          {Icon && iconPosition === "left" && (
            <Icon size={iconSizes[size]} className="flex-shrink-0" />
          )}

          <span className={loading ? "opacity-0" : "opacity-100"}>
            {children}
          </span>

          {Icon && iconPosition === "right" && (
            <Icon size={iconSizes[size]} className="flex-shrink-0" />
          )}
        </>
      )}
    </>
  );

  if (href && !disabled && !loading) {
    return (
      <a
        href={href}
        target={target}
        rel={target === "_blank" ? "noopener noreferrer" : undefined}
        className={buttonClasses}
      >
        {buttonContent}
      </a>
    );
  }
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={buttonClasses}
    >
      {buttonContent}
    </button>
  );
}
