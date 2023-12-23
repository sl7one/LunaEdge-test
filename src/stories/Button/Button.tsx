import React from "react";
import "./button.css";
import { Icon } from "../Icons/Icon";
import { IconName } from "../Icons/types";

interface ButtonProps {
  backgroundColor?: string;

  variant?: "outline" | "primary" | "text";

  size?: "xs" | "sm" | "base" | "lg" | "xl";

  disabled?: boolean;

  type?: "submit" | "button" | "reset";

  iconBefore?: IconName | undefined;
  iconAfter?: IconName | undefined;

  label: string;
  onClick?: () => void;
  style?: { [key: string]: string | number };
}

export const Button = ({
  disabled = false,
  size = "base",
  variant = "primary",
  backgroundColor,
  label,
  iconBefore = undefined,
  iconAfter = undefined,
  type = "button",
  ...props
}: ButtonProps) => {
  const common = "inline-flex items-center gap-2.5 rounded-sm w-fit";

  const commonSize = {
    xs: "p-0.5 text-xs",
    sm: "p-2 text-sm",
    base: "p-3 text-base",
    lg: "p-4 text-lg",
    xl: "p-5 text-xl",
  };

  const colors = {
    primary:
      "bg-indigo-700 text-white hover:bg-indigo-500 active:bg-indigo-500 focus:bg-blue-500 focus:outline focus:outline-2 focus:outline-indigo-700 disabled:text-indigo-300 disabled:bg-indigo-100",
    outline:
      "outline outline-1 outline-indigo-700 bg-bwhite text-indigo-700 hover:bg-indigo-100 hover:text-indigo-300 active:bg-indigo-100 active:text-indigo-300 focus:outline focus:outline-2 focus:outline-indigo-700 focus:text-indigo-700 disabled:bg-indigo-100 disabled:text-indigo-300 disabled:outline-none",
    text: "bg-white text-black hover:text-indigo-500 hover:bg-indigo-100 focus:bg-white focus:text-indigo-700 focus:outline focus:outline-2 focus:outline-indigo-700 disabled:text-indigo-300 disabled:bg-white",
  };

  return (
    <button
      type={type}
      disabled={disabled}
      className={[common, commonSize[size], colors[variant]].join(" ")}
      style={{ backgroundColor }}
      {...props}
    >
      {iconBefore && (
        <Icon
          name={iconBefore}
          className={size === "xs" ? "w-4 h-4 fill-current" : undefined}
        />
      )}
      {label}
      {iconAfter && (
        <Icon
          name={iconAfter}
          className={size === "xs" ? "w-4 h-4 fill-current" : undefined}
        />
      )}
    </button>
  );
};
