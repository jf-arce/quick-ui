import { CardContentProps } from "./Card.types";

const CardContent: React.FC<CardContentProps> = ({ children, className, style, ...props }) => {
  return (
    <div {...props} className={className} style={style}>
      {children}
    </div>
  );
};

export default CardContent;
