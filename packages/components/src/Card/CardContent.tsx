import { ReactNode, CSSProperties } from "react";

export interface CardContentProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

const CardContent: React.FC<CardContentProps> = ({ children, className, style, ...props }) => {
  return (
    <div {...props} className={className} style={style}>
      {children}
    </div>
  );
};

export default CardContent;
