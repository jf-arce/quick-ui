import { ReactNode, CSSProperties } from "react";

export interface CardHeaderProps {
  children?: ReactNode;
  className?: string;
  style?: CSSProperties;
}

const CardHeader: React.FC<CardHeaderProps> = ({ children, className, style, ...props }) => {
  return (
    <div {...props} className={className} style={style}>
      {children}
    </div>
  );
};

export default CardHeader;
