/**
 * Button component with customizable styles and effects.
 *
 * Renders a button with configurable background color, size, radius,
 * text color, hover effects, ripple effect, and more.
 */
import React, { useEffect, useRef } from "react";
import { btnTypesEnum, ButtonProps, ButtonRadius } from "./Button.types";
import { ButtonSize } from "./Button.constants";
import { handleRippleEffect } from "./rippleEffect";
import { darkenColor } from "./darkenColor";
import Spinner from "../Spinner";

const Button: React.FC<ButtonProps> = ({
  children,
  colorBg = "#a551e4",
  size = "sm",
  radius = "lg",
  pointer = true,
  pulse = true,
  colorText = "#ffffff",
  ripple = true,
  hoverColor = true,
  hoverOpacity = 15,
  btnType = btnTypesEnum.PRIMARY,
  icon = null,
  onClick,
  className,
  style,
  disabled = false,
  type = "button",
  loading = false,
  spinner = <Spinner bgColor="transparent" spinnerColor="white" />,
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const styles: React.CSSProperties = {
    padding: ButtonSize[size].paddingY + " " + ButtonSize[size].paddingX,
    fontSize: ButtonSize[size].fontSize,
    borderRadius: ButtonRadius[radius],
    cursor: pointer ? "pointer" : "",
    ...style,
  };

  useEffect(() => {
    if (buttonRef.current) {
      // Set background color
      buttonRef.current.style.setProperty("--bg-color", colorBg || "transparent");
      buttonRef.current.style.setProperty("--text-color", colorText);
      // Set hover color or auto darken background color
      if (hoverColor) {
        buttonRef.current.style.setProperty(
          "--hover-color",
          typeof hoverColor === "string"
            ? hoverColor
            : colorBg
              ? darkenColor(colorBg, hoverOpacity)
              : "",
        );
      } else {
        buttonRef.current.style.setProperty("--hover-color", colorBg ? colorBg : "");
      }
    }
  }, [colorBg, hoverColor, hoverOpacity, colorText]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (ripple && loading === false) {
      handleRippleEffect(e, buttonRef, btnType, colorBg); // Handle ripple effect
    }
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      ref={buttonRef}
      className={`${className} ${loading && "opacity-60"} inline-flex items-center gap-2 justify-center font-medium relative overflow-hidden box-border transition-all hover:!bg-opacity-50 disabled:cursor-not-allowed 
disabled:bg-neutral-200 disabled:opacity-60 disabled:border-none disabled:text-neutral-100 disabled:hover:!bg-neutral-200  disabled:hover:!text-neutral-100 
      ${pulse && disabled === false && loading === false ? "active:focus:scale-[0.97] duration-150" : ""}
      ${btnType === btnTypesEnum.PRIMARY ? `border-none bg-[var(--bg-color)] text-[var(--text-color)] hover:bg-[var(--hover-color)]` : ""}
      ${btnType === btnTypesEnum.SECONDARY ? `border-[1px] border-solid border-[var(--bg-color)] bg-transparent text-[var(--bg-color)] hover:bg-[var(--hover-color)] hover:text-[var(--text-color)]` : ""}
      ${btnType === btnTypesEnum.TERTIARY ? `border-[1px] border-solid border-[var(--bg-color)] bg-transparent text-[var(--bg-color)]` : ""}
      ${icon ? "!py-[10px] !px-[12px]" : ""}`}
      style={styles}
      onClick={handleClick}
      disabled={disabled}
      type={type}
    >
      {loading && spinner} {icon && icon} {children}
    </button>
  );
};

Button.displayName = "QuickUI.Button"; //Esto es para que el componente Button se muestre en el storybook

export default Button;
