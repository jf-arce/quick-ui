/**
 * Function to create the ripple effect on button click.
 *
 */
import { VariantType, VariantEnum } from "./Button.types";
import { colorToRgba } from "../../utils/colors";

export const handleRippleEffect = (
  e: React.MouseEvent,
  buttonRef: React.RefObject<HTMLButtonElement>,
  variant: VariantType,
  colorBg: string | false,
  colorText: string,
) => {
  const button = buttonRef.current;
  if (!button) return;

  // Create the ripple element
  const ripple = document.createElement("span");
  ripple.style.position = "absolute";
  ripple.style.borderRadius = "50%";
  ripple.style.pointerEvents = "none";
  ripple.style.opacity = "0.75";

  // Set the background color of the ripple
  ripple.style.backgroundColor =
    variant === VariantEnum.TERTIARY
      ? colorBg
        ? colorToRgba(colorBg, 0.2)
        : colorToRgba(colorText, 0.2)
      : colorToRgba(colorText, 0.3);

  // Set the position of the ripple
  const rect = button.getBoundingClientRect();
  const size = Math.max(rect.width, rect.height);
  ripple.style.width = ripple.style.height = `${size}px`;
  ripple.style.left = `${e.clientX - rect.left - size / 2}px`;
  ripple.style.top = `${e.clientY - rect.top - size / 2}px`;

  // Append the ripple to the button
  button.appendChild(ripple);

  // Create the animation
  ripple.style.animation = "rippleEffect 0.6s linear";

  // Add the keyframes to the stylesheet
  const styleSheet = document.styleSheets[0];
  const keyframes = `
    @keyframes rippleEffect {
      0% {
        transform: scale(0);
        opacity: 0.75;
      }
      100% {
        transform: scale(4);
        opacity: 0;
      }
    }
  `;

  styleSheet.insertRule(keyframes, styleSheet.cssRules.length);

  // Remove the ripple after the animation ends
  ripple.addEventListener("animationend", () => {
    ripple.remove();
  });
};
