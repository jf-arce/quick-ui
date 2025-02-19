import React from "react";
import { CardProps } from "./Card.types";
import { BorderRadius } from "../types/global.types";

const Card: React.FC<CardProps> = ({
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
      className={`${BorderRadius[radius]} max-w-xs overflow-hidden shadow-md transition-all hover:shadow-lg group ${className}`}
      style={style}
    >
      {children}
    </div>
  );
};

export default Card;
