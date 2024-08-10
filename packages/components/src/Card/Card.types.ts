export interface CardProps {
  title?: string;
  subtitle?: string;
  image?: string;
  content: React.ReactNode;
  footer?: React.ReactNode;
  className?: string;
  variant?: "default" | "outlined" | "elevated";
  imagePosition?: "top" | "left";
}
