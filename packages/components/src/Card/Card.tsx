import React, { ReactNode, CSSProperties } from "react";

enum BorderRadiusCard {
  "none" = "rounded-none",
  "xs" = "rounded-[2px]",
  "sm" = "rounded-[4px]",
  "md" = "rounded-[6px]",
  "lg" = "rounded-[8px]",
  "xl" = "rounded-[12px]",
  "2xl" = "rounded-[24px]",
  "full" = "rounded-full",
}

type BorderRadiusCardType = keyof typeof BorderRadiusCard;

interface CardProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  radius?: BorderRadiusCardType;
}

const Card: React.FC<CardProps> = ({ children, className, style, radius = "lg", ...props }) => {
  return (
    <div {...props} className={`${BorderRadiusCard[radius]} ${className}`} style={style}>
      {children}
    </div>
  );
};

export default Card;
