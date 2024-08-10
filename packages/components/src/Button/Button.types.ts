/* Props for the Button component.*/
export interface ButtonProps {
  children?: string; // Text content of the button
  colorBg?: string | false; // Background color of the button
  size?: ButtonSizeType; // Size of the button (sm, md, lg, xl, 2xl)
  radius?: RadiusType; // Border radius of the button
  pointer?: boolean; // Whether the button cursor should be pointer
  pulse?: boolean; // Whether to enable pulse animation on click
  colorText?: string; // Text color of the button
  ripple?: boolean; // Whether to enable ripple effect on click
  hoverColor?: string | boolean; // Custom hover color (optional)
  hoverOpacity?: number; // Amount to darken hover color (optional)
  variant?: VariantType; // variant of button (primary, secondary or tertiary)
  icon?: React.ReactNode; // Icon to display in the button
  className?: string; // Custom class name for the button
  style?: React.CSSProperties; // Custom styles for the button
  disabled?: boolean; // Whether the button is disabled
  type?: "button" | "submit" | "reset"; // Button type
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  loading?: boolean; // Whether to show loading spinner
  spinner?: React.ReactNode; // Custom loading spinner
}

export type VariantType = "primary" | "secondary" | "tertiary";

export type RadiusType = "sm" | "md" | "lg" | "xl" | "full";

export type ButtonSizeType = "sm" | "md" | "lg" | "xl" | "2xl";

export enum ButtonRadius {
  "sm" = "2px",
  "md" = "4px",
  "lg" = "6px",
  "xl" = "12px",
  "full" = "100px",
}

export enum VariantEnum {
  "PRIMARY" = "primary",
  "SECONDARY" = "secondary",
  "TERTIARY" = "tertiary",
}
