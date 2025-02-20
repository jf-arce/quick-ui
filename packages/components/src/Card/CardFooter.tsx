import { ReactNode, CSSProperties } from "react";

export interface CardFooterProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

const CardFooter: React.FC<CardFooterProps> = ({ children, className, style, ...props }) => {
  return (
    <div {...props} className={className} style={style}>
      {children}
    </div>
  );
};

export default CardFooter;
