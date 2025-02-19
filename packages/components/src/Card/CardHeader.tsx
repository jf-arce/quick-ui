import { CardHeaderProps } from "./Card.types";

const CardHeader: React.FC<CardHeaderProps> = ({ children, className, style, ...props }) => {
  return (
    <div
      {...props}
      className={`overflow-hidden flex items-center justify-center ${className} `}
      style={style}
    >
      {children}
    </div>
  );
};

export default CardHeader;
