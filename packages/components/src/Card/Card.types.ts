import { ReactNode, CSSProperties } from "react";
import { BorderRadiusType } from "../types/global.types";

export interface CardProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
  radius?: BorderRadiusType;
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

export enum BorderRadiusCard {
  "none" = "rounded-none",
  "xs" = "rounded-[2px]",
  "sm" = "rounded-[4px]",
  "md" = "rounded-[6px]",
  "lg" = "rounded-[8px]",
  "xl" = "rounded-[12px]",
  "2xl" = "rounded-[24px]",
  "full" = "rounded-full",
}
