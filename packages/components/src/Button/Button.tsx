/**
 * Button component with customizable styles and effects.
 *
 * Renders a button with configurable background color, size, radius,
 * text color, hover effects, ripple effect, and more.
 */
import React, { useEffect, useRef } from "react";
import { VariantEnum, ButtonProps } from "./Button.types";
import { BorderRadius } from "../types/global.types";
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
  hoverOpacity = 8,
  variant = VariantEnum.PRIMARY,
  icon = null,
  onClick,
  className,
  style,
  disabled = false,
  type = "button",
  loading = false,
  spinner = <Spinner bgColor="transparent" spinnerColor={colorText} />,
  iconPosition = "left",
  asChild = false,
}) => {
  const buttonRef = useRef<HTMLButtonElement>(null);

  const styles: React.CSSProperties = {
    padding: ButtonSize[size].paddingY + " " + ButtonSize[size].paddingX,
    fontSize: ButtonSize[size].fontSize,
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

  // if asChild is true, render the child component with the button styles
  if (asChild) {
    const child = React.Children.only(children as React.ReactElement);
    const childRef = useRef<HTMLElement | null>(null);

    const handleChildClick = (e: React.MouseEvent<HTMLElement>) => {
      if (ripple && loading === false) {
        handleRippleEffect(e, childRef, variant, colorBg, colorText);
      }
      if (onClick) {
        onClick(e as React.MouseEvent<HTMLButtonElement>);
      }
    };

    return React.cloneElement(child, {
      ref: childRef,
      className: clsx(
        twStyles.DEFAULT,
        pointer && "cursor-pointer",
        BorderRadius[radius],
        loading && twStyles.LOADING,
        icon && twStyles.ICON,
        pulse && !disabled && !loading && twStyles.PULSE_ANIMATION,
        variant === VariantEnum.PRIMARY && twStyles.PRIMARY,
        variant === VariantEnum.SECONDARY && twStyles.SECONDARY,
        variant === VariantEnum.TERTIARY && twStyles.TERTIARY,
        child.props.className,
      ),
      style: {
        ...child.props.style,
        padding: ButtonSize[size].paddingY + " " + ButtonSize[size].paddingX,
        fontSize: ButtonSize[size].fontSize,
        "--bg-color": colorBg || "transparent",
        "--text-color": colorText,
        "--hover-color":
          hoverColor && loading === false && disabled === false
            ? typeof hoverColor === "string"
              ? hoverColor
              : colorBg
                ? darkenColor(colorBg, hoverOpacity)
                : ""
            : colorBg
              ? colorBg
              : "",
      },
      onClick: handleChildClick,
      "aria-disabled": disabled || undefined,
      tabIndex: disabled ? -1 : child.props.tabIndex,
    });
  }

  return (
    <button
      ref={buttonRef}
      className={clsx(
        twStyles.DEFAULT,
        {
          //add twStyles if the condition on the right is true
          "cursor-pointer": pointer,
          [BorderRadius[radius]]: radius,
          [twStyles.LOADING]: loading,
          [twStyles.ICON]: icon,
          [twStyles.PULSE_ANIMATION]: pulse && !disabled && !loading,
          [twStyles.PRIMARY]: variant === VariantEnum.PRIMARY,
          [twStyles.SECONDARY]: variant === VariantEnum.SECONDARY,
          [twStyles.TERTIARY]: variant === VariantEnum.TERTIARY,
        },
        className,
      )}
      style={styles}
      onClick={handleClick}
      disabled={disabled}
      type={type}
    >
      {loading && spinner} {iconPosition === "left" && icon} {children}{" "}
      {iconPosition === "right" && icon}
    </button>
  );
};

Button.displayName = "QuickUI.Button";

export default Button;
