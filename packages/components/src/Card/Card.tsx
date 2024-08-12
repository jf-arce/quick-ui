import React from "react";
import { CardProps } from "./Card.types";

export const Card: React.FC<CardProps> = ({
  children,
  className,
  style,
  radius = "lg",
  size,
  ...props
}) => {
  return (
    <div
      {...props}
      className={`${cardRadius[radius]} max-w-xs overflow-hidden shadow-md transition-all hover:shadow-lg group ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

const cardRadius = {
  none: "rounded-none",
  sm: "rounded-[4px]",
  md: "rounded-[8px]",
  lg: "rounded-[12px]",
  xl: "rounded-[20px]",
  full: "rounded-full",
};
