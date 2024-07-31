/**
 * Function to create the ripple effect on button click.
 *
 */
import { btnType, btnTypesEnum, ColorType } from "./Button.types";

export const handleRippleEffect = (
  e: React.MouseEvent,
  buttonRef: React.RefObject<HTMLButtonElement>,
  btnType: btnType,
  colorBg: ColorType | false,
) => {
  const button = buttonRef.current;
  if (!button) return;

  // Create the ripple effect
  const ripple = document.createElement("span");
  ripple.className = "animate-ripple absolute rounded-[50%] scale-0 pointer-events-none opacity-75";
  ripple.style.backgroundColor =
    btnType === btnTypesEnum.TERTIARY
      ? colorBg
        ? colorBg
        : "rgba(255, 255, 255, 0.3)"
      : "rgba(255, 255, 255, 0.3)"; // Color of the ripple effect

  // Calculate the position of the ripple effect
  const rect = button.getBoundingClientRect(); // Get the button dimensions
  const size = Math.max(rect.width, rect.height); // Get the size of the ripple effect
  ripple.style.width = ripple.style.height = `${size}px`; // Set the size of the ripple effect
  ripple.style.left = `${e.clientX - rect.left - size / 2}px`; // Set the horizontal position
  ripple.style.top = `${e.clientY - rect.top - size / 2}px`; // Set the vertical position

  button.appendChild(ripple); // Add the ripple effect to the button

  // Remove the ripple effect after the animation ends
  ripple.addEventListener("animationend", () => {
    ripple.remove();
  });
};
