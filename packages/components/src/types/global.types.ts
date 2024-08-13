export enum BorderRadius {
  "none" = "rounded-none",
  "xs" = "rounded-[2px]",
  "sm" = "rounded-[4px]",
  "md" = "rounded-[6px]",
  "lg" = "rounded-[8px]",
  "xl" = "rounded-[12px]",
  "2xl" = "rounded-[24px]",
  "full" = "rounded-full",
}

export type BorderRadiusType = keyof typeof BorderRadius;
