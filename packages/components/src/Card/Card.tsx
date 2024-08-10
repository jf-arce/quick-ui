import React from "react";
import { CardProps } from "./Card.types";

const Card: React.FC<CardProps> = ({
  title,
  subtitle,
  image,
  content,
  footer,
  className = "",
  variant = "default",
  imagePosition = "top",
}) => {
  return (
    <div
      className={`bg-white border border-gray-200 rounded-lg shadow-md ${variant === "outlined" ? "border-gray-300" : ""} ${variant === "elevated" ? "shadow-xl" : ""} ${className}`}
    >
      {image && imagePosition === "top" && (
        <img src={image} alt="Card image" className="w-full h-48 object-cover rounded-t-lg" />
      )}
      <div className="p-6">
        {title && <h2 className="text-2xl font-bold mb-2">{title}</h2>}
        {subtitle && <h3 className="text-lg text-gray-600 mb-4">{subtitle}</h3>}
        <div className="mb-4">{content}</div>
        {footer && <div className="mt-4 border-t border-gray-200 pt-4">{footer}</div>}
      </div>
      {image && imagePosition === "left" && (
        <div className="flex">
          <img src={image} alt="Card image" className="w-1/3 h-auto object-cover rounded-l-lg" />
          <div className="p-6 flex-1">
            {title && <h2 className="text-2xl font-bold mb-2">{title}</h2>}
            {subtitle && <h3 className="text-lg text-gray-600 mb-4">{subtitle}</h3>}
            <div className="mb-4">{content}</div>
            {footer && <div className="mt-4 border-t border-gray-200 pt-4">{footer}</div>}
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
