/**
 * Button component with customizable styles and effects.
 *
 * Renders a button with configurable background color, size, radius,
 * text color, hover effects, ripple effect, and more.
 */
import React, { useEffect, useRef } from "react";
import { VariantEnum, ButtonProps, ButtonRadius } from "./Button.types";
import { ButtonSize, twStyles } from "./Button.constants";
import { handleRippleEffect } from "./rippleEffect";
import Spinner from "../Spinner";
import clsx from "clsx";
import { darkenColor } from "../../utils/colors";

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
  variant = VariantEnum.PRIMARY,
  icon = null,
  onClick,
  className,
  style,
  disabled = false,
  type = "button",
  loading = false,
  spinner = <Spinner bgColor="transparent" spinnerColor={colorText} />,
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const styles: React.CSSProperties = {
    padding: ButtonSize[size].paddingY + " " + ButtonSize[size].paddingX,
    fontSize: ButtonSize[size].fontSize,
    borderRadius: ButtonRadius[radius],
    ...style,
  };

  useEffect(() => {
    if (buttonRef.current) {
      // Set background color
      buttonRef.current.style.setProperty("--bg-color", colorBg || "transparent");
      buttonRef.current.style.setProperty("--text-color", colorText);
      // Set hover color or auto darken background color
      if (hoverColor && loading === false && disabled === false) {
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
  }, [colorBg, hoverColor, hoverOpacity, colorText, loading, disabled]);

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (ripple && loading === false) {
      handleRippleEffect(e, buttonRef, variant, colorBg, colorText); // Handle ripple effect
    }
    if (onClick) {
      onClick(e);
    }
  };

  return (
    <button
      ref={buttonRef}
      className={clsx(
        {
          //add twStyles if the condition on the right is true
          "cursor-pointer": pointer,
          [twStyles.LOADING]: loading,
          [twStyles.ICON]: icon,
          [twStyles.PULSE_ANIMATION]: pulse && !disabled && !loading,
          [twStyles.PRIMARY]: variant === VariantEnum.PRIMARY,
          [twStyles.SECONDARY]: variant === VariantEnum.SECONDARY,
          [twStyles.TERTIARY]: variant === VariantEnum.TERTIARY,
        },
        twStyles.DEFAULT,
        className,
      )}
      style={styles}
      onClick={handleClick}
      disabled={disabled}
      type={type}
    >
      {loading && spinner} {icon && icon} {children}
    </button>
  );
};

Button.displayName = "QuickUI.Button";

export default Button;
