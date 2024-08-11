interface CardContentProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export const CardContent: React.FC<CardContentProps> = ({ className, children, style }) => {
  return (
    <div className={`p-6 ${className}`} style={style}>
      {children}
    </div>
  );
};
