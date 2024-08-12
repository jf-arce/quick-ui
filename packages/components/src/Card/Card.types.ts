import { ReactNode, CSSProperties } from "react";

export interface CardProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  radius?: "none" | "sm" | "md" | "lg" | "xl" | "full";
  size?: string;
}

export interface CardContentProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export interface CardHeaderProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export interface CardFooterProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

export interface CardProductsProps {
  title?: string;
  image?: string;
  description?: string;
  className?: string;
  price?: string;
}
