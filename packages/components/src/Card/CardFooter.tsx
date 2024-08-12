import { CardFooterProps } from "./Card.types";

export const CardFooter: React.FC<CardFooterProps> = ({ children, className, style, ...props }) => {
  return (
    <div {...props} className={className} style={style}>
      {children}
    </div>
  );
};
